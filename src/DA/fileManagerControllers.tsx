'use server'
import { BlobServiceClient } from "@azure/storage-blob";
import { PrismaClient } from "@prisma/client";
import { GetUserId } from "@/middleware";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
if (!connectionString) {
    throw new Error("AZURE_STORAGE_CONNECTION_STRING is not defined");
}

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const prisma = new PrismaClient();

type UploadFile = {
    name: string;
    type: string;
    data: string;
};

/**
    * Funcion principal que hace el manejo de la subida de archivos a un 
    * contenedor en una base de datos en azure, recibe el nombre del contendor 
    * y con la variable blobServiceCliente hacen la conexion completa, luego 
    * ademas se parte la informacion en un Buffer para su subida.
*/
export async function uploadFileToAzure(file: UploadFile, extension: string): Promise<string> {
    const containerClient = blobServiceClient.getContainerClient("flexlogicuploaddemo");

    const regex = /^(.*?)(?:\.([^.]*))?$/g;
    const match = regex.exec(file.name);
    if (!match) {
        throw new Error('Invalid filename: Filename should have at least one extension');
    }

    const fileNameWithoutExtension = match[1];
    const originalExtension = match[2] || ''; 

    const newFileName = `${fileNameWithoutExtension}-${extension}.${originalExtension}`;

    const blockBlobClient = containerClient.getBlockBlobClient(newFileName);

    const buffer = Buffer.from(file.data.split(',')[1], 'base64');

    try {
        const uploadBlobResponse = await blockBlobClient.uploadData(buffer, {
            blobHTTPHeaders: { blobContentType: file.type },
        });
        console.log(`Upload block blob ${file.name} successfully`, uploadBlobResponse.requestId);
        return blockBlobClient.url;
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error uploading file to Azure', error.message);
            throw new Error('Error uploading file to Azure: ' + error.message);
        } else {
            console.error('Unknown error', error);
            throw new Error('Error uploading file to Azure');
        }
    }
};

/**
    * Funciones auxiliares para el manejo del tipo y nombre del archivo que 
    * se desea descargar. Las funciones getFileNameFromUrl y getFileTypeFromUrl 
    * trabajan en conjunto con la función principal downloadFileContent. 
    * Estas funciones se encargan de manejar archivos PDF y archivos de texto plano 
    * (ya sea en formato EDI o TXT).
*/
function getFileNameFromUrl(url: string): string {
    const urlParts = url.split('/');
    return urlParts[urlParts.length - 1] || 'downloaded_file';
};

function getFileTypeFromUrl(url: string): string {
    const fileName = getFileNameFromUrl(url);
    const fileExtension = fileName.split('.').pop()?.toLowerCase();
    
    switch (fileExtension) {
        case 'txt': return 'text/plain';
        case 'pdf': return 'application/pdf';
        default: return 'application/octet-stream';
    }
};

/**
   * Función asincrónica responsable de la descarga de archivos, esta devuelve 
   * el contenido de una URL de Azure junto con el nombre y tipo del archivo, 
   * los cuales son generados por las funciones auxiliares getFileNameFromUrl 
   * y getFileTypeFromUrl.
   * La función utiliza la descarga de archivos a través de una URL generada al 
   * cargar un documento en un contenedor de blobs de Azure, ademas es importante 
   * asegurarse de que los permisos del contenedor estén configurados como públicos 
   * para permitir el acceso a través de CORS.
*/
export async function downloadFileContent(url: string): Promise<{ content: Uint8Array, fileName: string, fileType: string }> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.statusText}`);
        }
        const data = await response.arrayBuffer();
        const fileName = getFileNameFromUrl(url);
        const fileType = getFileTypeFromUrl(url);
        return { content: new Uint8Array(data), fileName, fileType };
    } catch (error) {
        throw new Error(`Failed to download file from URL ${url}: ${error}`);
    }
}

/**
   * Funcion asincronica responsable de subir algun archivo a la base de datos en 
   * y tras generar esa url meterla al campo correspondiente del cliente para poder 
   * acceder a ella despues.
   * Esta recibe la informacion del archivo y una arreglo con informacion desde el 
   * nombre del partner, id del usuario y id del documento del socio que se esta usando
   * para validar, estas ultimas dos se agregan al nombre del documento en azure para
   * evitar sobreescritura accidental.
*/
export async function uploadRecentEDI(data: Array<string>, file: UploadFile): Promise<Boolean> {
    try {

        const userId = await GetUserId()

        if (userId){
            data.push(userId)
        }
        const [partnerName, TPDocID, idUser] = data;


        // Sube el archivo a Azure junto los primeros 4 caracteres de idUser y TPDocID
        const url = await uploadFileToAzure(file, idUser.substring(0, 4) + TPDocID.substring(0, 4));

        // Encuentra el socio comercial por nombre
        const tradingPartner = await prisma.tradingPartner.findFirst({
            where: { Name: partnerName },
            select: { id: true }
        });

        if (!tradingPartner) {
            throw new Error(`Trading partner with name ${partnerName} not found`);
        }

        const idPartner = tradingPartner.id;

        // Encuentra el usuario
        const user = await prisma.user.findUnique({
            where: { id: idUser },
            select: {
                Partnerships: true
            }
        });

        if (!user) {
            throw new Error('User not found');
        }

        // Encuentra la asociación específica
        const partnershipIndex = user.Partnerships.findIndex(p => p.idPartner === idPartner);
        if (partnershipIndex === -1) {
            throw new Error('Partnership not found');
        }

        // Encuentra el documento específico dentro de la asociación
        const docIndex = user.Partnerships[partnershipIndex].Docs.findIndex(d => d.idDoc === TPDocID);
        if (docIndex === -1) {
            throw new Error('Document not found');
        }

        // Actualiza el campo DocFile usando Prisma
        user.Partnerships[partnershipIndex].Docs[docIndex].DocFile = url;

        await prisma.user.update({
            where: { id: idUser },
            data: {
                Partnerships: user.Partnerships
            }
        });
        return true

    } catch (error) {
        throw new Error(`Failed to start: ${(error as Error).message}`);
    }
}

/**
   * eeee
*/
export async function uploadPDFInstructions(url: string): Promise<String> {
    try {

        
        console.log("No se de donde sacar esto")
        return "hay que hacer cambio a base"

    } catch (error) {
        throw new Error(`Failed to download file from URL ${url}: ${error}`);
    }
}



/**
   * Funcion asincrona que devuelve la informacion del archivo inicial EDI 850
   * o PO del id del trading partner que recibio como parametro, utiliza la funcion
   * downloadFileContent despues de obtener la Url correspondiente de la base de datos.
*/
export async function downloadInitial850EDI(namePartner: string): Promise<{ content: Uint8Array, fileName: string, fileType: string }> {
    try {
        const partnerInitial850 = await prisma.tradingPartner.findFirst({
            where: { Name: namePartner },
            select: { Initial850EDI: true }
        })
        if (!partnerInitial850) {
            throw new Error('Trading Partner not found');
        }
        if (partnerInitial850.Initial850EDI) {
            return downloadFileContent(partnerInitial850.Initial850EDI)
        }
        throw new Error(`Failed to retrieve 850 URL`,);
    } catch (error) {
        throw new Error(`Failed to start` + (error as Error).message);
    }
}

/**
   * Funcion asincrona encargada de encontrar el url para pasar la informacion al 
   * componente cliente, este mismo recibe un arreglo con tres parametros que son
   * id del usuario, nombre del partner y id del documento del trading partner.
   * El proceso empieza al primero encontrar al usuario y el id del partner para 
   * despues hacer la busqueda manualmente y una vez que se encontro el url la regresa.
*/
export async function downloadPreviousEDI(data: Array<string>): Promise<{ content: Uint8Array, fileName: string, fileType: string }> {
    try {
        
        const userId = await GetUserId()

        if (userId){
            data.push(userId)
        }
        const [partnerName, TPDocID, idUser] = data;
        const user = await prisma.user.findFirst({
            where: { id: idUser },
            select: { Partnerships: true }
        })

        if (!user) {
            throw new Error('User not found');
        }

        const idPartner = await prisma.tradingPartner.findFirst({
            where: { Name: partnerName },
            select: { id: true }
        })

        if (!idPartner) {
            throw new Error('id of Partner not found');
        }

        const partnership = user.Partnerships.find(p => p.idPartner === idPartner.id);
        if (!partnership) {
            throw new Error('Partnership not found');
        }

        // Encuentra el documento específico dentro de la asociación
        const doc = partnership.Docs.find(d => d.idDoc === TPDocID);
        if (!doc) {
            throw new Error('Document not found');
        }

        // Obtiene la URL del archivo desde DocFile
        const fileUrl = doc.DocFile;
        if (!fileUrl) {
            throw new Error('File URL not found in document');
        }

        return downloadFileContent(fileUrl);
    } catch (error) {
        throw new Error(`Failed to start` + (error as Error).message);
    }
}

/**
   * eeee
*/
export async function downloadPDFInstructions(url: string): Promise<String> {
    try {

        
        console.log("No se de donde sacar esto")
        return "hay que hacer cambio a base"

    } catch (error) {
        throw new Error(`Failed to download file from URL ${url}: ${error}`);
    }
}
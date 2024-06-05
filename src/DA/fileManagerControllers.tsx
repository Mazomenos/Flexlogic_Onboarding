'use server'
import { BlobServiceClient, BlockBlobClient } from "@azure/storage-blob";
import { PrismaClient } from "@prisma/client";

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
export async function uploadFileToAzure(file: UploadFile): Promise<string> {
    const containerClient = blobServiceClient.getContainerClient("flexlogicuploaddemo");
    const blockBlobClient = containerClient.getBlockBlobClient(file.name);

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

export async function uploadRecentEDI(data: Array<string>, file: UploadFile): Promise<string> {
    try {
        const idUser = data[0];
        const partnerName = data[1];
        const TPDocID = data[2];

        const url = await uploadFileToAzure(file);

        const getTPID = await prisma.tradingPartner.findFirst({
            where: { Name: partnerName},
            select: { id: true }
        })
        
        const userPreviousEDI = await prisma.user.findFirst({
            where: { id: idUser },
            include: { Partnerships: { include: { Docs: true } } }
        });

        if (!userPreviousEDI) {
            throw new Error(`User with ID ${idUser} not found`);
        }

        // Encuentra el documento específico dentro de las Partnerships
        let updatedDoc;
        const updatedPartnerships = userPreviousEDI.Partnerships.map(partnership => {
            const updatedDocs = partnership.Docs.map(doc => {
                if (doc.idDoc === TPDocID) {
                    updatedDoc = { ...doc, DocFile: url };
                    return updatedDoc;
                }
                return doc;
            });
            return { ...partnership, Docs: updatedDocs };
        });

        if (updatedDoc) {
            await prisma.user.update({
                where: { id: idUser },
                data: {
                    Partnerships: {
                        set: updatedPartnerships
                    }
                }
            });
            console.log('Documento actualizado:', updatedDoc);
            return url;
        }

        throw new Error(`Failed to retrieve 850 URL`,);

    } catch (error) {
        throw new Error(`Failed to start` + (error as Error).message);
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
        if (partnerInitial850?.Initial850EDI) {
            return downloadFileContent(partnerInitial850?.Initial850EDI)
        }
        throw new Error(`Failed to retrieve 850 URL`,);
    } catch (error) {
        throw new Error(`Failed to start` + (error as Error).message);
    }
}

/**
   * Funcion asincrona cuyo proposito es generar el documento
   * que se descargo, este recibe el id del trading partner 
   * pues de ahi sacaremos el EDI 850 o PO inicial
*/
export async function downloadPreviousEDI(idUser: string): Promise<{ content: Uint8Array, fileName: string, fileType: string }> {
    try {
        const userPreviousEDI = await prisma.user.findFirst({
            where: { id: idUser },
            include: { Partnerships: true }
        })
        if (userPreviousEDI?.Partnerships[0].Docs[0].DocFile) {
            return downloadFileContent("poner url correspondiente")
        }
        throw new Error(`Failed to retrieve 850 URL`,);

    } catch (error) {
        throw new Error(`Failed to start` + (error as Error).message);
    }
}

export async function downloadPDFInstructions(url: string): Promise<String> {
    try {

        
        console.log("No se de donde sacar esto")
        return "hay que hacer cambio a base"

    } catch (error) {
        throw new Error(`Failed to download file from URL ${url}: ${error}`);
    }
}
"use server"

import { BlobServiceClient } from "@azure/storage-blob";
import { PrismaClient } from "@prisma/client";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerClientString = process.env.AZURE_CONTAINER_CLIENT;

if (!connectionString) {
    throw new Error("AZURE_STORAGE_CONNECTION_STRING is not defined");
} else if (!containerClientString) {
    throw new Error("AZURE_CONTAINER_CLIENT is not defined");
}

const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);
const prisma = new PrismaClient();

type UploadFile = {
    name: string;
    type: string;
    data: string;
};

export const uploadFileToAzure = async (file: UploadFile) => {
    const containerClient = blobServiceClient.getContainerClient(containerClientString);
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

export async function downloadFileContent(url: string): Promise<Uint8Array> {
    try {
        console.log('Iniciando descarga del archivo desde:', url);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to download file: ${response.statusText}`);
        }
        const data = await response.arrayBuffer();
        console.log('Contenido del archivo descargado con éxito');
        return new Uint8Array(data);
    } catch (error) {
        console.error(`Error al descargar el archivo desde la URL ${url}:`, error);
        throw new Error(`Failed to download file from URL ${url}: ${error}`);
    }
}



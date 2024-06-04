'use client'
import React, { useState } from 'react';
import { uploadFileToAzure, downloadFileContent } from '../../../DA/fileManagerController';
import { saveAs } from 'file-saver';

export default function FileUploader() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadUrl, setUploadUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        setSelectedFile(file);
    };

    const handleFileUpload = async () => {
        if (selectedFile) {
            try {
                setError(null); // Clear previous errors

                const base64 = await readFileAsBase64(selectedFile);

                const url = await uploadFileToAzure({
                    name: selectedFile.name,
                    type: selectedFile.type,
                    data: base64,
                });

                setUploadUrl(url);
            } catch (err) {
                setError('Error uploading file: ' + (err as Error).message);
            }
        }
    };

    // Dentro de tu función handleFileDownload en FileUploader.js
    const handleFileDownload = async () => {
        try {
            if (uploadUrl) {
                const fileContent = await downloadFileContent(uploadUrl);
                const fileType = selectedFile?.type || '';
                
                if (fileType === 'text/plain') {
                    const text = String.fromCharCode.apply(null, Array.from(new Uint8Array(fileContent)));
                    saveAs(new Blob([text], { type: 'text/plain' }), selectedFile!.name);
                } else if (fileType === 'application/pdf') {
                    // Abrir el PDF en una nueva pestaña utilizando la URL del archivo
                    window.open(uploadUrl, '_blank');
                } else {
                    setError('Tipo de archivo no compatible');
                }
            } else {
                setError('No file available for download');
            }
        } catch (err) {
            setError('Error downloading file: ' + (err as Error).message);
        }
    };
    
    const readFileAsBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => {
                resolve(reader.result as string);
            };
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
            <button onClick={handleFileDownload}>Download</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

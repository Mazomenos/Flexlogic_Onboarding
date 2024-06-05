"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React, { useState} from "react";
import CancelButton from "@/components/CancelButton";
import GenericButton from "@/components/GenericButton";
import { ParseEDIfile } from "@/libs/X12parser/lib/parseEDIfile";
import { Readable } from "stream";
import ValStructure from "@/libs/validation/segments";
import data from "@/libs/validation/elements";
import { GetTPDocById } from "@/DA/TpDocsController";
import { uploadFileToAzure, uploadRecentEDI } from "@/DA/fileManagerControllers";

// Read stream code by Russell Briggs: https://medium.com/@dupski/nodejs-creating-a-readable-stream-from-a-string-e0568597387f
class ReadableString extends Readable {
  private sent = false;

  constructor(private str: string) {
    super();
  }

  _read() {
    if (!this.sent) {
      this.push(Buffer.from(this.str));
      this.sent = true;
    } else {
      this.push(null);
    }
  }
}
export default function UploadModal({
  dataUserDoc,
  isOpen,
  setIsOpen
  }:{
    dataUserDoc: Array<string>
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) {

  const [fileContent, setFileContent] = useState<string | null>(null);
  const [uploadUrl, setUploadUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  let cont = 0;
  const idUser = dataUserDoc[0];
  const partnerName = dataUserDoc[1];
  const TPDocID = dataUserDoc[2];

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  //---------------Integracion-----------------//

  /**
   * Funcion asyncronica que usa GetTPDocById para obtener la
   * configuracion de archivo y luego usarlo con los validadores
   * 
   * QUEDA pendiente que el data reciba delimitadores
   */
  async function uploadAndParseFile() {
    try {
      if (selectedFile) {
        const base64 = await readFileAsBase64(selectedFile);
        const url = await uploadRecentEDI(dataUserDoc, {
          name: selectedFile.name,
          type: selectedFile.type,
          data: base64,
        });
        setUploadUrl(url);
        console.log("se subio")
      }
    
      // const response = await GetTPDocById(TPDocID) // Es id del documento
      // if (response) {
      //   const info = await response;
      //   console.log("calo")
      //   console.log(info.Segments)
      //   if (info){

      //     const contentStream = new ReadableString(String(fileContent));
      //     const Segments = await ParseEDIfile(contentStream);
      //     console.log(ValStructure(info.Segments, Segments, 0, "M", true));
      //     data(info.Segments, Segments, [])
      //   }
      // }
    } catch (error) {
      console.log(error)
    }
  };

  function readFileAsBase64(file: File): Promise<string> {
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
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Upload your document {TPDocID}</DialogTitle>
        <div className="flex flex-col-reverse items-center w-full">
          <input type="file" onChange={handleFileChange} />
          {/* {error && <p>Error: {error}</p>}
          {message && <p>{message}</p>} */}
        </div>
        <div className="flex w-full justify-end">
          <div className="w-full flex justify-end mr-2">
            <CancelButton onClick={() => setIsOpen(false)} />
          </div>
          <GenericButton onClick={uploadAndParseFile}> Validate </GenericButton>
        </div>
      </Modal>
    </>
  );
}

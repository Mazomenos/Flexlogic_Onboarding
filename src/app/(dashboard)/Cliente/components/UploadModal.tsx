"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React from "react";
import CancelButton from "@/components/CancelButton";
import GenericButton from "@/components/GenericButton";
import { ParseEDIfile } from "@/libs/X12parser/lib/parseEDIfile";
import { Readable } from "stream";
import ValStructure from "@/libs/validation/segments";
import data from "@/libs/validation/elements";
import { GetTPDocById } from "@/DA/TpDocsController";

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
  idDoc,
  isOpen,
  setIsOpen
  }:{
    idDoc: string,
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) {
  const [fileContent, setFileContent] = React.useState<string | null>(null);
  let cont = 0;
  // const [message, setMessage] = React.useState<string | null>(null);
  // const [error, setError] = React.useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        setFileContent(text as string);
      };
      reader.readAsText(file);
    } else {
      console.log("Error reading file");
    }
  };

  //---------------Integracion-----------------//

  /**
   * Funcion asyncronica que usa GetTPDocById para obtener la
   * configuracion de archivo y luego usarlo con los validadores
   * 
   * QUEDA pendiente que el data reciba delimitadores
   */
  const uploadAndParseFile = async () => {

    try {
      const response = await GetTPDocById(idDoc)

      if (response) {
        const info = await response;
        console.log("calo")
        console.log(info.Segments)
        if (info){

          const contentStream = new ReadableString(String(fileContent));
          const Segments = await ParseEDIfile(contentStream);
          console.log(ValStructure(info.Segments, Segments, 0, "M", true));
          data(info.Segments, Segments, [])
        }
      }
    } catch (error) {
      console.log(error)
    }
  };



  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <DialogTitle className="text-2xl">Upload your document {idDoc}</DialogTitle>
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

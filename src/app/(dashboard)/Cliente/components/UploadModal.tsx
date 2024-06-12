"use client";

import { DialogTitle } from "@headlessui/react";
import Modal from "@/components/Modal";
import React, { useRef, useState} from "react";
import CancelButton from "@/components/CancelButton";
import GenericButton from "@/components/GenericButton";
import { ParseEDIfile } from "@/libs/X12parser/lib/parseEDIfile";
import { Readable } from "stream";
import ValStructure from "@/libs/validation/segments";
import data from "@/libs/validation/elements";
import { GetTPDocById } from "@/DA/TpDocsController";
import { uploadRecentEDI } from "@/DA/fileManagerControllers";
import { FaUpload } from "react-icons/fa6";
import BrakeRule from "@/components/BrakeRule";
import { UpdateUserLogErrors } from "@/DA/usersTpControllers";
import { CheckPartnershipStatus } from "@/DA/usersTpControllers";
import { UpdateDocumentStatus } from "@/DA/usersTpControllers";

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
  setIsOpen,
  setSuccess,
  setFail
  }:{
    dataUserDoc: Array<string>
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
    setFail: React.Dispatch<React.SetStateAction<boolean>>;
  }) {

  const [fileContent, setFileContent] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const TPDocID = dataUserDoc[1];
  
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        setFileContent(text as string);
        setSelectedFile(file);
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
  async function uploadAndParseFile() {
    try {
      if (selectedFile) {
        const base64 = await readFileAsBase64(selectedFile);
        const url = await uploadRecentEDI(dataUserDoc, {
          name: selectedFile.name,
          type: selectedFile.type,
          data: base64,
        });
        console.log(url)
      }
    
      const response = await GetTPDocById(TPDocID) // Es id del documento
      if (response) {
        const info = await response;
        console.log("calo")
        console.log(info.Segments)

        if (info){
          const contentStream = new ReadableString(String(fileContent));
          const Segments = await ParseEDIfile(contentStream);
          const resultValStructure = ValStructure(info.Segments, Segments, 0, "M", true);
          console.log("Segmentos")
          console.log(Segments)
          console.log(info.Segments)
          console.log("pedo")
          console.log(resultValStructure.status)
          console.log(resultValStructure.Description)
          if (resultValStructure.status === "Success") {
            const resultElementVal = data(info.Segments, Segments, [])
            if (resultElementVal.length > 0) {
              UpdateDocumentStatus(dataUserDoc[0], dataUserDoc[1], "FAILED")
              UpdateUserLogErrors(dataUserDoc[1], dataUserDoc[0], resultElementVal)
              setIsOpen(false)
              setFail(true)
            } else {

              UpdateDocumentStatus(dataUserDoc[0], dataUserDoc[1], "COMPLETE")
              CheckPartnershipStatus(dataUserDoc[0], dataUserDoc[1]);
              setIsOpen(false)
              setSuccess(true)
            }
          } else {
            // Aqui deberia de ir el controlador de si encontro un error, subirlo a la base de datos
            UpdateDocumentStatus(dataUserDoc[0], dataUserDoc[1], "FAILED")
            UpdateUserLogErrors(dataUserDoc[1], dataUserDoc[0], [{Title:"Error in segment structure", Description: resultValStructure.Description, Position: String(resultValStructure.Position), Type:"Structure"}]);
            setIsOpen(false)
            setFail(true)
          }

        }
      }
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
        <BrakeRule classname="my-2" />
        <div onClick ={() => handleUploadClick()}className="flex w-full flex-col mt-0 text-primary-content/40 dark:text-darkMode-foreground/40 items-center hover:bg-info/30 hover:text-info-content dark:hover:bg-darkMode-info dark:hover:text-darkMode-info-content justify-center border-2 border-dashed border-primary-content/40 dark:border-darkMode-foreground/40 p-6 rounded-lg cursor-pointer hover:border-info-content dark:hover:border-darkMode-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none">
         <FaUpload className="text-6xl mb-2" />
         <input type="file" ref={fileInputRef} id="fileInput" className="hidden" onChange={handleFileChange} />
          {/* {error && <p>Error: {error}</p>}
          {message && <p>{message}</p>} */}
          <p className="">
            {selectedFile
              ? selectedFile.name
              : "Click to upload a file"}
          </p>
        </div>
        <BrakeRule classname="my-2" />
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
// page.tsx
"use client";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { IoMdDownload } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Badge from "../components/Badge";
import Errors from "../components/ErrorsModal";
import React, { useState, useEffect } from "react";
import { Status } from "../enums/Status";
import ValidateButton from "../components/ValidateButton";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import {
  GetUsersDocs,
  GetPartnershipDocLogError,
} from "@/DA/usersTpControllers";
import UploadModal from "../components/UploadModal";
import { LogErrors } from "@prisma/client";
import { saveAs } from "file-saver";
import { downloadInitial850EDI } from "@/DA/fileManagerControllers";
import { downloadPDFInstructions } from "@/DA/fileManagerControllers";
import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { FailedAction } from "@/components/toasters";
import ListHeader from "@/components/ListHeader";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

//Tipo especifico para definir lo que se jala de cada doc de la bd
type EDI = {
  idDoc: string;
  Doc: string;
  isRequired: boolean;
  Status: string;
};

export default function Home() {
  const router = useRouter();
  const { partnerName } = useParams<{ partnerName: string }>(); // Specify the param type
  //Variables estaticas temporales

  //Integracion

  /*useState que contiene Una lista de los documentos
    con los atributos necesarios para mostrarlos al Cliente
    Empieza como null, y al hacer la llamada a la bd
    en el reload inicial se actualiza por la lista de datos
    o queda vacia.
  */
  const [TPDocs, setTPDocs] = useState<EDI[] | null>(null);

  /**
   * Estos useState se utilizan para manejar los modales de
   * error y subida de archivos, los cuales son usados en la
   * pagina para abrir los modales y son dados como props
   * a los modales para que puedan cerrarse e abrir otros
   * segun el flujo
   */
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);

  /**
   * useState que en el cual se contiene el id del Doc al que se le
   * presione uno de sus botones para realizar una accion, el cual es
   * enviado como prop a los modales para que puedan usarlo con los
   * controladores, asi accediendo y modificando la informacion del
   * Documento.
   */
  const [TPDocID, setTPDocID] = useState("");

  /**
   * useState que contiene una lista de errores que es llamada como prop
   * al modal de errores, y es actualizado cuando se presiona uno de los
   * documentos con estado "failed"
   */
  const [ErrorLog, setErrorLog] = useState<LogErrors[]>([]);

  /**
   * Esta funcion asyncronica llama el controlador
   * GetUsersDocs y nos devuelve los documentos
   * de la document.
   */

  const getTPDocs = async () => {
    try {
      const response = await GetUsersDocs(partnerName);

      if (response) {
        const data = await response;
        console.log(data);
        if (data) setTPDocs(data);
      }
    } catch (error) {
      console.log("error", error);
      FailedAction(`Partner ${partnerName} invalid`);
      router.push("/Cliente");
    }
  };

  /**
   * Este UseEffect se asegura de actualizar la pagina con la ejecucion
   * de la funcion que llama a los datos y actualiza el useState
   */

  useEffect(() => {
    getTPDocs();
  }, []);

  /**
   * Esta funcion asyncronica llama el controlador
   * GetPartnershipDocLogError y nos devuelve los errores
   * registrados en la base. Tambien actualiza el TPDocID
   * para que se pueda usar en otro intento de validacion.
   */
  const getErrorLog = async (idDoc: string) => {
    setTPDocID(idDoc);
    try {
      const response = await GetPartnershipDocLogError(partnerName, idDoc);

      if (response) {
        const data = await response;
        if (data) setErrorLog(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Funcion asincrona cuyo proposito es generar el documento
   * que se descargo, este recibe solamente el id del trading partner
   */
  async function downloadPOTest() {
    try {
      const fileContent = await downloadInitial850EDI(partnerName);
      const text = String.fromCharCode.apply(
        null,
        Array.from(new Uint8Array(fileContent.content)),
      );
      saveAs(new Blob([text], { type: "text/plain" }), fileContent.fileName);
    } catch (err) {
      console.log("Error downloading file: " + (err as Error).message);
    }
  }

  async function downloadPDFURL(idDoc: string) {
    try {
      const fileURL = await downloadPDFInstructions(partnerName, idDoc);
      window.open(fileURL, "_blank");
    } catch (err) {
      console.log("Error downloading file: " + (err as Error).message);
    }
  }

  /**
   * Funciones que abren o cierran los modales
   */
  const openError = (con: boolean) => {
    setIsErrorModalOpen(con);
  };

  const openUpload = (con: boolean) => {
    setIsUploadModalOpen(con);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="relative flex justify-center md:justify-end">
        <div className="absolute top-1 left-0">
          <BackButton
            onClick={() => {
              router.back();
            }}
          />
        </div>
        <AddButton onClick={() => downloadPOTest()}>
          Download PO Test <IoMdDownload />
        </AddButton>
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        <ListHeader>
          <div className="flex flex-row w-full items-center">
            <p className="basis-2/6">Document</p>
            <p className="basis-1/6 flex justify-center ">Mandatory</p>
            <p className="basis-1/6 flex justify-center ">Download</p>
            <p className="basis-1/6 flex justify-center ">Status</p>
            <p className="basis-1/6 flex justify-center ">Actions</p>
          </div>
        </ListHeader>
        {TPDocs &&
          TPDocs.map((document, index) => (
            <ListItem key={index}>
              <div className="flex flex-row w-full items-center">
                <p className="basis-2/6 ">{document.Doc} </p>
                <p className="basis-1/6 flex justify-center ">
                  {document.isRequired ? "Mandatory" : "Optional"}{" "}
                </p>
                <div className="basis-1/6 flex justify-center">
                  <DocumentArrowDownIcon className="h-6 w-6" />
                </div>
                <div className="basis-1/6 flex justify-center">
                  <Badge status={document.Status} />
                </div>
                <div className="basis-1/6 flex justify-center">
                  {document.Status !== Status.FAILED ? (
                    document.Status == Status.PENDING ? (
                      <button
                        className="w-28 p-1 text-base dark:disabled:ring-darkMode-primary/30 bg-info disabled:bg-info/50 disabled:text-info-content/30 dark:bg-darkMode-primary dark:disabled:bg-darkMode-primary/30 dark:hover:enabled:bg-transparent  dark:text-darkMode-base-100 dark:disabled:text-darkMode-info-content/50 dark:hover:enabled:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:enabled:bg-transparent hover:enabled:text-brand-blue ring-2 ring-primary disabled:ring-primary/50 hover:enabled:ring-primary dark:ring-darkMode-primary hover:border-1"
                        disabled={false}
                      >
                        <div className=""> Validate </div>
                      </button>
                    ) : (
                      <div
                        className="tooltip tooltip-warning"
                        data-tip="Document has already been validated "
                      >
                        <button
                          className="cursor-not-allowed w-28 p-1 text-base dark:disabled:ring-darkMode-primary/30 bg-info disabled:bg-info/50 disabled:text-info-content/30 dark:bg-darkMode-primary dark:disabled:bg-darkMode-primary/30 dark:hover:enabled:bg-transparent  dark:text-darkMode-base-100 dark:disabled:text-darkMode-info-content/50 dark:hover:enabled:text-darkMode-primary font-bold text-info-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:enabled:bg-transparent hover:enabled:text-brand-blue ring-2 ring-primary disabled:ring-primary/50 hover:enabled:ring-primary dark:ring-darkMode-primary hover:border-1"
                          disabled={true}
                        >
                          <div className=""> Validate </div>
                        </button>
                      </div>
                    )
                  ) : (
                    <button
                      onClick={() => openError(true)}
                      className="w-28 p-1 text-base bg-error dark:bg-darkMode-error-content dark:hover:bg-transparent dark:text-darkMode-base-100 dark:hover:text-darkMode-error-content font-bold text-error-content transition motion-reduce:transition-none motion-reduce:hover:transform-none hover:bg-transparent hover:text-error-content ring-2 ring-error hover:ring-error dark:ring-darkMode-error-content hover:border-1"
                    >
                      Error Log
                    </button>
                  )}
                </div>
              </div>
            </ListItem>
          ))}
      </div>
      <Errors isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} />
    </div>
  );
}

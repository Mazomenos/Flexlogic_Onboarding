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
  let userID = "665fd9f3aa66f44e3054f99b";

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
   * de la partnership.
   */

  const getTPDocs = async () => {
    try {
      const response = await GetUsersDocs(userID, partnerName);

      if (response) {
        const data = await response;
        console.log(data);
        if (data) setTPDocs(data);
      }
    } catch (error) {
      console.log(error);
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
      const response = await GetPartnershipDocLogError(
        partnerName,
        userID,
        idDoc
      );

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
        Array.from(new Uint8Array(fileContent.content))
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
          Download PO Test {partnerName}
          <IoMdDownload />
        </AddButton>
        <div>{}</div>
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {TPDocs &&
          TPDocs.map((partnership, index) => (
            <ListItem
              key={index}
              onClick={() => {
                openError(true);
                getErrorLog(partnership.idDoc);
              }}
            >
              <div className="flex flex-row w-full items-center">
                <p className="basis-2/5">{partnership.Doc} </p>
                <TfiLayoutLineSolid
                  style={{ transform: "rotate(90deg)" }}
                  className="grid content-center h-full"
                  size={32}
                />
                <p className="basis-1/5">
                  {partnership.isRequired ? "Mandatory" : "Optional"}{" "}
                </p>
                <div className="basis-1/5 flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => {
                      downloadPDFURL(partnership.idDoc);
                    }}
                    className={
                      "dark:bg-darkMode-base-100 hover:dark:bg-darkMode-base-200 dark:border-darkMode-base-200"
                    }
                    size="icon"
                  >
                    <ArrowDownTrayIcon className="h-[1.2rem] w-[1.2rem]  scale-100 transition-all" />
                    <span className="sr-only">Download document</span>
                  </Button>
                </div>
                <div className="basis-1/5 flex justify-end">
                  {partnership.Status == Status.VALIDATE ? (
                    <ValidateButton
                      onClick={() => {
                        openUpload(true);
                        setTPDocID(partnership.idDoc);
                      }}
                    >
                      {partnership.Status}
                    </ValidateButton>
                  ) : partnership.Status === Status.FAILED ? (
                    <button
                    className="h-10 text-base w-36 border-error dark:border-darkMode-error border-2 bg-error dark:bg-darkMode-error-content text-error-content dark:text-darkMode-foreground font-bold hover:bg-transparent dark:hover:bg-transparent hover:text-error-content/70  dark:hover:text-darkMode-error-content hover:border-error dark:hover:border-darkMode-error-content transition motion-reduce:transition-none motion-reduce:hover:transform-none"
                    onClick={() => {
                      openError(true);
                      setTPDocID(partnership.idDoc);
                    }}
                  >
                    <div> Failed </div>
                  </button>
                     
                    

                  ) : (
                    <Badge status={partnership.Status} />
                  )}
                </div>
              </div>
            </ListItem>
          ))}
      </div>
      <Errors
        isOpen={isErrorModalOpen}
        setIsOpen={setIsErrorModalOpen}
        setIsUploadOpen={setIsUploadModalOpen}
        errorLog={ErrorLog}
        dataUserDoc={[userID, partnerName, TPDocID]}
      />
      <UploadModal
        isOpen={isUploadModalOpen}
        setIsOpen={setIsUploadModalOpen}
        dataUserDoc={[userID, partnerName, TPDocID]}
      ></UploadModal>
    </div>
  );
}

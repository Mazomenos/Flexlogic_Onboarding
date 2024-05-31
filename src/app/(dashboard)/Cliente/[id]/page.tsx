// page.tsx
"use client";
import AddButton from "@/components/AddButton";
import BrakeRule from "@/components/BrakeRule";
import ListItem from "@/components/ListItem";
import { IoMdDownload } from "react-icons/io";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import Badge from "../components/Badge";
import Errors from "../docs/Errors";
import { useState, useEffect } from "react";
import { Status } from "../enums/Status";
import ValidateButton from "../components/ValidateButton";
import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import { useParams } from 'next/navigation';
import { GetUsersDocs } from "@/DA/usersTpControllers";
import UploadModal from "../docs/fileupload/page";

type EDI = {
  idDoc: string;
  Doc: string;
  isRequired: boolean;
  Status: string;
  LogErrors: any[]
};



export default function Home() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>(); // Specify the param type

  //Integracion
  const [TPDoc, setTPDoc] = useState<EDI[] | null>(null);

  const getTPDocs = async () => {
    try {
      const response = await GetUsersDocs("664d76a8d7412ac29ddf6a1b","665a0753b9c7af2580bc0ad5")

      if (response) {
        const data = await response;
        console.log(data)
        if (data) setTPDoc(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTPDocs()
  }, [])


  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [DocErrors, setDocErrors] = useState<any[]>([])

  /*
  const edi: EDI[] = [
    {
      id: 1,
      EDIDoc: "EDI 850 Purchase Order",
      mandatory: true,
      status: "Validate",
    },
    {
      id: 2,
      EDIDoc: "EDI 860 Purchase Order Change Request ",
      mandatory: false,
      status: "Validate",
    },
    {
      id: 3,
      EDIDoc: "EDI 855 Purchase Order Acknowledgment",
      mandatory: true,
      status: "Complete",
    },
    {
      id: 4,
      EDIDoc: "EDI 856 Ship Notice/Manifest",
      mandatory: true,
      status: "Validate",
    },
    {
      id: 5,
      EDIDoc: "EDI 820 Payment Order/Remittance Advice",
      mandatory: false,
      status: "Failed",
    },
  ];
  */

  const downloadPOTest = () => {
    console.log("Descargado");
  };

  const openError = (con: boolean) => {
    setIsErrorModalOpen(con);
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
          Download PO Test {id}<IoMdDownload />
        </AddButton>
        <div>
          {}
        </div>
      </div>
      <BrakeRule />
      <div className="max-h-full flex flex-col items-center w-full overflow-y-auto overscroll-none">
        {TPDoc && TPDoc.map((partnership, index) => (
          <ListItem
            key={index}
            path={partnership.Status == Status.FAILED ? partnership.Doc : ""}
            onClick={() => {openError(true); setDocErrors(partnership.LogErrors)}}
          >
            <div className="flex flex-row w-full items-center">
              <p className="basis-2/5">{partnership.Doc} </p>
              <TfiLayoutLineSolid
                style={{ transform: "rotate(90deg)" }}
                className="grid content-center h-full"
                size={32}
              />
              <p className="basis-2/5">
                {partnership.isRequired ? "Mandatory" : "Optional"}{" "}
              </p>
              <div className="basis-1/5 flex justify-end">
                {partnership.Status == Status.VALIDATE ? (
                  <UploadModal idDoc={partnership.idDoc} status={partnership.Status}></UploadModal>
                ) : (
                  <Badge status={partnership.Status} />
                )}
              </div>
              
            </div>
          </ListItem>
        ))}
      </div>
      <Errors isOpen={isErrorModalOpen} setIsOpen={setIsErrorModalOpen} errors={DocErrors} />
    </div>
  );
}

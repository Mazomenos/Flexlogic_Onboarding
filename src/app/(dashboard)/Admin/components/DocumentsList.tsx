import React from "react";
import DocumentItem from "./DocumentItem";
import { updateTPDoc } from "@/DA/TpDocsController";
import { SuccessAction } from "@/components/toasters";

type EDI = {
  idDoc: string;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
};

interface Props {
  Documents: EDI[];
  handleDeleteButton: (id: string) => void;
  handleEditButton: (id: string) => void;
  temporalDocuments: EDI[]
  setTemporalDocuments : React.Dispatch<React.SetStateAction<EDI[]>>
  handleDeleteDocument: (id: string) => void;
  partner: string
}

export default function DocumentsList({
  Documents,
  handleEditButton,
  handleDeleteButton,
  temporalDocuments,
  setTemporalDocuments,
  handleDeleteDocument,
  partner
}: Props) {
  
  const handleUpdateDocument = async (updatedDocument: EDI, type: string) => {
    try{
      await updateTPDoc(partner, updatedDocument.idDoc, updatedDocument)
      const newDocuments = temporalDocuments.map((document) =>
        document.idDoc === updatedDocument.idDoc ? updatedDocument : document,
      );
      
      let change = ""

      if(type === "visible") {
        if (updatedDocument.isVisible === true){
          change = "Visible"
        } else {
          change = "Not Visible"
        }
      }

      if (type === "required") {
        if (updatedDocument.isRequired === true) {
          change = "Mandatory"
        } else {
          change = "Optional"
        }
      }
  
      SuccessAction(`Switched ${updatedDocument.Doc} to ${change}`)
      setTemporalDocuments(newDocuments);
    }catch (error){
      console.log(error);
    }
  };

  return (
    <React.Fragment>
      {Documents && temporalDocuments.map((document, index) => {
        return (
          <DocumentItem
            realDoc={Documents[index]}
            document={document}
            key={index}
            handleDeleteDocument={handleDeleteDocument}
            handleUpdateDocument={handleUpdateDocument}
            handleDeleteButton={handleDeleteButton}
            handleEditButton={handleEditButton}
          />
        );
      })}
    </React.Fragment>
  );
}

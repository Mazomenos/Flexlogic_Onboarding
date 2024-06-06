import React from "react";
import DocumentItem from "./DocumentItem";
import { updateTPDoc } from "@/DA/TpDocsController";

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
}

export default function DocumentsList({
  Documents,
  handleEditButton,
  handleDeleteButton,
  temporalDocuments,
  setTemporalDocuments,
  handleDeleteDocument
}: Props) {
  
  const handleUpdateDocument = async (updatedDocument: EDI) => {
    try{
      await updateTPDoc("664d76a8d7412ac29ddf6a1b", updatedDocument.idDoc, updatedDocument)
      const newDocuments = temporalDocuments.map((document) =>
        document.idDoc === updatedDocument.idDoc ? updatedDocument : document,
      );
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

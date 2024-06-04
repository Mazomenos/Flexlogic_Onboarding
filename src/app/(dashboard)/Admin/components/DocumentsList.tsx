import React from "react";
import DocumentItem from "./DocumentItem";

type EDI = {
  IdDoc: number;
  Doc: string;
  isVisible: boolean;
  isRequired: boolean;
};

interface Props {
  Documents: EDI[];
  handleDeleteButton: (id: number) => void;
  handleEditButton: (id: number) => void;
  temporalDocuments: EDI[]
  setTemporalDocuments : React.Dispatch<React.SetStateAction<EDI[]>>
  handleDeleteDocument: (id: number) => void;
}

export default function DocumentsList({
  Documents,
  handleEditButton,
  handleDeleteButton,
  temporalDocuments,
  setTemporalDocuments,
  handleDeleteDocument
}: Props) {
  

  const handleUpdateDocument = (updatedDocument: EDI) => {
    const newDocuments = temporalDocuments.map((document) =>
      document.IdDoc === updatedDocument.IdDoc ? updatedDocument : document,
    );
    setTemporalDocuments(newDocuments);
  };

  return (
    <React.Fragment>
      {temporalDocuments.map((document, index) => {
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

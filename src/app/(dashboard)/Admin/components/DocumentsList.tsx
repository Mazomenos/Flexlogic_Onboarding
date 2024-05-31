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
  handleDeleteButton: any;
  handleEditButton: any;
}

export default function DocumentsList({
  Documents,
  handleEditButton,
  handleDeleteButton,
}: Props) {
  const [temporalDocument, setTemporalDocuments] = React.useState(Documents);

  const handleUpdateDocument = (updatedDocument: EDI) => {
    const newDocuments = temporalDocument.map((document) =>
      document.IdDoc === updatedDocument.IdDoc ? updatedDocument : document,
    );
    setTemporalDocuments(newDocuments);
  };

  const handleDeleteDocument = (id: number) => {
    const newDocuments = temporalDocument.filter(
      (document) => document.IdDoc !== id,
    );
    setTemporalDocuments(newDocuments);
  };

  return (
    <React.Fragment>
      {temporalDocument.map((document, index) => {
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

import React from "react";
import PartnerItem from "./PartnerItem";

type Partner = {
  id: number;
  companyName: string;
  ediDoc: string[];
  visible: boolean;
};

interface Props {
  Partners: Partner[];
  handleDeleteButton: any;
  handleEditButton: any;
  temporalPartners: Partner[]
  setTemporalPartners: React.Dispatch<React.SetStateAction<Partner[]>>
  handleDeleteTemporalPartner: (id: number) => void;
}

export default function PartnersList({
  Partners,
  handleEditButton,
  handleDeleteButton,
  temporalPartners,
  setTemporalPartners,
  handleDeleteTemporalPartner
}: Props) {

  const handleUpdatePartner = (updatedPartner: Partner) => {
    const newPartners = temporalPartners.map((partner) =>
      partner.id === updatedPartner.id ? updatedPartner : partner,
    );
    setTemporalPartners(newPartners);
  };

  return (
    <React.Fragment>
      {temporalPartners.map((partner, index) => {
        return (
          <PartnerItem
            realPartner={Partners[index]}
            partner={partner}
            key={index}
            handleDeletePartner={handleDeleteTemporalPartner}
            handleUpdatePartner={handleUpdatePartner}
            handleDeleteButton={handleDeleteButton}
            handleEditButton={handleEditButton}
          />
        );
      })}
    </React.Fragment>
  );
}

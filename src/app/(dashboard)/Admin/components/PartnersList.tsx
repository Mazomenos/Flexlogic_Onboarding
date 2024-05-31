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
}

export default function PartnersList({
  Partners,
  handleEditButton,
  handleDeleteButton,
}: Props) {
  const [temporalPartners, setTemporalPartners] = React.useState(Partners);

  const handleUpdatePartner = (updatedPartner: Partner) => {
    const newPartners = temporalPartners.map((partner) =>
      partner.id === updatedPartner.id ? updatedPartner : partner,
    );
    setTemporalPartners(newPartners);
  };

  const handleDeletePartner = (id: number) => {
    const newPartners = temporalPartners.filter((partner) => partner.id !== id);
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
            handleDeletePartner={handleDeletePartner}
            handleUpdatePartner={handleUpdatePartner}
            handleDeleteButton={handleDeleteButton}
            handleEditButton={handleEditButton}
          />
        );
      })}
    </React.Fragment>
  );
}

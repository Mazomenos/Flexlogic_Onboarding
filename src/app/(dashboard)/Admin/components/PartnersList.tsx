import React from "react";
import PartnerItem from "./PartnerItem";
import { TradingPartnerCard } from "../page";
interface Props {
  Partners: TradingPartnerCard[];
  handleDeleteButton: any;
  handleEditButton: any;
  temporalPartners: TradingPartnerCard[]
  setTemporalPartners: React.Dispatch<React.SetStateAction<TradingPartnerCard[]>>
  handleDeleteTemporalPartner: (id: string) => void;
}

export default function PartnersList({
  Partners,
  handleEditButton,
  handleDeleteButton,
  temporalPartners,
  setTemporalPartners,
  handleDeleteTemporalPartner
}: Props) {

  const handleUpdatePartner = (updatedPartner: TradingPartnerCard) => {
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

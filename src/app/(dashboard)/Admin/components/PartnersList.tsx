import React from "react";
import PartnerItem from "./PartnerItem";
import { TradingPartnerCard } from "../page";
import { updateTPDoc } from "@/DA/TpDocsController";
import { UpdateTradingPartner } from "@/DA/tradingPartnerControllers";
import { SuccessAction } from "@/components/toasters";
interface Props {
  Partners: TradingPartnerCard[];
  handleDeleteButton: any;
  handleEditButton: any;
  temporalPartners: TradingPartnerCard[];
  setTemporalPartners: React.Dispatch<
    React.SetStateAction<TradingPartnerCard[]>
  >;
  handleDeleteTemporalPartner: (id: string) => void;
}

export default function PartnersList({
  Partners,
  handleEditButton,
  handleDeleteButton,
  temporalPartners,
  setTemporalPartners,
  handleDeleteTemporalPartner,
}: Props) {
  const handleUpdatePartner = async (
    updatedPartner: TradingPartnerCard,
    type: string,
  ) => {
    const newPartners = temporalPartners.map((partner) =>
      partner.id === updatedPartner.id ? updatedPartner : partner,
    );
    let change = "";

    if (type === "visible") {
      if (updatedPartner.isVisible === true) {
        change = "Visible";
      } else {
        change = "Not Visible";
      }
    }

    SuccessAction(`Switched ${updatedPartner.Name} to ${change}`);
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

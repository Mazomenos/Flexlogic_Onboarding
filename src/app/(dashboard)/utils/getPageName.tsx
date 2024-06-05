"use client"
import { GetAllTradingPartner } from "@/DA/tradingPartnerControllers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetUsersPartnerInfo } from "@/DA/usersTpControllers";




function useGetPageName(currentPath: string) {
  const router = useRouter();
 

//Cambiar Estatico por llamadas a base
  const [Partners,setPartners] = useState<any>([])
  const [Partnerships, setPartnerships] = useState<any>([])

  //ESTATICO POR EL MOMENTOPendiente 
  const userId = "665a0753b9c7af2580bc0ad5"

  const getAllTp = async () => {
    try {
      const response = await GetAllTradingPartner()
  
      if (response) {
        const data = await response;
        console.log("llama bd General")
        if (data) setPartners(data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getAllTp()
  }, [])


  const getAllPartnershipsUser = async () => {
    try {
      const response = await GetUsersPartnerInfo(userId)
  
      if (response) {
        const data = await response;
        console.log("llama bd User")
        if (data) setPartnerships(data)
      }
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    getAllTp()
    getAllPartnershipsUser()
  }, [])



  let pageName = "";
  const pathParts = currentPath.split("/");
  const icp = pathParts[2]?.replace(/_/g, " ");
  const partnershipNames = Partnerships.map(p => p. Name.replace(/_/g, " "));
  const partnerNames = Partners.map(p => p.Name.replace(/_/g, " ")); 

  if (pathParts.length > 2 && !partnershipNames.includes(icp) && !partnerNames.includes(icp)) {
    router.push("/404");
    return ""; 
  }

  if (currentPath === "/Cliente") {
    
    pageName = "Your partnerships";
  } else if (partnershipNames.includes(icp) && currentPath === `/Cliente/${pathParts[2]}`) {
    pageName = `${icp} Partnership EDI Verification`;
  } 
  
  if (currentPath === "/Admin") {
    pageName = "Partner List";
  } else if (partnerNames.includes(icp) && currentPath === `/Admin/${pathParts[2]}`) {
    pageName = `${icp} EDI Documents`;
  }

  return pageName;
}

export { useGetPageName };

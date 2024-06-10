import ThemeChanger from "./ThemeChanger";
import FlexLogicLogo from "./FlexLogicLogo";

import { usePathname } from "next/navigation";
import { GetAllTradingPartner } from "@/DA/tradingPartnerControllers";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GetUsersPartnerInfo } from "@/DA/usersTpControllers";
import { useHeaderContext } from "@/app/context/headerTrigger";


export default function Header() {

  let currentPath = usePathname();

  const router = useRouter();

  const {headerTrigger, setHeaderTrigger} = useHeaderContext()

  const [Partners,setPartners] = useState<any>([])
  const [Partnerships, setPartnerships] = useState<any>([])
 
  //console.log(headerTrigger)

  const getAllTp = async () => {
    try {
      const data = await GetAllTradingPartner(); // Assuming Prisma query
      setPartners(data);
      console.log(Partners); // Now Partners should be updated
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    console.log("trigger header refresh")
    getAllTp()
  }, [headerTrigger])

  const getAllPartnershipsUser = async () => {
    try {
      const response = await GetUsersPartnerInfo()
  
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
    getAllPartnershipsUser()
  }, [])



  let pageName = "";
  const pathParts = currentPath.split("/");
  const icp = pathParts[2]?.replace(/_/g, " ");
  const partnershipNames = Partnerships.map(p => p. Name.replace(/_/g, " "));
  const partnerNames = Partners.map(p => p.Name.replace(/_/g, " ")); 


  if (currentPath === "/Cliente") {
    
    pageName = "Your partnerships";
  } else if (partnershipNames.includes(icp) && currentPath === `/Cliente/${pathParts[2]}`) {
    pageName = `${icp} Partnership EDI Verification`;
  } 
  
  if (currentPath === "/Admin") {
    pageName = "Partner List";
  } else if (partnerNames.includes(icp) && currentPath === `/Admin/${pathParts[2]}`) {
    pageName = `${icp} EDI Documents`;
    //console.log("nombre de pagina",pageName)
  }


  return (
    <div className="bg-base-100 dark:bg-darkMode-base-100 shadow-md  h-20 flex justify-center items-center">
      <div className="basis-1/4 grid justify-items-center ">
        <FlexLogicLogo />
      </div>
      <div className="text-4xl justify-center items-center text-center font-semibold   basis-1/2">
        {pageName}
      </div>
      <div className="basis-1/4 items-center grid justify-items-center">
        <ThemeChanger />
      </div>
    </div>
  );
}

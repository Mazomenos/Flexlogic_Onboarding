import { useState } from "react";
import { useRouter } from "next/navigation";
function getPageName(currentPath: string ) {
    const router = useRouter();

    const [partners] = useState([
        { id: 1, companyName: "Amazon" },
        { id: 2, companyName: "Walmart" },
        { id: 3, companyName: "Autozone" }
      ]);

    let pageName = "";
    const icp = parseInt(currentPath.split("/")[2]);
  
    partners.map((partner) => {
      if (currentPath === "/Admin") {
        pageName = "Partners";
      } else if (currentPath === "/Cliente") {
        pageName = "PartnerShip";
      }
  
      if (icp > partners.length) {
        return router.push("/404");
      } else {
        if (currentPath === `/Cliente/${partner.id}` || currentPath === `/Admin/${partner.id}`) {
          pageName = partner.companyName;
        }
      }
    });
  
    return pageName;
  }

export { getPageName };
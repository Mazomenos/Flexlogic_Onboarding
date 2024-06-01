import { useRouter } from "next/navigation";

type Partnership = {
  id: number;
  name: string;
};

type Partners = {
  id: number;
  companyName: string;
};

function useGetPageName(currentPath: string) {
  const router = useRouter();

  const partnerships: Partnership[] = [
    { id: 1, name: "Amazon" },
    { id: 2, name: "Walmart" },
    { id: 3, name: "Autozone" },
    { id: 4, name: "Tufesa" },
    { id: 5, name: "Walmart" },
    { id: 6, name: "Tufesa" },
    { id: 7, name: "Amazon" },
  ];

  const partners: Partners[] = [
    { id: 1, companyName: "Amazon" },
    { id: 2, companyName: "Walmart" },
    { id: 3, companyName: "Autozone" },
    { id: 4, companyName: "Tufesa" },
    { id: 5, companyName: "Walmart" },
    { id: 6, companyName: "Tufesa" },
    { id: 7, companyName: "Amazon" },
    { id: 8, companyName: "Empresa X" },
  ];

  let pageName = "";
  const pathParts = currentPath.split("/");
  const icp = pathParts[2];

  const partnershipNames = partnerships.map(p => p.name);
  const partnerNames = partners.map(p => p.companyName);


  if (pathParts.length > 2 && !partnershipNames.includes(icp) && !partnerNames.includes(icp)) {
    router.push("/404");
    return ""; 
  }

  if (currentPath === "/Cliente") {
    pageName = "Your partnerships";
  } else if (partnershipNames.includes(icp) && currentPath === `/Cliente/${icp}`) {
    pageName = `${icp} Partnership EDI Verification`;
  } 
  
  if (currentPath === "/Admin") {
    pageName = "Partner List";
  } else if (partnerNames.includes(icp) && currentPath === `/Admin/${icp}`) {
    pageName = `${icp} EDI Documents`;
  }

  return pageName;
}

export { useGetPageName };

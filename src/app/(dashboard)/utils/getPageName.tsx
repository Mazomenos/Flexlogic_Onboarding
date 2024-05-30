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
    { id: 3, name: "Tufesa" },
    { id: 4, name: "Amazon" },
    { id: 5, name: "Walmart" },
    { id: 6, name: "Tufesa" },
    { id: 7, name: "Amazon" },
  ];

  const partners: Partners[] = [
    { id: 1, companyName: "Amazon" },
    { id: 2, companyName: "Walmart" },
    { id: 3, companyName: "Tufesa" },
    { id: 4, companyName: "Amazon" },
    { id: 5, companyName: "Walmart" },
    { id: 6, companyName: "Tufesa" },
    { id: 7, companyName: "Amazon" },
    { id: 8, companyName: "Empresa X" },
  ];

  let pageName = "";
  const icp = parseInt(currentPath.split("/")[2]);

  partnerships.map((partnerships) => {
    if (currentPath === "/Cliente") {
      pageName = "Your partnerships";
    }

    if (icp > partners.length) {
      return router.push("/404");
    } else {
      if (
        currentPath === `/Cliente/${partnerships.id}`
      ) {
        pageName = partnerships.name + " Partnership EDI Verification";
      }
    }
  }),

    partners.map((partner) => {
      if (currentPath === "/Admin") {
        pageName = "Partner List";
      }

      if (icp > partners.length) {
        return router.push("/404");
      } else {
        if (
          currentPath === `/Admin/${partner.id}`
        ) {
          pageName = partner.companyName + " EDI Documents";
        }
      }
    }

    );

  return pageName;
}

export { useGetPageName };
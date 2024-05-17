"use client";
import React from "react";
import { useState } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { map } from "zod";

function Layout({ children }: { children: React.ReactNode }) {
  const currentPath = usePathname();
  const [partners, setPartners] = useState([
    { id: 1, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/mu6zkbsr9lfqeq9nvwls.png", companyName: "Amazon", ediDoc: ["850", "855", "810", "860"], visible: true },
    { id: 2, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/dgf2ebuyc3xbrohuwzep.svg", companyName: "Walmart", ediDoc: ["850", "855", "810", "860"], visible: true },
    { id: 3, image: "https://res.cloudinary.com/daoth80ez/image/upload/v1715896301/Media/oznp9xnvnzeclt8snqtr.png", companyName: "Autozone", ediDoc: ["850", "855", "810", "860"], visible: true }
  ]);

  let pageName = "";

  partners.map((partner) => {
    if (currentPath === ("/Cliente/" + partner.id)) {
      pageName = partner.companyName;
    }
  });

  if (currentPath === "/Admin") {
    pageName = "Partners";
  } else if (currentPath === "/Cliente") {
    pageName = "PartnerShip";
  }

  return (
    <React.Fragment>
      <main className="bg-base-200 text-primary-content font-sans-serif h-screen flex flex-col tracking-normal font-extrabold max-h-dvh">
        <Header>{pageName}</Header>
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
}

export default Layout;

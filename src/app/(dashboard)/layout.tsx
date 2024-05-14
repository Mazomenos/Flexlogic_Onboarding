"use client";
import React, { useMemo } from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import {usePathname} from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {

  const currentPath = usePathname();
  const pageName = useMemo(() => {
    if (currentPath === "/Admin") {
      return "Partners";
    }
    else if (currentPath === "/Cliente") {
      return "PartnerShip";
    }
    return "";
  }, [currentPath]);

  return (
    <React.Fragment>
      <main className="bg-base-200 text-primary-content font-sans-serif h-screen flex flex-col tracking-normal font-extrabold max-h-dvh">
        <Header>{pageName}</Header>
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
}

export default React.memo(Layout);

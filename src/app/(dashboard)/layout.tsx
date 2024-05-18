"use client";
import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { getPageName } from "./utils/getPageName";
import Provider from "@/components/Provider";

function Layout({ children }: { children: React.ReactNode }) {
  let currentPath = usePathname();
  const pageName = getPageName(currentPath);

  return (
    <main className="bg-base-200 text-primary-content h-screen flex flex-col max-h-dvh">
      <Header>{pageName}</Header>
      <Container>{children}</Container>
    </main>
  );
}

export default Layout;

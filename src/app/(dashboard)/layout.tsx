"use client";
import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { getPageName } from "./utils/getPageName";

function Layout({ children }: { children: React.ReactNode }) {
  let currentPath = usePathname();
  const pageName = getPageName(currentPath);

  return (
    <main className="bg-base-200 text-primary-content h-screen">
      <div className="h-20">
        <Header>{pageName}</Header>
      </div>
      <div className="h-[calc(100vh-5rem)]">
        <Container>{children}</Container>
      </div>
    </main>
  );
}

export default Layout;

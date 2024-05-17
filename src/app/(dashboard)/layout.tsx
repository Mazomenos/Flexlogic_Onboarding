"use client";
import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import {getPageName} from './utils/getPageName';

function Layout({ children }: { children: React.ReactNode }) {

  let currentPath = usePathname();
  const pageName = getPageName(currentPath);

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

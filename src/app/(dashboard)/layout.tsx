"use client";
import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { usePathname } from "next/navigation";
import { useGetPageName } from "./utils/getPageName";
import { createContext, useState } from 'react';
import { AppWrapper } from "@/context/context";


export const userID = createContext("null");  



function Layout({ children }: { children: React.ReactNode }) {
  let currentPath = usePathname();
  const pageName = useGetPageName(currentPath);

  

  return (
    <AppWrapper>
    <main className="bg-base-200 text-primary-content dark:text-darkMode-foreground h-screen">
      <div className="h-20">
      
        <Header>{""}</Header>
        
      </div>
      <div className="h-[calc(100vh-5rem)]">
        <Container>
          {children}
        
        </Container>
      
      </div>
    </main>
    </AppWrapper>
  );
}

export default Layout;

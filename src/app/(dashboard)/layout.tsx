import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <main className="bg-base-200 font-sans-serif h-screen flex flex-col tracking-normal font-extrabold max-h-dvh">
        <Header> Partners list </Header>
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
}

export default React.memo(Layout);

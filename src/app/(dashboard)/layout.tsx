import React from "react";
import Container from "@/components/Container";
import Header from "@/components/Header";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      <main className="bg-base-200 h-screen flex flex-col max-h-dvh">
        <Header> hola </Header>
        <Container>{children}</Container>
      </main>
    </React.Fragment>
  );
}

export default React.memo(Layout);

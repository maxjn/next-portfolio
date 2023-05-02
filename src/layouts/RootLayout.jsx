import NavBar from "@/components/NavBar";
import React from "react";

function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default RootLayout;

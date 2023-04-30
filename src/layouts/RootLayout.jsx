import NavBar from "@/components/NavBar";
import React from "react";

function RootLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}

export default RootLayout;

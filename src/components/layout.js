import React from "react";
import Menu from "./menu";

export default function Layout({ children }) {
  return (
    <div style={{ background: "#4F4D2D" }}>
      <Menu />
      {children}
    </div>
  );
}

import React from "react";
import Menu from "./menu";

import "./layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}

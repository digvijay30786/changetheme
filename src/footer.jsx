import "./footer.css";
import { ThemeContext } from "./ThemeContext";
import React, { useContext } from "react";
export default function Footer() {
  const val = useContext(ThemeContext);
  return (
    <div className="footer" style={val.asd}>
      <p>Copyright-2020</p>
      <p>All right Reserve DPCC</p>
    </div>
  );
}

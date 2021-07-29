import React, { useState, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "./header.css";
export default function Header() {
  const val = useContext(ThemeContext);
  const [dir, setDir] = useState("light");
  const handleOrder = () => {
    if (val.th == "light") {
      val.setTh("dark");
      setDir("Light");
    } else {
      val.setTh("light");
      setDir("Dark");
    }
  };
  console.log(val);
  return (
    <div className="Head" style={val.asd}>
      <div>
        <button onClick={handleOrder}>{dir} Theme</button>
      </div>
      <div>Carrers</div>
      <div>Login</div>
      <div>Logout</div>
      <div>Profile</div>
    </div>
  );
}

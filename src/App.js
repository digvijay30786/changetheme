import "./styles.css";
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import { ThemeContext } from "./ThemeContext";
import React, { useContext } from "react";
export default function App() {
  const val = useContext(ThemeContext);
  return (
    <div style={val.asd}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

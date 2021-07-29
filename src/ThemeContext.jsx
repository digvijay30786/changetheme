import { createContext, useState } from "react";
import { Mode } from "./other.js";
const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [th, setTh] = useState("dark");
   const sum = { asd:Mode().type.[th],setTh,th};
  return (
    <ThemeContext.Provider value={sum}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext };

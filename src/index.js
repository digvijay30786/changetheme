import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { ThemeContextProvider } from "./ThemeContext";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <ThemeContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeContextProvider>,
  rootElement
);

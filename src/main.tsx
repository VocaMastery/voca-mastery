import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

const fonts = {
  body: "Spoqa Han Sans, sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

const colors = {
  brand: {
    primary: "#6448D6",
    secondary: "#8870EA",
    tertiary: "#A38FF2",
    quaternary: "#CABCFF",
  },
};

const theme = extendTheme({ fonts, colors });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

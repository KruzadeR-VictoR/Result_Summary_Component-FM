import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    Lightred: "hsl(0, 100%, 67%)",
    Orangeyellow: "hsl(39, 100%, 56%)",
    Greenteal: "hsl(166, 100%, 37%)",
    Cobaltblue: "hsl(234, 85%, 45%)",
    Lightslateblue: " hsl(252, 100%, 67%)",
    Lightroyalblue: " hsl(241, 81%, 54%)",
    Violetblue: "hsla(256, 72%, 46%, 1)",
    Persianblue: "hsla(241, 72%, 46%, 0)",
    White: "hsl(0, 0%, 100%)",
    Paleblue: "hsl(221, 100%, 96%)",
    Lightlavender: " hsl(241, 100%, 89%)",
    Darkgrayblue: "hsl(224, 30%, 27%)",
  },
  fontWeights: {
    normal: "500",
    bold: "700",
    extraBold: "800",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

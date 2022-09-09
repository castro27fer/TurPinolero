import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NicaWikiApp from "./NicaWikiApp";
//import { ThemeProvider, createTheme } from "@mui/material/styles";
import "animate.css";
import "./index.css";

// const darkTheme = createTheme({
//   palette: {
//     mode: "light", //dark
//   },
// });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={darkTheme}> */}
      <BrowserRouter>
        <NicaWikiApp />
      </BrowserRouter>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

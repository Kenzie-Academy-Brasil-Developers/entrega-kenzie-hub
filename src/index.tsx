import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { DevsProvider } from "./context/DevsContext";
import { UserProvider } from "./context/UserContext";
import { ChakraProvider } from "@chakra-ui/react";
import { TechProvider } from "./context/TechContext";
import { WorksProvider } from "./context/WorksContext";

import { App } from "./App";

import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <DevsProvider>
          <UserProvider>
            <TechProvider>
              <WorksProvider>
                <App />
              </WorksProvider>
            </TechProvider>
          </UserProvider>
        </DevsProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

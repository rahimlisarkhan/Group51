import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStoreProvider } from "./provider/GlobalStoreProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { ModalProvider } from "./provider/ModalProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <Router>
      <GlobalStoreProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GlobalStoreProvider>
    </Router>
  </ModalProvider>
);

import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
      <App />,
  </StrictMode>
);

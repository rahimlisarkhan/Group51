import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import { ModalsProvider } from "./provider/ModalsProvider";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <Provider store={store}>
        <ModalsProvider>
          <App />
        </ModalsProvider>
      </Provider>
    </Router>
    ,
  </StrictMode>
);

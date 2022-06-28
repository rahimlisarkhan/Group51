import { AboutPage } from "./components/AboutPage";
import { HomePage } from "./components/HomePage";
import { Routes, Route,Navigate } from "react-router-dom";

import "./style/App.css";
import { Fragment } from "react";
import { Menu } from "./components/Menu";

const App = () => {
  return (
    <Fragment>
      <Menu />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/" element={<Navigate to="/home" replace/>}/>
      </Routes>
    </Fragment>
  );
};

export default App;

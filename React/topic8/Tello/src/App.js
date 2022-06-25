import React, { Component } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { ContactPage } from "./pages/Contact";
import { Header } from "./shared/components/Header";
import { ProductPage } from "./pages/Product";
import ProductDetail from "./pages/Product/ProductDetail";
import { ErrorPage } from "./pages/Errpr";

export class AboutHR extends Component{

  render(){
    return(
      <h1>HR About!!</h1>
    )
  }
}

export class AboutWork extends Component{

  render(){
    return(
      <h1>Work About!!</h1>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App ">
        <Header />
        <main>
          <Routes>
            <Route path={"/home"} element={<HomePage />} />
            <Route path="/" element={<Navigate to={"/home"} replace />} />

            <Route path={"/product"} element={<ProductPage />} />
            <Route path={"/product/:product_id"} element={<ProductDetail />} />
            {/* <Route path={"/product/:product_id/about/:id"} element={<AboutPage />} /> */}

            <Route path={"/about/*"} element={<AboutPage />}/>
            <Route path={"/contact"} element={<ContactPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
        <footer>
          <div className="jumbotron bg-info">
            <h1 className="display-3">footer</h1>
            <p className="lead">Jumbo helper text</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;

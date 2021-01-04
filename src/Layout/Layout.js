import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <header id="main-header" className="py-2 bg-primary text-white">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <i className="fas fa-cog"></i>
                </h1>
              </div>
            </div>
          </div>
        </header>
        {children}
        <SideMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Layout;

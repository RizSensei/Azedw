import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Instagram from "../Instagram/Instagram";

const Layout = ({ children }) => {
  
  return (
    <>
      <Header />
      <div>{children}</div>
      <Instagram />
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="header_bottom"></div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import React from "react";
import Navbar from "./Navbar/Navbar";
import BannerSlider from "./BannerSlider/BannerSlider";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      {children}
    </div>
  );
};

export default Layout;

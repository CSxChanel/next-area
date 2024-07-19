import React from "react";
import Navbar from "./Navbar/Navbar";
import BannerSlider from "./BannerSlider/BannerSlider";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <div className="mt-10 sm:mt-16">{children}</div>
    </div>
  );
};

export default Layout;

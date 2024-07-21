// components/Layout.jsx
import React from "react";
import Navbar from "./Navbar/Navbar";
import BannerSlider from "./BannerSlider/BannerSlider";
import { Area } from "@/services/Datas";
import Head from "next/head";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.asPath.replace("/", "");

  const currentArea = Area.find((area) => area.path === currentPath);

  return (
    <div>
      {currentArea && (
        <Head>
          <title>{currentArea.title}</title>
          <meta name="description" content={currentArea.des} />
          <meta property="og:title" content={currentArea.title} />
          <meta property="og:description" content={currentArea.des} />
          <meta property="og:image" content="/images/image1.jpg" />
          <meta
            property="og:url"
            content={`https://www.yourdomain.com/${currentPath}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentArea.title} />
          <meta name="twitter:description" content={currentArea.des} />
          <meta name="twitter:image" content="/images/image1.jpg" />
          {/* Robots meta tags */}
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
          />
        </Head>
      )}
      <Navbar />
      <BannerSlider />
      <main className="my-10">{children}</main>
    </div>
  );
};

export default Layout;

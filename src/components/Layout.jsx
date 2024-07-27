// components/Layout.jsx
import React from "react";
import Navbar from "./Navbar/Navbar";
import BannerSlider from "./BannerSlider/BannerSlider";
import { Area } from "@/services/Datas";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const router = useRouter();
  const currentPath = router.asPath.replace("/", "");

  const currentArea = Area.find((area) => area.path === currentPath);
  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}`;
  const ogImage = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/image1.png`;

  //metadat schema produk
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "IndiHome Internet Package",
    image: ogImage,
    description:
        "Provider internet Pendaftaran indihome mencakup semua area. Biaya pemasangan Gratis.",
    sku: "0446310786",
    mpn: "925872",
    brand: {
        "@type": "Brand",
        name: "IndiHome"
    },
    review: {
        "@type": "Review",
        reviewRating: {
            "@type": "Rating",
            ratingValue: "4.5",
            bestRating: "5"
        },
        author: {
            "@type": "Person",
            name: "Cecep Sudrajat"
        }
    },
    aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        reviewCount: "24"
    },
    offers: {
        "@type": "Offer",
        url: pageUrl,
        priceCurrency: "IDR",
        price: "220000",
        priceValidUntil: "2024-12-31",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
        seller: {
            "@type": "Organization",
            name: "IndiHome"
        }
    }
};


  return (
    <div>
      {currentArea && (
        <Head>
          <title>{currentArea.title}</title>
          <meta name="description" content={currentArea.des} />
          <meta property="og:title" content={currentArea.title} />
          <meta property="og:description" content={currentArea.des} />
          <meta property="og:image" content={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/image1.png` }/>
          <meta
            property="og:url"
            content={`${pageUrl}/${currentPath}`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={currentArea.title} />
          <meta name="twitter:description" content={currentArea.des} />
          <meta name="twitter:image" content={ogImage}/>
          {/* Robots meta tags */}
          <meta name="robots" content="index, follow" />
          <meta
            name="googlebot"
            content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
          />
          {/* Structured Data */}
          <script type="application/ld+json">
                        {JSON.stringify(structuredData)}
                    </script>
        </Head>
      )}
      <Navbar />
      <BannerSlider />
      <main className="my-10">{children}</main>
      <Footer/>
    </div>
  );
};

export default Layout;

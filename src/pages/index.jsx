import Head from "next/head";
import { useRouter } from "next/router";
//components
import Banner from "@/components/Banner";
import InternetJitu from "@/components/ListHarga/InternetOnly";
import InetTvPhone from "@/components/ListHarga/InternetTvPhone";
import MapImage from "@/components/MapsImg/MapImage";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import InternetTv from "@/components/ListHarga/InternetTv";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";



export default function Home() {
  const router = useRouter();
  

  const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}`
  const ogImage = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/image1.png`;
    //metadat schema produk
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Indihome Area | Produk indihome",
      image: ogImage,
      description:"Promo internet indihome Pendaftaran biaya Gratis,Pemasangan indihome mencakup semua Area.",
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
    <>
      <Head>
        <title>Indihome-Area | Provider internet Biaya Pemasangan gratis untuk semua Area</title>
        <meta
          name="description"
          content="Provider internet Pendaftaran indihome mencakup semua area. Biaya pemasangan Gratis."
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Indihome-Area || Provider internet Pendaftaran gratis" />
        <meta
          property="og:description"
          content="Promo internet indihome Pendaftaran biaya Gratis,Pemasangan indihome mencakup semua Area."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indihome-Area || Provider internet Pendaftaran Gratis" />
        <meta
          name="twitter:description"
          content="Promo internet indihome Pendaftaran biaya Gratis,Pemasangan indihome mencakup semua Area."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="keywords" content="indihome, internet, pendaftaran, indihome-cikupa, indihome-balaraja, indihome-tigaraksa" />
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
      <div>
        <Head>
          <title>Indihome-Area | Provider internet Biaya Pemasangan gratis untuk semua Area</title>
        </Head>
        <Banner />
        <InternetPromo />
        <InternetJitu />
        <InternetTv />
        <InetTvPhone />
        <MapImage />
        <BannerImgSlider />
      </div>
    </>
  );
}

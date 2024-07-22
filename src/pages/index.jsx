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
  const { path } = router.query;

  const pageUrl = `https://www.yourdomain.com/${path}`;
  const ogImage = `/images/image1.jpg`;

  return (
    <>
      <Head>
        <title>Indihome-Area | Biaya Pemasangan gratis</title>
        <meta
          name="description"
          content="Pendaftaran indihome mencakup semua area."
        />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Indihome-Area || Pendaftaran" />
        <meta
          property="og:description"
          content="Pendaftaran indihome mencakup semua area."
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indihome-Area || Pendaftaran" />
        <meta
          name="twitter:description"
          content="Pendaftaran indihome mencakup semua area."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="keywords" content="indihome, internet, pendaftaran" />
      </Head>
      <div>
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

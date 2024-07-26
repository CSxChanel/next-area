// /pages/[path]/index.jsx
import { Area } from "@/services/Datas";
import { useRouter } from "next/router";
import Head from "next/head";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider.jsx";
import MapImage from "@/components/MapsImg/MapImage.jsx";
import { useEffect, useState } from "react";
import BoxPromo from "@/components/ListHarga/BoxPromo.jsx";
import { HargaPromo } from "@/services/Datas.js";
import { PulseLoader } from "react-spinners";
import Link from "next/link";

export default function AreaPage({ area }) {
  const router = useRouter();
  const { path } = router.query;
  const promo = [...HargaPromo];
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const pageUrl = `https://next-area.vercel.app/${path}`;
  const ogImage = `/images/image1.jpg`;

  if (!area) {
    return <div>Loading...</div>;
  }

    // Cari data berdasarkan ID atau path
    

  return (
    <div>
      <Head>
      <title>{area.title}</title>
        <meta name="description" content={area.des} />
        <link rel="canonical" href={pageUrl} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={area.title} />
        <meta property="og:description" content={area.des} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={area.title} />
        <meta name="twitter:description" content={area.des} />
        <meta name="twitter:image" content={ogImage} />
        {/* Robots meta tags */}
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />
      </Head>
      <main>
        <div className="rounded-br-[55px] rounded-tl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500">
          <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-start">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Selamat datang {area.title}
              </h2>
              <p>{area.des}</p>
            </div>
            <div>
              <h3 className="text-[20px] sm:text-[27px] mt-8 leading-8 font-semibold">
                Pilihan paket Promo indihome tercover di seluruh provinsi dan
                kota Area {area.path}.
              </h3>
            </div>
          </div>
        </div>
        <div className="container my-5">
          <div className="mt-16 w-full mx-auto text-center">
            {loading ? (
              <div className="flex justify-center items-center h-10">
                <PulseLoader color="#e11d48" size={15} />
              </div>
            ) : (
              <>
                <h1 className="font-bold text-2xl sm:text-3xl">
                  Promo Paket {area.title}
                </h1>
                <p className="font-semibold text-wrap mt-4">
                  Paket paling murah ini hanya berlaku untuk wilayah {area.title}. Untuk melakukan pendaftaran, Anda dapat
                  menghubungi marketing resmi {area.path}. Chat via WhatsApp
                  untuk memilih paket paling murah dan segera berlangganan
                  sekarang!
                </p>
                <div className="border-t-2 border-slate-300 my-8">
                  <h1 className="font-bold text-2xl sm:text-3xl sm:mt-5 mt-3 text-rose-600">
                    Paket 1P (Internet Only)
                  </h1>
                </div>
              </>
            )}
          </div>
          {!loading && (
            <div className="sm:grid sm:grid-cols-2 gap-3">
              {promo.map((pkg) => (
                <BoxPromo
                  key={pkg.id}
                  mbps={pkg.mbps}
                  type={pkg.type}
                  title={pkg.title}
                  price={pkg.price}
                  benevit={pkg.benevit}
                  benevit2={pkg.benevit2}
                  benevit3={pkg.benevit3}
                  syarat={pkg.syarat}
                />
              ))}
            </div>
          )}
        </div>
      </main>
      <div className="w-full mx-auto text-center my-12">
        <Link className="py-2 px-5 sm:px-10 cursor-pointer shadow-md font-semibold border border-rose-500 hover:border-rose-700 rounded-full text-rose-500 hover:text-rose-700" href="/produk-indihome">Lihat Semua Harga</Link>
      </div>
      <MapImage />
      <BannerImgSlider />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = Area.map((area) => ({
    params: { path: area.path },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const area = Area.find((a) => a.path === params.path);
  return { props: { area } };
}

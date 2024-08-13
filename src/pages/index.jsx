import Head from "next/head";

//components
import Banner from "@/components/Banner";
import InternetJitu from "@/components/ListHarga/InternetOnly";
import InetTvPhone from "@/components/ListHarga/InternetTvPhone";
import MapImage from "@/components/MapsImg/MapImage";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import InternetTv from "@/components/ListHarga/InternetTv";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";

export default function Home() {
    const area = {
        path: "indihome-area",
        title: "Indihome Area",
        pageTitle:
            "Indihome-Area | Provider internet Biaya Pemasangan gratis untuk semua Area",
        description:
            "Bebas akses internet stabil, telepon rumah jernih dan tayangan Tv interaktif terpopuler dengan indiHome. Miliki layanan internet terbaik di rumah sekarang juga.",
        conten: "Solusi Internet Cepat, Berkelas, dan Cerdas untuk Aktifitas Tanpa Batas"
    };

    const pageUrl = "https://indihome-area.com";
    const ogImage = "https://indihome-area.com/image1.png";
    //metadat schema produk
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Indihome Area | Produk indihome",
        image: ogImage,
        description:
            "Promo internet indihome Pendaftaran biaya Gratis,Pemasangan indihome mencakup semua Area.",
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
                ratingValue: "5.0",
                bestRating: "5"
            },
            author: {
                "@type": "Person",
                name: "Cecep Sudrajat"
            },
            reviewBody:
                "Layanan yang sangat memuaskan, kecepatan internet stabil dan dukungan pelanggan sangat responsif.",
            datePublished: "2024-08-13"
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "249855"
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
                <title>{area.pageTitle}</title>
                <meta name="description" content={area.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={area.pageTitle} />
                <meta property="og:description" content={area.description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={area.pageTitle} />
                <meta name="twitter:description" content={area.description} />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="keywords"
                    content="indihome, internet, pendaftaran, indihome-cikupa, indihome-balaraja, indihome-tigaraksa"
                />
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
            <Banner title={area.title} description={area.description} />
            <InternetPromo title={area.title} path={area.path} />
            <InternetJitu />
            <InternetTv />
            <InetTvPhone />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}

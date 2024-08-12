import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";

function Tigaraksa() {
    const router = useRouter();
    const tigaraksa = {
        path: "indihome-tigaraksa",
        title: "IndiHome Tigaraksa",
        pageTitle: "IndiHome - Tigaraksa | Pendaftaran Online",
        description:
            "Untuk Sobat indihome wilayah Indihome-tigaraksa dapat Registrasi atau Pendaftaran Online juga bisa menghubungi Marketing resmi indihome. ada banyak pilihat paket promo untuk wilayah tigaraksa.",
        conten: "tigaraksa",
        buttonLabel: "Lihat Semua Harga",
        onClick: () => {
            router.push("/produk-indihome");
        }
    };

    const pageUrl = `https://www.indihome-area.com/${tigaraksa.path}`;

    const ogImage = "https://www.indihome-area.com/image1.png";

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
                <title>{tigaraksa.pageTitle}</title>
                <meta name="description" content={tigaraksa.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={tigaraksa.pageTitle} />
                <meta
                    property="og:description"
                    content={tigaraksa.description}
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={tigaraksa.pageTitle} />
                <meta
                    name="twitter:description"
                    content={tigaraksa.description}
                />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="keywords"
                    content="indihome, internet, pendaftaran, indihome-cikupa, indihome-banten, indihome-tigaraksa"
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
            <Banner
                title={tigaraksa.title}
                description={tigaraksa.description}
            />
            <InternetPromo
                title={tigaraksa.title}
                path={tigaraksa.path}
                onClick={tigaraksa.onClick}
                buttonLabel={tigaraksa.buttonLabel}
            />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}
export default Tigaraksa;

import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";

function Curug() {
    const router = useRouter();
    const curug = {
        path: "indihome-curug",
        title: "IndiHome Curug",
        pageTitle: "IndiHome - Curug | Pendaftaran Online",
        description:
            "Untuk Anda yang berada di Curug, kini registrasi IndiHome semakin praktis dengan sistem online. Baik untuk kebutuhan rumah, kantor, atau usaha, Anda dapat mendaftar dengan mudah hanya dengan gadget Anda. Hubungi marketing resmi IndiHome dan segera daftar untuk menikmati internet cepat dan stabil.",
        conten: "curug",
        buttonLabel: "Lihat Semua Harga",
        onClick: () => {
            router.push("/produk-indihome");
        }
    };

    const pageUrl = `https://www.indihome-area.com/${curug.path}`;

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
                ratingValue: "5.0",
                bestRating: "5"
            },
            author: {
                "@type": "Person",
                name: "Cecep Sudrajat"
            }
        },
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "5.0",
            reviewCount: "249.855"
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
                <title>{curug.pageTitle}</title>
                <meta name="description" content={curug.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={curug.pageTitle} />
                <meta property="og:description" content={curug.description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={curug.pageTitle} />
                <meta name="twitter:description" content={curug.description} />
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
            <Banner title={curug.title} description={curug.description} />
            <InternetPromo
                title={curug.title}
                path={curug.path}
                onClick={curug.onClick}
                buttonLabel={curug.buttonLabel}
            />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}
export default Curug;

import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";

function CitraRaya() {
    const router = useRouter();
    const citraraya = {
        path: "indihome-citra-raya",
        title: "IndiHome Citra Raya",
        pageTitle: "IndiHome Citra Raya | Registrasi indihome area citra-raya",
        description:
            "Registrasi IndiHome Citra Raya kini lebih mudah dengan sistem pendaftaran online. Anda bisa mendaftar dari rumah, kantor, atau tempat usaha hanya dengan menggunakan gadget. Hubungi marketing resmi IndiHome dan nikmati koneksi internet terbaik di Cikupa. Daftar sekarang dan rasakan kemudahannya!",
        conten: "citra raya",
        buttonLabel: "Lihat Semua Harga",
        onClick: () => {
            router.push("/produk-indihome");
        }
    };

    const pageUrl = `https://indihome-area.com/${citraraya.path}`;

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
                <title>{citraraya.pageTitle}</title>
                <meta name="description" content={citraraya.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={citraraya.pageTitle} />
                <meta
                    property="og:description"
                    content={citraraya.description}
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={citraraya.pageTitle} />
                <meta
                    name="twitter:description"
                    content={citraraya.description}
                />
                <meta name="twitter:image" content={ogImage} />
                <meta
                    name="keywords"
                    content="indihome, internet, pendaftaran, indihome-citra-raya, indihome-banten, indihome-tigaraksa"
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
                title={citraraya.title}
                description={citraraya.description}
            />
            <InternetPromo
                title={citraraya.title}
                path={citraraya.path}
                onClick={citraraya.onClick}
                buttonLabel={citraraya.buttonLabel}
            />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}
export default CitraRaya;

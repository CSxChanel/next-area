import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";

function PasarKemis() {
    const router = useRouter();
    const pasarkemis = {
        path: "indihome-pasar-kemis",
        title: "IndiHome Pasar Kemis",
        pageTitle: "IndiHome - Pasar kemis | Pendaftaran Online",
        description:
            "Registrasi IndiHome Pasar Kemis kini semakin mudah dan cepat dengan sistem pendaftaran online. Hanya dengan menggunakan gadget, Anda bisa menghubungi marketing resmi IndiHome untuk pemasangan di rumah, kantor, atau tempat usaha Anda. Jangan lewatkan kesempatan ini, daftar IndiHome sekarang juga!",
        conten: "pasarkemis",
        buttonLabel: "Lihat Semua Harga",
        onClick: () => {
            router.push("/produk-indihome");
        }
    };

    const pageUrl = `https://www.indihome-area.com/${pasarkemis.path}`;

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
                <title>{pasarkemis.pageTitle}</title>
                <meta name="description" content={pasarkemis.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={pasarkemis.pageTitle} />
                <meta
                    property="og:description"
                    content={pasarkemis.description}
                />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={pasarkemis.pageTitle} />
                <meta
                    name="twitter:description"
                    content={pasarkemis.description}
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
                title={pasarkemis.title}
                description={pasarkemis.description}
            />
            <InternetPromo
                title={pasarkemis.title}
                path={pasarkemis.path}
                onClick={pasarkemis.onClick}
                buttonLabel={pasarkemis.buttonLabel}
            />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}
export default PasarKemis;

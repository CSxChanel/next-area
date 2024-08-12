import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";
function Cikupa() {
    const router = useRouter();
    const cikupa = {
        path: "indihome-cikupa",
        title: "IndiHome Cikupa",
        pageTitle: "IndiHome Cikupa | Registrasi indihome area cikupa",
        description:
            "Registrasi IndiHome Cikupa kini lebih mudah dengan sistem pendaftaran online. Anda bisa mendaftar dari rumah, kantor, atau tempat usaha hanya dengan menggunakan gadget. Hubungi marketing resmi IndiHome dan nikmati koneksi internet terbaik di Cikupa. Daftar sekarang dan rasakan kemudahannya!",
        conten: "cikupa",
        buttonLabel: "Lihat Semua Harga",
        onClick: () => {
            router.push("/produk-indihome");
        }
    };

    const pageUrl = `https://www.indihome-area.com/${cikupa.path}`;

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
                <title>{cikupa.pageTitle}</title>
                <meta name="description" content={cikupa.description} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Open Graph Tags */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content={cikupa.pageTitle} />
                <meta property="og:description" content={cikupa.description} />
                <meta property="og:url" content={pageUrl} />
                <meta property="og:image" content={ogImage} />

                {/* Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={cikupa.pageTitle} />
                <meta name="twitter:description" content={cikupa.description} />
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
            <Banner title={cikupa.title} description={cikupa.description} />
            <InternetPromo
                title={cikupa.title}
                path={cikupa.path}
                onClick={cikupa.onClick}
                buttonLabel={cikupa.buttonLabel}
            />
            <MapImage />
            <BannerImgSlider />
        </>
    );
}
export default Cikupa;

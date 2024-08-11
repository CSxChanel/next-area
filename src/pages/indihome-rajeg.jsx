import Banner from "@/components/Banner";
import BannerImgSlider from "@/components/BannerImgSlider/BannerImgSlider";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import MapImage from "@/components/MapsImg/MapImage";
import Head from "next/head";
import { useRouter } from "next/router";

function Rajeg (){
    const router = useRouter();
    const rajeg = {
        path: 'indihome-rajeg',
        title: 'IndiHome Rajeg',
        pageTitle: 'IndiHome - Rajeg | Pendaftaran Online',
        description: 'IndiHome Rajeg hadir dengan kemudahan pendaftaran online untuk memenuhi kebutuhan internet Anda di rumah, kantor, atau tempat usaha. Tanpa perlu repot, Anda dapat langsung menghubungi marketing resmi IndiHome melalui gadget Anda. Segera daftar dan nikmati layanan internet terbaik dari IndiHome Rajeg.',
        conten: 'rajeg',
        buttonLabel: 'Lihat Semua Harga',
        onClick : () => {
            router.push('/produk-indihome');}
    }

    const pageUrl = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${rajeg.path}`;
    
    const ogImage = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/${rajeg.path}/image1.png`;

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
        <title>{rajeg.pageTitle}</title>
        <meta
          name="description"
          content={rajeg.description}
        />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={rajeg.pageTitle} />
        <meta
          property="og:description"
          content={rajeg.description}
        />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:image" content={ogImage} />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={rajeg.pageTitle} />
        <meta
          name="twitter:description"
          content={rajeg.description}
        />
        <meta name="twitter:image" content={ogImage} />
        <meta name="keywords" content="indihome, internet, pendaftaran, indihome-cikupa, indihome-banten, indihome-tigaraksa" />
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
            <Banner title={rajeg.title} description={rajeg.description}/>  
            <InternetPromo title={rajeg.title} path={rajeg.path} onClick={rajeg.onClick} buttonLabel={rajeg.buttonLabel} />
            <MapImage />
            <BannerImgSlider />      
        </>
    )
}
export default Rajeg
import Layout from "@/components/Layout";
import "@/styles/globals.css"; // Pastikan untuk mengimpor CSS global

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

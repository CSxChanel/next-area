import { Html, Head, Main, NextScript } from "next/document";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Document() {
  return (
    <Html lang="id-ID">
      <Head />
      <body className={poppins.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

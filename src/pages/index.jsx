import React from "react";
import Banner from "@/components/Banner";
import InternetJitu from "@/components/ListHarga/InternetOnly";
import InetTvPhone from "@/components/ListHarga/InternetTvPhone";
import MapImage from "@/components/MapsImg/MapImage";
import InternetPromo from "@/components/ListHarga/InternetPromo";
import InternetTv from "@/components/ListHarga/InternetTv";

export default function Home() {
  return (
    <div>
      <Banner />
      <InternetPromo />
      <InternetJitu />
      <InternetTv />
      <InetTvPhone />
      <MapImage />
    </div>
  );
}

import React from 'react';
import Banner from '../components/Banner';
import InternetJitu from '../components/ListHarga/InternetOnly';
import JituTv from '../components/ListHarga/InternetTv';
import InetTvPhone from '../components/ListHarga/InternetTvPhone';
import PagePromo from '../components/PagePromo';

export default function Home() {
    return (
        <>
            <Banner />
            <PagePromo />
            <InternetJitu />
            <JituTv />
            <InetTvPhone />
        </>
    );
}

//components/ListHarga
import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";
import BoxList from "../components/ListHarga/BoxList.jsx";
import {
    InternetOnly,
    InternetTv,
    InternetTvPhone
} from "../services/Datas.js";

const PageProduk = () => {
    const allPackages = [...InternetOnly, ...InternetTv, ...InternetTvPhone];
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="container my-5">
            <div className="mt-16 w-full mx-auto text-center">
                <h1 className="font-bold text-2xl sm:text-3xl">
                    Pilihan Paket IndiHome
                </h1>
                <div className="border-t-2 border-slate-500 my-8">
                    <h1 className="font-bold mt-3 sm:mt-5 sm:text-3xl text-2xl text-rose-600">
                        indiHome-Area
                    </h1>
                </div>
            </div>
            {loading ? (
                <div className="flex justify-center items-center h-64">
                    <PulseLoader color="#e11d48" size={15} />
                </div>
            ) : (
                <div className="sm:grid sm:grid-cols-2 gap-3">
                    {allPackages.map(all => (
                        <BoxList
                            key={all.id}
                            mbps={all.mbps}
                            type={all.type}
                            title={all.title}
                            price={all.price}
                            benevit={all.benevit}
                            benevit2={all.benevit2}
                            benevit3={all.benevit3}
                            benevit4={all.benevit4}
                            benevit5={all.benevit5}
                            syarat={all.syarat}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};
export default PageProduk;

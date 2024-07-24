//src/components/ListHarga/BoxList
import React, { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import OpenBenevit from "@/components/Modals/OpenBenevit.jsx";
import OpenSyarat from "@/components/Modals/OpenSyarat.jsx";
import Link from "next/link";

const BoxList = ({
  type,
  title,
  price,
  mbps,
  benevit,
  benevit2,
  benevit3,
  benevit4,
  benevit5,
  syarat,
}) => {
  const [isBenevitModalOpen, setIsBenevitModalOpen] = useState(false);
  const [isSyaratModalOpen, setIsSyaratModalOpen] = useState(false);

  const handleOpenBenevitModal = () => {
    setIsBenevitModalOpen(true);
  };

  const handleCloseBenevitModal = () => {
    setIsBenevitModalOpen(false);
  };

  const handleOpenSyaratModal = () => {
    setIsSyaratModalOpen(true);
  };

  const handleCloseSyaratModal = () => {
    setIsSyaratModalOpen(false);
  };

  // Pesan yang akan dikirim melalui WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Halo, saya tertarik dengan paket IndiHome \n
  ┌〔 *Paling Murah* 〕
  ├ Rp: *${price.toLocaleString()}*/bulan
  ├ Mbps: *${mbps}* Mbps
  ├ ${title}
  └──── ┈ ⳹`
  );

  return (
    <div className="my-8 sm:my-5 shadow-lg shadow-slate-500 w-full mx-auto bg-slate-100 rounded-xl">
      <h2 className="mx-auto w-[180px] py-1 text-center text-slate-100 font-bold bg-gradient-to-r from-slate-900 to-slate-600 rounded-bl-xl rounded-tr-xl">
        Paling Populer
      </h2>
      <div className="flex flex-row mx-7 my-5">
        <div className="w-[75px] h-[75px] bg-gradient-to-tr from-rose-950 to-rose-500 rounded-tl-xl rounded-br-xl text-slate-100 p-2 text-center mr-5">
          <p className="text-3xl font-bold">{mbps}</p>
          <p className="-mt-2">Mbps</p>
        </div>
        <div>
          <h3 className="font-semibold text-xl">{title}</h3>
          <p>{type}</p>
        </div>
      </div>
      <div className="mx-7 text-center">
        <h3 className="font-semibold mt-8">
          Rp{" "}
          <span className="text-2xl font-bold">{price.toLocaleString()}</span>
          /bulan
        </h3>
        <div className="bg-rose-700 w-full rounded-xl shadow shadow-slate-500 text-slate-100 font-bold hover:scale-110 mt-5 py-1">
          <Link
            href={`https://wa.me/+6281210489840?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Berlangganan Sekarang
          </Link>
        </div>
      </div>
      <div className="flex justify-between mx-3 border-t-2 my-7 py-2">
        <button
          onClick={handleOpenBenevitModal}
          className="text-rose-700 text-sm cursor-pointer font-medium"
        >
          Benevit
          <GoChevronDown />
        </button>
        <button
          onClick={handleOpenSyaratModal}
          className="text-rose-700 text-sm cursor-pointer font-medium"
        >
          Syarat & Ketentuan
          <GoChevronDown />
        </button>
      </div>
      {isBenevitModalOpen && (
        <OpenBenevit
          benevit={[benevit, benevit2, benevit3, benevit4, benevit5]}
          onClose={handleCloseBenevitModal}
        />
      )}
      {isSyaratModalOpen && (
        <OpenSyarat syarat={[syarat]} onClose={handleCloseSyaratModal} />
      )}
    </div>
  );
};

export default BoxList;

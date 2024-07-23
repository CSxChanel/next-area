import InternetPromo from "@/components/ListHarga/InternetPromo";

const PromoIndihome = () => {
  return (
    <>
      <div className="rounded-br-[55px] rounded-tl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500">
        <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Selamat datang indiHome Area
            </h2>
            <p>
              IndiHome menghadirkan berbagai paket promo menarik untuk memenuhi
              kebutuhan internet Anda. Paket-paket ini dirancang untuk
              memberikan pengalaman internet yang cepat, stabil, dan terjangkau.
              Namun, perlu diingat bahwa tidak semua paket promo tersedia di
              setiap wilayah. Oleh karena itu, penting untuk memeriksa
              ketersediaan paket di daerah Anda.
            </p>
          </div>
          <div>
            <h3 className="text-[20px] mt-8 leading-8 font-semibold">
              Untuk informasi lebih lanjut mengenai paket promo dan ketersediaan
              di wilayah Anda, hubungi Marketing IndiHome Pilih Produk Chat via
              WhatApp. Pastikan Anda mendapatkan informasi dari sumber resmi
              untuk menghindari penipuan dan informasi yang salah.
            </h3>
          </div>
        </div>
      </div>

      <InternetPromo />
    </>
  );
};
export default PromoIndihome;

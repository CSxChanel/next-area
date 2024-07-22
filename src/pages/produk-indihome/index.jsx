import SemuaHarga from "@/components/ListHarga/SemuaHarga";

const ProdukIndihome = () => {
  return (
    <>
      <div className="rounded-br-[55px] rounded-tl-[55px] w-full bg-gradient-to-r from-red-700 to-rose-500">
        <div className="py-10 px-5 text-slate-100 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:px-24 sm:items-start">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              Selamat datang indiHome Area
            </h2>
            <p>
              Kini, mendaftar IndiHome menjadi lebih mudah dengan sistem
              registrasi online! Pastikan Anda berada di wilayah yang tercover
              oleh jaringan IndiHome untuk dapat menikmati layanan internet
              terbaik di Indonesia.
            </p>
          </div>
          <div>
            <h3 className="text-[27px] mt-8 leading-8 font-semibold">
              Untuk informasi lebih lanjut, hubungi Marketing resmi IndiHome.
              Nikmati kemudahan internet cepat dan stabil dengan mendaftar
              IndiHome secara online sekarang juga!
            </h3>
          </div>
        </div>
      </div>
      
      <SemuaHarga />
    </>
  );
};
export default ProdukIndihome;

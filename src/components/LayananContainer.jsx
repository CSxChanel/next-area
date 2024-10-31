import React, { useRef, useState } from "react";
import CardLayanan from "./CardLayanan";

const LayananContainer = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const images = [
    {
      src: "/media/layanan-internet.png",
      alt: "Layanan Internet",
      description: "Akses internet broadband cepat hingga 300Mbps.",
    },
    {
      src: "/media/layanan-tv.png",
      alt: "Layanan TV",
      description:
        "Tayangan TV berkualitas hingga 4K Full HD untuk kualitas terbaik.",
    },
    {
      src: "/media/layanan-telepon.png",
      alt: "Layanan Telepon",
      description:
        "Akses layanan telepon rumah hingga 1000an nomor aktif di seluruh wilayah Indonesia.",
    },
  ];

  return (
    <>
      <div className="bg-slate-100 my-10 py-10">
        <h1 className="mx-5 font-bold text-2xl mb-5">Layanan IndiHome</h1>
        <div
          className="flex space-x-6 ml-5 overflow-x-auto no-scrollbar scroll-smooth cursor-pointer"
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-[340px] lg:w-[500px]">
              <CardLayanan image={image} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LayananContainer;

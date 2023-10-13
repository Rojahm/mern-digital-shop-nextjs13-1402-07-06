"use client";
import { useRef } from "react";
// custom components
import GraficProductBox from "./GraficProductBox";
//UI - icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

function ProductSlider({ title, link }) {
  const carouselRef = useRef();
  const carouselSwitcher = (data) => {
    if (carouselRef.current) {
      const width = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo(
        carouselRef.current.scrollLeft + width * data,
        0
      );
    }
  };
  return (
    <section className="relative flex flex-col my-10 w-screen bg-yellow-400/95 py-5 px-14">
      <header className="flex">
        <h2 className="text-stone-600 font-semibold text-lg">| {title}</h2>
        <div className=" mr-auto">
          <Link href={`${link}`}>
            <button className="mr-5 bg-purple-600/80 hover:bg-purple-300 text-stone-100 hover:text-stone-700 py-1 px-2 rounded shadow-md hover:shadow-lg transition-all ease-in-out duration-300 ">
              نمایش همه
            </button>
          </Link>
        </div>
      </header>

      {/* navigation */}
      <div className="flex justify-between flex-row-reverse absolute w-[90%] top-52 z-40 h-20">
        <button
          onClick={() => carouselSwitcher(-1)}
          className="bg-stone-300 transition-all ease-in-out duration-300 hover:bg-purple-400 hover:text-purple-800 p-2 rounded-md"
        >
          <BsChevronLeft />
        </button>
        <button
          onClick={() => carouselSwitcher(1)}
          className="bg-stone-300 transition-all ease-in-out duration-300 hover:bg-purple-400 hover:text-purple-800 p-2 rounded-md"
        >
          <BsChevronRight />
        </button>
      </div>
      <div className="mr-auto"></div>
      <div className="ml-auto"></div>

      <div
        ref={carouselRef}
        className="slider-container flex overflow-x-scroll my-3 gap-6 mx-3 p-3"
      >
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
        <GraficProductBox />
      </div>
    </section>
  );
}

export default ProductSlider;

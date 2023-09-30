"use client";
import { useRef } from "react";
// custom components
import ProductBox from "./ProductBox";
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
    <section className="flex flex-col my-10 w-screen bg-stone-200 py-5 px-14">
      <header className="flex">
        <h2 className="text-stone-600 font-semibold text-lg">| {title}</h2>
        {/* navigation */}
        <div className="mr-auto flex flex-row-reverse gap-2">
          <button
            onClick={() => carouselSwitcher(-1)}
            className="bg-stone-300 transition-all ease-in-out duration-300 hover:bg-lime-500 p-2 rounded-md"
          >
            <BsChevronLeft />
          </button>
          <button
            onClick={() => carouselSwitcher(1)}
            className="bg-stone-300 transition-all ease-in-out duration-300 hover:bg-lime-500 p-2 rounded-md"
          >
            <BsChevronRight />
          </button>
        </div>
        <Link href={`${link}`}>
          <button className="mr-5 bg-lime-600 hover:bg-stone-300 text-stone-100 hover:text-stone-700 py-1 px-2 rounded shadow-md hover:shadow-lg transition-all ease-in-out duration-300">
            نمایش همه
          </button>
        </Link>
      </header>
      <div
        ref={carouselRef}
        className="slider-container flex overflow-x-scroll my-3 gap-6 mx-3 p-3"
      >
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </section>
  );
}

export default ProductSlider;

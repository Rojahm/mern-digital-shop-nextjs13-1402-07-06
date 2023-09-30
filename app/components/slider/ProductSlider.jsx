"use client";
import { useRef } from "react";
// custom components
import ProductBox from "./ProductBox";
//UI - icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProductSlider() {
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
        <h2 className="text-stone-600 font-semibold text-lg">| محصولات</h2>
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

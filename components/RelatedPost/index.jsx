"use client";
import Link from "next/link";
import { useRef } from "react";
// custom components
import BlogBannerBox from "@/app/blog/BlogBannerBox";
//UI - icons
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const RelatedPost = ({ title }) => {
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
    <section className="flex flex-col my-10 bg-stone-200 py-5 px-8 rounded-lg">
      <header className="flex">
        <h2 className="text-stone-600 font-semibold text-lg">
          | {title} مرتبط
        </h2>
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
        <Link href={"/blog"}>
          <button className="mr-5 bg-lime-600 hover:bg-stone-300 text-stone-100 hover:text-stone-700 py-1 px-2 rounded shadow-md hover:shadow-lg transition-all ease-in-out duration-300">
            نمایش همه
          </button>
        </Link>
      </header>
      <div
        ref={carouselRef}
        className="slider-container flex overflow-x-scroll my-3 gap-5 mx-3 p-3"
      >
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
      </div>
    </section>
  );
};

export default RelatedPost;

"use client";
//ui
import { FaArrowUp } from "react-icons/fa";

function Credit() {
  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="container px-5 w-[95%] flex justify-between pb-2">
      <h6>نمیتبمنسیبسمین</h6>
      <button
        onClick={goTop}
        className="bg-yellow-400 p-2 rounded-md shadow-md hover:shadow-lg hover:-translate-y-2 transform-all ease-in-out duration-300"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}

export default Credit;

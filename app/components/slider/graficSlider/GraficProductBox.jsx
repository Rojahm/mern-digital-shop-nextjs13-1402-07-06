import Image from "next/image";
import Link from "next/link";
//ui fonts icons
import { BsCart2 } from "react-icons/bs";
import { PiMagnifyingGlass } from "react-icons/pi";
import { BiBookmark } from "react-icons/bi";
import { TiBrush } from "react-icons/ti";
import { IoIosResize } from "react-icons/io";
import { AiOutlineCopy } from "react-icons/ai";

function GraficProductBox() {
  return (
    <article className="relative slider-item bg-stone-200 w-64 transition-all ease-in-out duration-300 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] hover:shadow-[0px_1px_10px_rgba(0,0,0,0.25)] rounded-lg h-96 min-w-[238px] hover:-translate-y-3">
      <Link href={"/"}>
        <Image
          src={"/images/product/ganj.jpg"}
          width={280}
          height={180}
          objectFit="cover"
          layout="fixed"
          className="rounded-t-md mb-4 my-0 mx-auto"
        />
        <h3 className="font-bold text-stone-600 text-sm pr-3">
          کتاب گنج - نوشته جلال آل احمد کتاب گنج - نوشته جلال آل احمد
        </h3>
      </Link>
      {/* file details */}
      <div className="flex flex-col gap-1 p-2 text-stone-500 sm:text-base md:text-sm py-4 mt-4">
        <div className="flex justify-between">
          <span className="flex justify-start items-center gap-1">
            <TiBrush size={"20px"} />
            فرمت
          </span>
          <span>PSD</span>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-start items-center gap-1">
            <IoIosResize size={"20px"} />
            ابعاد
          </span>
          <span>1080*720 پیکسل </span>
        </div>
        <div className="flex justify-between">
          <span className="flex justify-start items-center gap-1">
            <AiOutlineCopy size={"20px"} />
            حجم
          </span>
          <span>10 مگ</span>
        </div>
      </div>
      {/* keywords */}
      <div className="absolute bottom-16 my-1 pr-2">
        <Link href={"/"}>
          <span className="bg-stone-300/60 ml-1 text-xs rounded-lg py-1 px-2 text-stone-700">
            keyword1
          </span>
        </Link>
        <Link href={"/"}>
          <span className="bg-stone-300/60 ml-1 text-xs rounded-lg py-1 px-2 text-stone-700">
            keyword1
          </span>
        </Link>
      </div>
      {/* navigation buttons */}
      <div className="absolute right-0 left-0 bottom-2 flex flex-row-reverse justify-between items-end mt-6">
        <span className="flex flex-row-reverse gap-1">
          <span className="bg-stone-500 align-center p-2 px-3 text-sm text-stone-100 rounded-tr-md rounded-br-md">
            2000 تومان
          </span>
          <button className="bg-purple-400 rounded-xl p-2 text-stone-100">
            <BsCart2 size={"22px"} />
          </button>
        </span>
        <span className="flex flex-row-reverse gap-1 pr-3">
          <button className="bg-stone-300 rounded-xl p-2 text-stone-600">
            <BiBookmark size={"22px"} />
          </button>
          <button className="bg-stone-300 rounded-xl p-2 text-stone-600">
            <PiMagnifyingGlass size={"22px"} />
          </button>
        </span>
      </div>
    </article>
  );
}

export default GraficProductBox;

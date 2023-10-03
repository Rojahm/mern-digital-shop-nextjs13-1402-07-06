import Image from "next/image";
import Link from "next/link";
//ui icons
import { MdKeyboardArrowLeft } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-14 mb-5">
      <div className="flex justify-between items-center gap-5 w-[95%] my-0 mx-auto bg-stone-100 text-stone-500 p-5 rounded-md">
        <div className="basis-1/3">
          <Link
            href={"/"}
            className="p-3 flex flex-col justify-center items-center"
          >
            <Image
              src={"/trans-icon.png"}
              width={100}
              height={100}
              alt="logo image"
            />
            <p className="mt-2 text-center sm:text-md md:text-sm lg:text-md lg:px-14 line-clamp-1 sm:line-clamp-1 md:line-clamp-2">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از
            </p>
          </Link>
        </div>
        <div className="basis-1/3 flex gap-2 justify-between">
          <div className="flex flex-col gap-1 min-w-[120px]">
            <h3 className="text-lg mb-4">دسترسی سریع</h3>
            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              درباره ما
            </Link>
            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              وبلاگ
            </Link>
            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              حریم خصوصی
            </Link>
            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              تماس با ما
            </Link>
          </div>

          <div className="flex flex-col gap-1 min-w-[120px]">
            <h3 className="text-lg mb-4">راهنمای خرید</h3>

            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              سوالات متداول
            </Link>
            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              چگونه خرید کنم؟
            </Link>
            <Link
              href={"/"}
              className="flex justify-start items-center sm:text-md md:text-sm lg:text-md hover:text-lime-600 hover:font-semibold transition-all ease-in-out duration-300"
            >
              <MdKeyboardArrowLeft />
              قوانین
            </Link>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center self-center gap-2">
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/Licenses/1.png"}
                width={100}
                height={100}
                alt="licence"
              />
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <Image
                src={"/images/Licenses/2.png"}
                width={100}
                height={100}
                alt="license2"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

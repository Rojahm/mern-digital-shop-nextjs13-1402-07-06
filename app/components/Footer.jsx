import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-14 mb-5 text-stone-500">
      <div className="flex justify-between items-start gap-5 w-[95%] my-0 mx-auto bg-stone-100 p-5 rounded-md">
        <div className="basis-2/5">
          <Link
            href={"/"}
            className="p-3 px-14 flex flex-col items-center justify-around"
          >
            <Image src={"/trans-icon.png"} width={100} height={100} />
            <p className="mt-2 text-center sm:text-md md:text-sm lg:text-md">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از
            </p>
          </Link>
        </div>
        <div className="basis-1/5 mt-5">
          <h3 className="text-lg mb-4">دسترسی سریع</h3>
          <ul className="list-disc pr-4">
            <li className="sm:text-md md:text-sm lg:text-md">درباره ما</li>
            <li className="sm:text-md md:text-sm lg:text-md">وبلاگ</li>
            <li className="sm:text-md md:text-sm lg:text-md">حریم خصوصی</li>
            <li className="sm:text-md md:text-sm lg:text-md">تماس با ما</li>
          </ul>
        </div>
        <div className="basis-1/5 mt-5">
          <h3 className="text-lg mb-4">راهنمای خرید</h3>
          <ul className="list-disc pr-4">
            <li className="sm:text-md md:text-sm lg:text-md">سوالات متداول</li>
            <li className="sm:text-md md:text-sm lg:text-md">
              چگونه خرید کنم؟
            </li>
            <li className="sm:text-md md:text-sm lg:text-md">
              قوانین استفاده از محصولات
            </li>
          </ul>
        </div>
        <div className="basis-1/5 flex justify-between gap-2">
          <div>4</div>
          <div>5</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

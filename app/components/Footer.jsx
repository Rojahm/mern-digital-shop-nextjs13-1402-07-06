import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="mt-14 mb-5">
      <div className="flex justify-between items-center gap-5 w-[95%] my-0 mx-auto bg-stone-100 text-stone-500 p-5 rounded-md">
        <div className="basis-1/3">
          <Link href={"/"} className="p-3 flex flex-col items-center">
            <Image src={"/trans-icon.png"} width={100} height={100} />
            <p className="mt-2 text-center sm:text-md md:text-sm lg:text-md px-14">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از
            </p>
          </Link>
        </div>
        <div className="basis-1/3 flex gap-7">
          <div>
            <h3 className="text-lg mb-4">دسترسی سریع</h3>
            <ul className="list-disc pr-4">
              <li className="sm:text-md md:text-sm lg:text-md">درباره ما</li>
              <li className="sm:text-md md:text-sm lg:text-md">وبلاگ</li>
              <li className="sm:text-md md:text-sm lg:text-md">حریم خصوصی</li>
              <li className="sm:text-md md:text-sm lg:text-md">تماس با ما</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg mb-4">راهنمای خرید</h3>
            <ul className="list-disc pr-4">
              <li className="sm:text-md md:text-sm lg:text-md">
                سوالات متداول
              </li>
              <li className="sm:text-md md:text-sm lg:text-md">
                چگونه خرید کنم؟
              </li>
              <li className="sm:text-md md:text-sm lg:text-md">
                قوانین استفاده از محصولات
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/3 flex justify-center self-center gap-2">
          <div>
            <Image src={"/images/Licenses/1.png"} width={100} height={100} />
          </div>
          <div>
            <Image src={"/images/Licenses/2.png"} width={100} height={100} />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

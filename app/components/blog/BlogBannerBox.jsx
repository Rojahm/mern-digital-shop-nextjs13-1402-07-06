import Image from "next/image";
import Link from "next/link";

function BlogBannerBox() {
  return (
    <article className="p-4 slider-item bg-stone-100 w-72 transition-all ease-in-out duration-300 shadow-[0px_1px_10px_rgba(0,0,0,0.15)] hover:shadow-[0px_1px_10px_rgba(0,0,0,0.25)] rounded-lg sm:h-[28rem] md:h-[26rem] lg:h-[25rem] min-w-[238px] hover:-translate-y-4">
      <Link href={"/"}>
        <Image
          src={"/images/product/ganj.jpg"}
          width={260}
          height={180}
          alt="cover of the book ganj"
          className="rounded-lg my-0 mx-auto"
        />
        <h3 className="font-bold text-stone-600 text-md mt-4">
          کتاب گنج - نوشته جلال آل احمد کتاب گنج - نوشته جلال آل احمد
        </h3>
      </Link>
      <p className="text-stone-500 mt-3 sm:text-md md:text-sm lg:text-md line-clamp-6 md:line-clamp-6 lg:line-clamp-5">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی پیوسته اهل دنیای موجود
        طر
      </p>
      {/* keywords */}
      <div className="">
        <hr className="my-4" />
        <div className="flex justify-between">
          <Link href={"/"}>
            <span className="bg-stone-300/60 ml-1 text-xs rounded-lg py-1 px-2 text-stone-700">
              1402/07/09
            </span>
          </Link>
          <Link href={"/"}>
            <span className="bg-stone-300/60 ml-1 text-xs rounded-lg py-1 px-2 text-stone-700">
              4 دیدگاه
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogBannerBox;

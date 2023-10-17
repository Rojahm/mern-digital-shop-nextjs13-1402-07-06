import Link from "next/link";
import BlogBannerBox from "./ProductBannerBox";

function ProductBanner() {
  return (
    <section className="container">
      <div className="flex justify-between mb-4">
        <h3 className="text-stone-500 font-bold text-lg">آخرین مقالات</h3>
        <Link href={"/blog"}>
          <button className="bg-stone-500 hover:bg-stone-400 text-stone-100 hover:text-stone-800 transition-all ease-in-out duration-300 py-2 px-3 rounded shadow-md hover:shadow-lg font-bold">
            برو به بلاگ
          </button>
        </Link>
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-0 mx-auto w-fit">
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
        <BlogBannerBox />
      </div>
    </section>
  );
}

export default ProductBanner;

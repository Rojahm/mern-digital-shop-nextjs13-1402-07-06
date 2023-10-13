import CategoryBanner from "./components/CategoryBanner";
import MiddleBanner from "./components/MiddleBanner";
import MainSlider from "./components/MainSlider";
import ProductSlider from "./components/ProductSlider";
import GraficProductSlider from "./components/GraficProductSlider";
import BlogBanner from "./blog/BlogBanner";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container">
      <MainSlider />
      <ProductSlider title={"محصولات"} link={"/products"} />
      <MiddleBanner />
      <ProductSlider title={"کتاب ها"} link={"/books"} />
      <CategoryBanner />
      <GraficProductSlider title={"فایل های گرافیکی"} link={"/files"} />
      <BlogBanner />
    </main>
  );
}

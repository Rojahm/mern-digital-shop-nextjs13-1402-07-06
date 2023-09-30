import CategoryBanner from "./components/banner/CategoryBanner";
import MiddleBanner from "./components/banner/MiddleBanner";
import MainSlider from "./components/slider/MainSlider";
import ProductSlider from "./components/slider/productSlider/ProductSlider";
import GraficProductSlider from "./components/slider/graficSlider/GraficProductSlider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container">
      <MainSlider />
      <ProductSlider title={"محصولات"} link={"/products"} />
      <MiddleBanner />
      <ProductSlider title={"کتاب ها"} link={"/books"} />
      <CategoryBanner />
      <GraficProductSlider title={"فایل های گرافیکی"} link={"/files"} />
      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

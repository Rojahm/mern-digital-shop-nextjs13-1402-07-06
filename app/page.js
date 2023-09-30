import MiddleBanner from "./components/banner/MiddleBanner";
import MainSlider from "./components/slider/MainSlider";
import ProductSlider from "./components/slider/ProductSlider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container">
      <MainSlider />
      <ProductSlider title={"محصولات"} link={"/products"} />
      <MiddleBanner />
      <ProductSlider title={"کتاب ها"} link={"/books"} />

      <br />
      <br />
      <br />
      <br />
    </main>
  );
}

import MainSlider from "./components/slider/MainSlider";
import ProductSlider from "./components/slider/ProductSlider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between container">
      <MainSlider />
      <ProductSlider />
    </main>
  );
}

import ProductBox from "./ProductBox";

function ProductSlider() {
  return (
    <section className="flex flex-col my-10 w-screen overflow-hidden bg-lime-600 py-5 px-14 h-96">
      <header>
        <h2 className="text-stone-100 font-semibold text-lg">| محصولات</h2>
      </header>
      <div className="flex">
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
    </section>
  );
}

export default ProductSlider;

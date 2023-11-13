const BannerMiddleAll = () => {
  return (
    <div>
      <section className="flex justify-between">
        <h1>بنر های میانی</h1>
        <div className="flex gap-3">
          <button className="bg-emerald-600 py-1 px-2 rounded-md text-stone-200 hover:text-emerald-600 hover:bg-emerald-200 transition-all duration-100 ease-in-out">
            همه
          </button>
          <button className="bg-emerald-600 py-1 px-2 rounded-md text-stone-200 hover:text-emerald-600 hover:bg-emerald-200 transition-all duration-100 ease-in-out">
            جدید ➕
          </button>
        </div>
      </section>
    </div>
  );
};

export default BannerMiddleAll;

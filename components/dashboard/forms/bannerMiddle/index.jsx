import { useState, useEffect } from "react";
//Custom components
import BannerMiddleNew from "./BannerMiddleNew";
import BannerMiddleAll from "./BannerMiddleAll";

const BannerMiddle = () => {
  const [details, setDetails] = useState(<BannerMiddleAll />);
  const [contentName, setContetName] = useState("banner-middle-all");
  useEffect(() => {
    if (contentName === "banner-middle-all") {
      setDetails(<BannerMiddleAll />);
    } else if (contentName === "banner-middle-new") {
      setDetails(<BannerMiddleNew />);
    }
  }, [contentName]);
  return (
    <div>
      <section className="flex justify-between">
        <h1>بنر های میانی</h1>
        <div className="flex gap-3">
          <button
            onClick={() => setContetName("banner-middle-all")}
            className="bg-emerald-600 py-1 px-2 rounded-md text-stone-200 hover:text-emerald-600 hover:bg-emerald-200 transition-all duration-100 ease-in-out"
          >
            همه
          </button>
          <button
            onClick={() => setContetName("banner-middle-new")}
            className="bg-emerald-600 py-1 px-2 rounded-md text-stone-200 hover:text-emerald-600 hover:bg-emerald-200 transition-all duration-100 ease-in-out"
          >
            جدید ➕
          </button>
        </div>
      </section>
      <section>{details}</section>
    </div>
  );
};

export default BannerMiddle;

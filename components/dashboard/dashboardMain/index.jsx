"use client";
import { useState, useEffect } from "react";
import DashboardCtrl from "../dashboard-ctrl";
import BannerMiddleAll from "../forms/bannerMiddle";
import SlidersAll from "../forms/sliders";

function DashboardMain() {
  const [content, setContent] = useState("banner-middle");
  const [details, setDetails] = useState(<BannerMiddleAll />);
  useEffect(() => {
    if (content === "banner-middle") {
      setDetails(<BannerMiddleAll />);
    } else if (content === "slider-main") {
      setDetails(<SlidersAll />);
    }
  }, [content]);

  return (
    <div className="container flex justify-between gap-4">
      <DashboardCtrl setContent={setContent} />
      <div className="w-full">{details}</div>
    </div>
  );
}

export default DashboardMain;

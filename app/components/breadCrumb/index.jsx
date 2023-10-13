import Link from "next/link";
//ui icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const BreadCrumb = () => {
  return (
    <div className="flex text-xs justify-start items-center mb-5">
      <Link href={"/"} className="text-lime-600 font-bold">
        خانه
      </Link>

      <MdKeyboardArrowLeft className="text-lime-600" />
      <Link href={"/"} className="text-lime-600 font-bold">
        بلاگ
      </Link>
      <MdKeyboardArrowLeft className="text-lime-600" />

      <Link href={"/"} className="text-stone-400">
        چرا next.js بهتر از همه فریمورک های جاوا اسکریپ دیگر است؟
      </Link>
    </div>
  );
};

export default BreadCrumb;

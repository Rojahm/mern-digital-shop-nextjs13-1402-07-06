import Link from "next/link";
//ui icons
import { MdKeyboardArrowLeft } from "react-icons/md";

const BreadCrumb = ({ page, pageLink, pageTitle }) => {
  return (
    <div className="flex text-xs justify-start items-center mb-5">
      <Link href={"/"} className="text-lime-600 font-bold">
        خانه
      </Link>

      <MdKeyboardArrowLeft className="text-lime-600" />

      <Link href={pageLink} className="text-lime-600 font-bold">
        {page}
      </Link>

      <MdKeyboardArrowLeft className="text-lime-600" />

      <div className="text-stone-400">{pageTitle}</div>
    </div>
  );
};

export default BreadCrumb;

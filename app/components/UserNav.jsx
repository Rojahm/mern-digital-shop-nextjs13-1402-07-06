import Link from "next/link";
//ui & icons
import { CiUser } from "react-icons/ci";
import { BsCart2 } from "react-icons/bs";

function UserNav() {
  return (
    <div className="flex gap-3">
      <div className="p-3 bg-stone-200 border border-stone-200 hover:border-stone-300 hover:cursor-pointer shadow hover:shadow-md rounded-md my-0 mt-auto">
        <CiUser size={"25px"} className="" />
      </div>
      <div className="basis-3/4 p-3 flex justify-center gap-2 bg-lime-600 border border-lime-600 rounded-md border shadow-lg">
        <button className="w-6 bg-lime-300/30 hover:bg-lime-300/50 rounded-full text-stone-100 hover:shadow hover:cursor-pointer hover:border-lime-700">
          0
        </button>
        <Link href={"/cart"} className="text-stone-100 w-20 text-center">
          سبد خرید
        </Link>
        <button className="bg-stone-100/80 hover:bg-stone-200/80 rounded hover:shadow hover:cursor-pointer hover:border-lime-700">
          <BsCart2 size={"20px"} className="text-lime-900 w-7 h-7 p-1" />
        </button>
      </div>
    </div>
  );
}

export default UserNav;

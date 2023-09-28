import Link from "next/link";

function UserNav() {
  return (
    <div className="flex gap-3">
      <div className="basis-1/4 p-3 bg-stone-200 border border-stone-200 hover:border-stone-300 hover:cursor-pointer shadow hover:shadow-md rounded-md text-center">
        👤
      </div>
      <div className="basis-3/4 p-3 flex justify-center gap-2 bg-lime-600 border border-lime-600 rounded-md border shadow-md ">
        <button className="w-6 bg-lime-300/30 hover:bg-lime-300/50 rounded-full text-stone-100 hover:shadow hover:cursor-pointer hover:border-lime-700">
          0
        </button>
        <Link href={"/cart"} className="text-stone-100 w-20 text-center">
          سبد خرید
        </Link>
        <button className="bg-lime-300/50 hover:bg-lime-300/70 w-7 rounded hover:shadow hover:cursor-pointer hover:border-lime-700">
          🛒
        </button>
      </div>
    </div>
  );
}

export default UserNav;

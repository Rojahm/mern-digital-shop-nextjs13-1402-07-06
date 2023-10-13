import Link from "next/link";

function Nav() {
  return (
    <div className="flex gap-3 w-full">
      <div className="menu-btn">صفحه اصلی</div>
      <div className="menu-btn">بازی</div>
      <div className="menu-btn">طرح</div>
      <div className="menu-btn">
        <Link href={"/blog"}>بلاگ</Link>
      </div>
    </div>
  );
}

export default Nav;

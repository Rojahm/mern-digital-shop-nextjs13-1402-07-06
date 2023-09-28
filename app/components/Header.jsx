"use client";
import Link from "next/link";
//ui and fonts

//components
import Icon from "./Icon";
import Nav from "./Nav";
import Search from "./Search";
import UserNav from "./UserNav";

function Header() {
  return (
    <div className="Header flex justify-center mb-10">
      <Icon />
      <div className="basis-2/4 flex flex-col justify-end">
        <Nav />
        <Search />
      </div>
      <div className="basis-1/4 flex flex-col justify-end mx-3 ml-6">
        <div className="self-end mb-3">444540 📞</div>
        <div className="self-end mb-3">shop@lssi.ir ✉</div>
        <UserNav />
      </div>
    </div>
  );
}

export default Header;

"use client";
import { React, useState } from "react";
//components
import Contact from "./Contact";
import Icon from "./Icon";
import Nav from "./Nav";
import Search from "./Search";
import UserNav from "./UserNav";
import SocialNav from "./SocialNav";

function Header() {
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const showSocial = () => {
    setShowSocialMenu(true);
    console.log(showSocialMenu);
  };
  const hideSocial = () => {
    setShowSocialMenu(false);
    console.log(showSocialMenu);
  };
  return (
    <header className="mb-10">
      <div className="Header flex justify-between mt-2 gap-2 z-40">
        <Icon onShow={showSocial} onHide={hideSocial} />
        <div className="flex flex-col justify-end items-start w-3/5">
          <Nav />
          <Search />
        </div>
        <div className="flex flex-col justify-end mx-3 ml-6">
          <Contact />
          <UserNav />
        </div>
      </div>
      <SocialNav
        onShow={showSocial}
        onHide={hideSocial}
        showSocialMenu={showSocialMenu}
      />
    </header>
  );
}

export default Header;

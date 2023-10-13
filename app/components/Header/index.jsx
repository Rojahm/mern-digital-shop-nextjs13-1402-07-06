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
  };
  const hideSocial = () => {
    setShowSocialMenu(false);
  };
  return (
    <header className="mb-12 relative">
      <div className="flex justify-between items-end mt-2 gap-2 relative">
        <Icon onShow={showSocial} onHide={hideSocial} />
        <div className="flex flex-col items-start justify-end w-3/5">
          <Nav />
          <Search />
        </div>
        <div className="flex flex-col ml-6">
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

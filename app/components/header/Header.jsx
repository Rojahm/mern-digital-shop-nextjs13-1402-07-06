//components
import Contact from "./Contact";
import Icon from "./Icon";
import Nav from "./Nav";
import Search from "./Search";
import UserNav from "./UserNav";

function Header() {
  return (
    <div className="Header flex justify-center mb-10 mt-2 gap-2">
      <Icon />
      <div className="flex flex-col justify-end items-start w-3/5">
        <Nav />
        <Search />
      </div>
      <div className="flex flex-col justify-end mx-3 ml-6">
        <Contact />
        <UserNav />
      </div>
    </div>
  );
}

export default Header;

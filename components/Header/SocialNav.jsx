import Link from "next/link";
//ui
import { PiTelegramLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

function SocialNav({ onShow, onHide, showSocialMenu }) {
  return (
    <div
      className={
        showSocialMenu === true
          ? "mr-7 w-[4rem] absolute z-20 -bottom-9 right-0 left-0 flex justify-evenly gap-2 transition-all ease-in-out duration-500"
          : "mr-7 w-[4rem] absolute z-20 bottom-12 right-0 left-0 flex justify-evenly gap-2 transition-all ease-in-out duration-500"
      }
      onMouseEnter={onShow}
      onMouseLeave={onHide}
    >
      <Link href={"/"}>
        <PiTelegramLogo
          size={"30px"}
          className="text-lime-800 shadow hover:shadow-md p-1"
        />
      </Link>
      <Link href={"/"}>
        <PiYoutubeLogo
          size={"30px"}
          className="text-lime-800 shadow hover:shadow-md p-1"
        />
      </Link>
      <Link href={"/"}>
        <PiInstagramLogo
          size={"30px"}
          className="text-lime-800 shadow hover:shadow-md p-1"
        />
      </Link>
    </div>
  );
}

export default SocialNav;

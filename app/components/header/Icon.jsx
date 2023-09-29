import Link from "next/link";
import Image from "next/image";
//ui
import { PiTelegramLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

function Icon({ onShow, onHide, showSocialMenu }) {
  return (
    <div className="relative flex flex-col h-48">
      <Link
        href={"/"}
        onMouseEnter={onShow}
        onMouseLeave={onHide}
        className="bg-stone-200 z-40 shadow-md logo rounded-lg p-5 hover:shadow-lg my-0 mx-auto"
      >
        <Image
          src={"/trans-icon.png"}
          width={100}
          height={100}
          alt="shop's icon"
        />
      </Link>
      <div
        className={
          showSocialMenu === true
            ? "absolute z-20 bottom-0 right-0 left-0 flex justify-evenly gap-2 transition-all ease-in-out duration-500"
            : "absolute z-20 bottom-20 right-0 left-0 flex justify-evenly gap-2 transition-all ease-in-out duration-500"
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
    </div>
  );
}

export default Icon;

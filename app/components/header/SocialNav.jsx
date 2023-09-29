import Link from "next/link";
//ui
import { PiTelegramLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

function SocialNav({ onShow, onHide, showSocialMenu }) {
  return (
    <div
      className={showSocialMenu === true ? "SocialNav active" : "SocialNav"}
      onMouseEnter={onShow}
      onMouseLeave={onHide}
    >
      <div className="flex justify-evenly gap-2">
        <Link href={"/"}>
          <PiTelegramLogo size={"24px"} className="text-lime-800" />
        </Link>
        <Link href={"/"}>
          <PiYoutubeLogo size={"24px"} className="text-lime-800" />
        </Link>
        <Link href={"/"}>
          <PiInstagramLogo size={"24px"} className="text-lime-800" />
        </Link>
      </div>
    </div>
  );
}

export default SocialNav;

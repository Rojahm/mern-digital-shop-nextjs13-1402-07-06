//ui
import { PiTelegramLogo, PiYoutubeLogo, PiInstagramLogo } from "react-icons/pi";

function SocialNav({ onShow, onHide, showSocialMenu }) {
  return (
    <div
      className={
        showSocialMenu === true
          ? " w-[7.5rem] z-20 absolute top-44 transition-all duration-300 ease-in-out"
          : " w-[7.5rem] z-20 absolute top-36 transition-all duration-300 ease-in-out"
      }
      onMouseEnter={onShow}
      onMouseLeave={onHide}
    >
      <ul className="flex justify-evenly gap-2">
        <li>
          <PiTelegramLogo size={"24px"} className="text-lime-800" />
        </li>
        <li>
          <PiYoutubeLogo size={"24px"} className="text-lime-800" />
        </li>
        <li>
          <PiInstagramLogo size={"24px"} className="text-lime-800" />
        </li>
      </ul>
    </div>
  );
}

export default SocialNav;

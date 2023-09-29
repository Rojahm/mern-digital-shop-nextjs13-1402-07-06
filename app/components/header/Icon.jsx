import Link from "next/link";
import Image from "next/image";

function Icon({ onShow, onHide }) {
  return (
    <div className="self-end relative">
      <Link href={"/"} onMouseEnter={onShow} onMouseLeave={onHide}>
        <Image
          src={"/trans-icon.png"}
          width={140}
          height={140}
          alt="shop's icon"
          className="z-40 shadow-md rounded-lg p-5 hover:shadow-lg my-0 mx-auto"
        />
      </Link>
    </div>
  );
}

export default Icon;

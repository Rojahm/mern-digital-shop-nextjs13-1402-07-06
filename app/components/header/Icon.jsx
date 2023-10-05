import Link from "next/link";
import Image from "next/image";
//ui

function Icon({ onShow, onHide }) {
  return (
    <div className=" flex flex-col">
      <Link
        href={"/"}
        onMouseEnter={onShow}
        onMouseLeave={onHide}
        className="bg-stone-200 z-40 shadow-md logo rounded-lg p-5 hover:shadow-lg my-0 mx-auto w-auto"
      >
        <Image
          src={"/trans-icon.png"}
          width={100}
          height={100}
          alt="shop's icon"
        />
      </Link>
    </div>
  );
}

export default Icon;

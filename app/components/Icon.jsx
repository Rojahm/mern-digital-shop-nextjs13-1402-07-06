import Link from "next/link";
import Image from "next/image";

function Icon() {
  return (
    <div className="basis-1/4">
      <Link href={"/"}>
        <Image
          src={"/trans-icon.png"}
          width={140}
          height={140}
          alt="shop's icon"
          className="shadow-md p-5 hover:shadow-lg my-0 mx-auto"
        />
      </Link>
    </div>
  );
}

export default Icon;

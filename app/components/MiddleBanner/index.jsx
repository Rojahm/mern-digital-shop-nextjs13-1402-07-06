import Image from "next/image";
import Link from "next/link";

function MiddleBanner() {
  return (
    <section className="container mx-auto flex justify-evenly items-center">
      <article>
        <Link href={"/"}>
          <Image
            src={"/images/banner/1.jpg"}
            width={600}
            height={100}
            className="rounded-md shadow-md object-cover md:object-scale-down"
            alt="be the best of you"
          />
        </Link>
      </article>
      <article>
        <Link href={"/"}>
          <Image
            src={"/images/banner/2.jpg"}
            width={600}
            height={100}
            className="rounded-md shadow-md"
            alt="iran history"
          />
        </Link>
      </article>
    </section>
  );
}

export default MiddleBanner;

import Image from "next/image";
import Link from "next/link";

function CategoryBox() {
  return (
    <article className="border bg-stone-300 rounded-lg flex justify-between items-center mb-4 p-3 w-72">
      <Link href={"/"} className="flex flex-col gap-2 pr-3">
        <h3 className="text-stone-900 text-md md:text-lg lg:text-xl">box</h3>
        <h4 className="text-stone-600 text-base sm:text-sm md:text-md">box</h4>
      </Link>
      <Link href={"/"} className="w-16">
        <Image
          src={"/images/categories/calculator-min.png"}
          width={60}
          height={60}
        />
      </Link>
    </article>
  );
}

export default CategoryBox;

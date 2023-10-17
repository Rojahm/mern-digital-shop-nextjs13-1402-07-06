import Image from "next/image";
import Link from "next/link";

function CategoryBox() {
  return (
    <Link href={"/"}>
      <article className="border bg-stone-300 hover:bg-stone-200 transition-all ease-in-out duration-300 rounded-lg flex justify-between items-center mb-4 p-3 sm:w-52 md:w-56 lg:w-60 xl:w-72">
        <div className="flex flex-col gap-2 pr-3">
          <h3 className="text-stone-900 text-md md:text-lg lg:text-xl">box</h3>
          <h4 className="text-stone-600 text-base sm:text-sm md:text-md">
            box
          </h4>
        </div>
        <div className="w-16">
          <Image
            src={"/images/categories/calculator-min.png"}
            width={60}
            height={60}
            alt="calculator"
          />
        </div>
      </article>
    </Link>
  );
}

export default CategoryBox;

//ui & icon
import { PiMagnifyingGlass } from "react-icons/pi";

const ProductSearch = () => {
  return (
    <form className="relative rounded-md shadow-sm">
      <input
        type="text"
        name="blogQuery"
        id="blogQuery"
        className="block w-full rounded-md border-0 py-1.5 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-lime-600/50 focuse:outline focus:outline-4 focus:outline-lime-500 sm:text-sm sm:leading-6"
        placeholder="جستجو در وبلاگ ..."
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3">
        <button className="text-gray-500 sm:text-sm">
          <PiMagnifyingGlass size={"20px"} className="text-lime-600" />
        </button>
      </div>
    </form>
  );
};

export default ProductSearch;

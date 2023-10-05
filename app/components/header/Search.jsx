//ui & icon
import { PiMagnifyingGlass } from "react-icons/pi";

function Search() {
  return (
    <div className="relative mt-5 w-full">
      <form className="">
        <input
          className="block w-full py-1.5 pr-3 rounded focus:ring-2 focus:ring-inset focus:ring-lime-600/50 focuse:outline focus:outline-4 focus:outline-lime-500"
          type="text"
          name="searchQuery"
          id="searchQuery"
          placeholder="جستجو بین محصولات..."
        />
        <button className="text-lime-900 absolute inset-y-0 left-0">
          <PiMagnifyingGlass size={"28px"} className="ml-3" />
        </button>
      </form>
    </div>
  );
}

export default Search;

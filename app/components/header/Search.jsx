//ui & icon
import { PiMagnifyingGlass } from "react-icons/pi";

function Search() {
  return (
    <div className="mt-5 w-full">
      <form className="search-form flex">
        <input
          className="bg-stone-200 rounded-md px-3 w-4/5"
          type="text"
          name="search-query"
          placeholder="جستجو بین محصولات..."
        />
        <button className="text-lime-900 mr-auto">
          <PiMagnifyingGlass size={"28px"} className="ml-3" />
        </button>
      </form>
    </div>
  );
}

export default Search;

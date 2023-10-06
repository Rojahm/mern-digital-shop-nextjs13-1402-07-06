// ui
import { FaRegNewspaper } from "react-icons/fa";

const NewsLetter = () => {
  return (
    <div className="flex flex-col my-5 justify-evenly bg-stone-100/50 p-4 lg:p-5 rounded-xl shadow-lg">
      <h3 className="text-lime-600 mb-3">شرکت در خبرنامه</h3>
      <form className="flex relative justify-center items-center">
        <input
          type="text"
          id="newsletter"
          name="newsletter"
          className="block w-full rounded py-1.5 pr-3"
        />
        <button className="absolute inset-y-0 left-0 ml-3">
          <FaRegNewspaper size={20} className="text-lime-600" />
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;

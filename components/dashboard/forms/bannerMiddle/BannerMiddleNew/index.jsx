const BannerMiddleNew = () => {
  return (
    <div className="flex flex-col gap-6 mt-5">
      <h1>بنر میانی جدید</h1>
      <form className="flex flex-col gap-4">
        <div className="flex justify-between gap-2 items-center">
          <label for="image-name" className="w-1/5 text-center">
            نام عکس:
          </label>
          <input
            type="text"
            id="image-name"
            autoFocus
            className="p-2 rounded-md w-4/5 border-2 border-zinc-300 focus-visible:outline-orange-500"
          />
        </div>
        <div className="flex justify-between gap-2 items-center">
          <label for="image-name" className="w-1/5 text-center">
            alt عکس:
          </label>
          <input
            type="text"
            id="image-name"
            className="p-2 rounded-md w-4/5 border-2 border-zinc-300 focus-visible:outline-orange-500"
          />
        </div>
        <div className="flex justify-between gap-2 items-center">
          <label for="image-name" className="w-1/5 text-center">
            لینک عکس:
          </label>
          <input
            type="text"
            id="image-name"
            className="p-2 rounded-md w-4/5 border-2 border-zinc-300 focus-visible:outline-orange-500"
          />
        </div>
        <div className="relative inline-flex items-center cursor-pointer">
          <label for="image-mode" className="w-1/5 text-center">
            روشن / خاموش :
          </label>
          <input
            type="checkbox"
            id="image-mode"
            className="sr-only peer p-2 rounded-md w-4/5 border-2 border-zinc-300 focus-visible:outline-orange-500"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
        </div>

        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            روشن / خاموش :
          </span>
        </label>
      </form>
    </div>
  );
};

export default BannerMiddleNew;

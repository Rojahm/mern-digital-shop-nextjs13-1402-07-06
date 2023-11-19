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
        <div className="flex justify-between gap-2 items-center">
          <label for="image-name" className="w-1/5 text-center">
            روشن / خاموش :
          </label>
          <input
            type="text"
            id="image-name"
            className="p-2 rounded-md w-4/5 border-2 border-zinc-300 focus-visible:outline-orange-500"
          />
        </div>
      </form>
    </div>
  );
};

export default BannerMiddleNew;

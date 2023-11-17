const BannerMiddleNew = () => {
  return (
    <div>
      <h1>Create new Middle Banner</h1>
      <form className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label for="image-name">photo name</label>
          <input type="text" id="image-name" />
        </div>
        <div className="flex gap-4">
          <label for="image-name">photo name</label>
          <input type="text" id="image-name" />
        </div>
      </form>
    </div>
  );
};

export default BannerMiddleNew;

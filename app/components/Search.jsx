function Search() {
  return (
    <div className="mt-5">
      <form className="search-form">
        <input
          className="basis-10/12 bg-stone-200 rounded px-3"
          type="text"
          name="search-query"
          placeholder="جستجو بین محصولات..."
        />
        <button className="basis-2/12">🔍</button>
      </form>
    </div>
  );
}

export default Search;

import React from "react";
import { useSearch, useTodos } from "./context/TodoContext";

const Search = () => {
  const { search, setSearch, handleSearch } = useSearch();
  return (
    <form className="flex " onSubmit={handleSearch}>
      <input
        type="text"
        className="outline-none bg-transparent border border-white p-2 rounded-l-md"
        required
        placeholder="Search your todos"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className=" bg-white text-black block px-3 rounded-r-md">
        Search
      </button>
    </form>
  );
};

export default Search;

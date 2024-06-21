import { SearchBar } from "../styles/Styles.modules";

const Search = () => {
  return (
    <SearchBar>
      <input type="search" placeholder="Search 10000 of Movies...." />
      <button>Search</button>
    </SearchBar>
  );
};

export default Search;

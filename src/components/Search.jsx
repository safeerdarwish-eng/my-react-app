
const Search = ({ searchTerm, setsearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="/search.svg" alt="search" className="h-5 w-5" /> 

        <input 
          type="text"
          placeholder="search the best movies"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
          className="text-white bg-transparent outline-none w-full pl-3"
        />
      </div>
    </div>
  );
};

export default Search;

import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";

function SearchArea (){
    return (
        <div className="SearchArea">
            <h1>How can we help you today?</h1>
            <SearchOptions />
            <SearchBar />
        </div>
    )
}

export default SearchArea;

import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";

function SearchArea() {
    
    return (
        <div className="SearchArea">
            <h1>How can we help you today?</h1>

            <SearchBar /> 
            <SearchOptions />
            
        </div>
    )
}

export default SearchArea;
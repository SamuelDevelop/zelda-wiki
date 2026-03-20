import SearchOption from "./SearchOption";

function SearchOptions(){

    return (
        <div className="SearchOptions">
            <SearchOption 
                path="/characters"
                text="Find someone Character"
                onClick={()=>{}}
            />
            <SearchOption 
                path="/monsters"
                text="Find someone Monster"
                onClick={()=>{}}
            />
            <SearchOption 
                path="/bosses"
                text="Find someone Boss"
                onClick={()=>{}}
            />
            <SearchOption 
                path="/games"
                text="Find something Zelda Game"
                onClick={()=>{}}
            />
        </div>
    )
}

export default SearchOptions;
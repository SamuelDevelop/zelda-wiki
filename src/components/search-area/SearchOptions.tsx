import SearchOption from "./SearchOption";
import { useNavigate } from "react-router-dom";

function SearchOptions(){
    const nav = useNavigate();

    return (
        <div className="SearchOptions">
            <SearchOption 
                path="/characters"
                text="Characters List"
                onClick={()=>{
                    nav("/characters");
                }}
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
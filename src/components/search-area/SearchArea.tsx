import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";

function SearchArea() {

    const [pathChosen, setPathChosen] = useState<string | null>(null);
    const [dataChosen, setDataChosen] = useState<string | null>(null);

    const pathChoose = (path: string) => {
        setPathChosen(path);
    }

    const dataChoose = (data: string) => {
        setDataChosen(data);
    }

    return (
        <div className="SearchArea">
            <h1>How can we help you today?</h1>

            {
                pathChosen ?
                <SearchBar /> :
                <SearchOptions />
            }

        </div>
    )
}

export default SearchArea;
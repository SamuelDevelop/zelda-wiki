import SearchOption from "./SearchOption";
import { useNavigate } from "react-router-dom";
import styles from "./SearchArea.module.css";

function SearchOptions(){
    const nav = useNavigate();

    return (
        <div className={styles.searchOptions}>
            <SearchOption 
                path="/characters"
                text="Characters"
                onClick={()=>{
                    nav("/characters");
                }}
            />
            <SearchOption 
                path="/monsters"
                text="Monsters"
                onClick={()=>{}}
            />
            <SearchOption 
                path="/bosses"
                text="Bosses"
                onClick={()=>{}}
            />
            <SearchOption 
                path="/games"
                text="Games"
                onClick={()=>{}}
            />
        </div>
    )
}

export default SearchOptions;
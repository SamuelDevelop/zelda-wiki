import SearchBar from "./SearchBar";
import SearchOptions from "./SearchOptions";
import styles from "./SearchArea.module.css";

function SearchArea() {
    
    return (
        <div className={styles.searchArea}>
            <h1>How can we help you today?</h1>

            <SearchBar /> 
            <SearchOptions />
        </div>
    )
}

export default SearchArea;
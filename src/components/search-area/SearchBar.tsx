import styles from "./SearchArea.module.css";

function SearchBar(){
    return (
        <input
            type="text"
            placeholder="type what you want to search.."
            className={styles.searchBar}
        >
        </input>
    )
}

export default SearchBar;
interface OptionProps {
    text: string;
    path: string;    
    onClick: () => void;
}

import styles from "./SearchArea.module.css";

function SearchOption({text, path, onClick} : OptionProps){
    return (
        <div className={`${styles.searchOption} ${path}`} onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

export default SearchOption;
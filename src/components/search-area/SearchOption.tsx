interface OptionProps {
    text: string;
    path: string;    
    onClick: () => void;
}

import { IoGameController } from "react-icons/io5";
import styles from "./SearchArea.module.css";

function SearchOption({text, path, onClick} : OptionProps){
    return (
        <div className={`${styles.searchOption} ${path}`} onClick={onClick}>
            <p><IoGameController /></p>
            <p>{text}</p>
        </div>
    )
}

export default SearchOption;
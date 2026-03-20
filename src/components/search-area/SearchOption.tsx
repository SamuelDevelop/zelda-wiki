interface OptionProps {
    text: string;
    path: string;    
    onClick: () => void;
}

function SearchOption({text, path, onClick} : OptionProps){
    return (
        <div className={`SearchOption ${path}`} onClick={onClick}>
            <p>{text}</p>
        </div>
    )
}

export default SearchOption;
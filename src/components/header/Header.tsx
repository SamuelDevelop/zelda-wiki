import styles from "./Header.module.css";

function Header(){
    return (
        <header className={styles.header}>
            <p>welcome to</p>
            <h1>Zelda's Wiki</h1>
        </header>
    )
}

export default Header;
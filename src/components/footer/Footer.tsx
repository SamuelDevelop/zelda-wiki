import styles from "./Footer.module.css"

function Footer(){
    return (
        <footer className={styles.footer}>
            <p>by @<a href="https://samueldevelop.github.io">SamuelDevelop</a></p>
            <p>with api: <a href="https://docs.zelda.fanapis.com/"> Zelda FanApi's</a></p>
        </footer>
    )
}

export default Footer;
import styles from "./Footer.module.css"
import Logo from "../../../public/Logo/LogoMain.png"
import Linkedin from "../../../public/Logo/linkedin.png"
import Github from "../../../public/Logo/github.png"
import Gmail from "../../../public/Logo/gmail.png"


export const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={styles.social}>
                <img src={Github} alt="link github" />
                <img src={Linkedin} alt="link linkedin" />
                <img src={Gmail} alt="link linkedin" />

            </div>
            <div className={styles.logoContainer}>
                <img src={Logo} className={styles.logo} alt="Logo AluraFlix" />
            </div>

            <div className={styles.info}>
                <h3>Desarrollado por Agustin Gomez</h3>
                <p>2024</p>
            </div>
        </footer>
    )
}
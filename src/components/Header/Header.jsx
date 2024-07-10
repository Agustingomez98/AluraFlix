import styles from "./Header.module.css"
import Logo from "../../../public/Logo/LogoMain.png"
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { HeaderLink } from './../HeaderLinks/HeaderLink';
import menuIcon from "../../../public/Logo/menu-hamburguesa.png"
import { GlobalContext } from './../../contexts/contexts.jsx';

export const Header = () => {

    const {openMenu,setOpenMenu} = useContext(GlobalContext)

    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const handleLinkClick = () => {
        setOpenMenu(false)
        console.log(openMenu)
    }
    
    return (
        <header className={styles.header}>
            <Link to="/">
                <img src={Logo} alt="Logo" className={styles.log} />
            </Link>

            <img src={menuIcon} alt="menu icon" className={styles.menuIcon} onClick={handleMenu}></img>

            <nav  className={openMenu ? styles.open : styles.nav}> 
                <HeaderLink url="./" onClick={(handleLinkClick)} >
                HOME
                </HeaderLink>
                <HeaderLink url="./newVideo" onClick={handleLinkClick} >
                AGREGAR VIDEO
                </HeaderLink>
            </nav>
        </header>
    )
}
import { Link, NavLink } from "react-router-dom"
import styles from "./HeaderLink.module.css"

export const HeaderLink = ({url,children,onClick}) => {

    return (
        <NavLink 
        to={url} 
        className={({isActive})=>
        isActive ? `${styles.link} ${styles.activeLink}` : styles.link} 
        onClick={onClick}>
            {children}
        </NavLink>
    )
}
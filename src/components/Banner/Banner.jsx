import styles from "./Banner.module.css"
import { GlobalContext } from './../../contexts/contexts';
import { useContext } from "react";
import { Category } from './../Category/Category';

export const Banner = ({ bannerInfo }) => {

    const { categories } = useContext(GlobalContext)

    if (!bannerInfo || !bannerInfo.title) {
        return null; // o algún componente de fallback
    }

    const { title, category, description, photo, link } = bannerInfo;

    const getColor = (categoryName) => {
        const category = categories.find(cat => cat.name === categoryName);
        console.log("color",);
        return category ? category.color : "";
    }

    const color = getColor(category);
    console.log("color", color);

    return (
        <section className={styles.banner} id="banner">
            <div className={styles.card}>
                <h1 style={{ backgroundColor: color }}>{category}</h1>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            <iframe
                className={styles.iframe}
                src={link}
                alt="video descripcion"
                title="Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
            </iframe>
        </section>
    )
}

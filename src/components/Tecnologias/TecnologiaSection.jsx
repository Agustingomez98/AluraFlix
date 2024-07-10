import { useContext } from "react";
import styles from "./Tecnologia.module.css";
import { GlobalContext } from "../../contexts/contexts.jsx";
import { Card } from "../../components/Card/Card.jsx";

export const TecnologiaSection = () => {

    const { categories,videos} = useContext(GlobalContext);

    return (<div className={styles.main}>
        {
            categories.map((category) => (
                <section className={styles.section} key={category.name}>
                    <h1 className={styles.titulo} style={{ backgroundColor: category.color }}>{category.name}</h1>
                    <div className={styles.videoContainer}>
                        {
                            videos.filter((video) => video.category == category.name)
                                .map((video) => (<Card key={video.id} video={video} />))
                        }
                    </div>
                </section>
            ))
        }
        {console.log(videos)}
    </div>)
}
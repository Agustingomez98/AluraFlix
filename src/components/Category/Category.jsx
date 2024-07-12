import styles from "./Category.module.css";
import { Card } from './../Card/Card';

export const Category = ({ cards, category, handlerClickCard }) => {

    const { name, color } = category;


    return (<section className={styles.categoryContainer}>
        <h1 className={styles.categoryTitle} style={{ backgroundColor: color }}>{name}</h1>
        <div className={styles.cardContainerWrapper}>
            <div className={styles.cardContainer}>
                {cards.map((card) => (
                    <Card
                        datos={card}
                        key={card.id}
                        handlerClickCard={handlerClickCard}
                    />
                ))}
            </div>
        </div>
    </section>)
}
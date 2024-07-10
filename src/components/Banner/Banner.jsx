import styles from "./Banner.module.css"
import bannerDescription from "./bannerDescription.png"

export const Banner = () => {

    return(
        <section className={styles.banner} >
            <div className={styles.card}>
                <h1>FRONT END</h1>
                <h3>Challenge React</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ex labore fugiat, facilis quisquam animi similique rem dolorem quidem iste?</p>
            </div>
            <img className={styles.description} src={bannerDescription} alt="imagen descripcion" />
        </section>
    )
}

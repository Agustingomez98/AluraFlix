import styles from "./Card.module.css"
import update from "./update.png"
import deleteBtn from "./delete.png"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/contexts.jsx"
import { ModalForm } from "../../components/ModalForm/ModalForm"

export const Card = ({ datos,color,handlerClickCard }) => {

    console.log("datos de los props en el card", datos);
    
    const {modal, setModal,setCurrentVideo,deleteVideo} = useContext(GlobalContext);

    return (
        <div className={styles.cardContainer}>
        <figure className={styles.card}>
            <img src={datos.photo} className={styles.capa}  onClick={()=>handlerClickCard(datos)}/>
            <section className={styles.containerIcon}>
                    <button value="BORRAR" onClick={() => deleteVideo(datos.id)} >
                        <img src={deleteBtn} alt="icon delete" />
                        <span id={styles.deleteBtn}>BORRAR</span>
                    </button>
                    <button onClick={() => {setCurrentVideo(datos); setModal(true);}} id={styles.updateBtn}>
                        <img src={update} alt="icon update" />
                        <span>EDITAR</span>
                    </button>
                    {modal && (<ModalForm/>)}
            </section>
        </figure>
        </div>
    )
}
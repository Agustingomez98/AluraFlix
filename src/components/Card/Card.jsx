import styles from "./Card.module.css"
import update from "./update.png"
import deleteBtn from "./delete.png"
import { useContext } from "react"
import { GlobalContext } from "../../contexts/contexts.jsx"
import { ModalForm } from "../../components/ModalForm/ModalForm"

export const Card = ({ video }) => {

    console.log("datos de los props en el card", video);
    
    const {modal, setModal,setCurrentVideo,deleteVideo} = useContext(GlobalContext);

    return (
        <div className={styles.card}>
            <img src={video.photo} className={styles.capa} />
            <section>
                <div className={styles.containerIcon}>
                    <button value="BORRAR" onClick={() => deleteVideo(video.id)} >
                        <img src={deleteBtn} alt="icon delete" />
                        <span id={styles.deleteBtn}>BORRAR</span>
                    </button>
                    <button onClick={() => {setCurrentVideo(video); setModal(true);}} id={styles.updateBtn}>
                        <img src={update} alt="icon update" />
                        <span>EDITAR</span>
                    </button>
                    {modal && (<ModalForm/>)}
                </div>
            </section>
        </div>

    )
}
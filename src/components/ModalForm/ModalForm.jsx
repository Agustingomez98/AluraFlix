import { useContext, useState } from "react"
import { OptionList } from "../../components/OptionsList/OptionList.jsx"
import styles from "./Modal.module.css"
import { GlobalContext } from "../../contexts/contexts.jsx"
import { InputText } from './../FormNewVideo/inputs/Inputs'
import iconClose from "./iconClose.png"

export const ModalForm = ({ video }) => {

    const { modal, setModal, updateVideo, currentVideo } = useContext(GlobalContext);

    console.log("video", video)
    const [dataNewVideo, setDataNewVideo] = useState({
        id: currentVideo.id,
        title: currentVideo.title,
        category: currentVideo.category,
        photo: currentVideo.photo,
        link: currentVideo.link,
        description: currentVideo.description,
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setDataNewVideo({
            ...dataNewVideo,
            [name]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateVideo(dataNewVideo);
        console.log(dataNewVideo);
    }

    return (
        <>
            <div className={styles.container}>
                <dialog open={modal}>
                    <img src={iconClose} alt="icon close" className={styles.iconClose} onClick={() => setModal(false)} />

                    <div className={styles.formContainer}>
                        <h2 className={styles.title}>EDITAR CARD</h2>

                        <form className={styles.form} action="" onSubmit={handleSubmit}>
                            <div className={styles.containerForm}>

                                <InputText label="Titulo" name="title" value={dataNewVideo.title} onChange={handleInputChange}
                                    placeholder={currentVideo.title} />

                            </div>

                            <div className={styles.containerForm}>
                                <OptionList onChange={handleInputChange} additionalClass={styles.updateVideo} />
                            </div>

                            <div className={styles.containerForm}>
                                <InputText label="Imagen" name="photo" value={dataNewVideo.photo} onChange={handleInputChange} placeholder={currentVideo.photo} />
                            </div>

                            <div className={styles.containerForm}>
                                <InputText label="Video" name="link" value={dataNewVideo.link} onChange={handleInputChange} placeholder={currentVideo.link} />
                            </div>

                            <div className={styles.containerForm} id={styles.description}>
                                <label>Descripción</label>
                                <textarea type="area" name="description" placeholder="Ingrese una descripción del video" onChange={handleInputChange} value={dataNewVideo.description} />
                            </div>

                            <div className={styles.buttons}>
                                <button className={styles.btn} type="submit" onClick={() => setModal(false)}>GUARDAR</button>
                                <button onClick={() => setDataNewVideo({
                                    title: "",
                                    category: "",
                                    photo: "",
                                    link: "",
                                    description: ""
                                })}>LIMPIAR</button>
                            </div>

                        </form>
                    </div>
                </dialog>
            </div>

        </>
    )
}
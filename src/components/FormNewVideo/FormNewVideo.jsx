import styles from "./Form.module.css"
import { OptionList } from "../../components/OptionsList/OptionList.jsx"
import { InputText } from './inputs/Inputs';
import { useContext, useState } from "react";
import { GlobalContext } from './../../contexts/contexts.jsx';
import { useNavigate } from "react-router-dom";


export const FormNewVideo = () => {

    const {addVideo} = useContext(GlobalContext);
    const navigate = useNavigate();

    const [dataNewVideo, setDataNewVideo] = useState({
        id: "",
        title: "",
        category:"",
        photo: "",
        link: "",
        description: "",
    })

    const handleInputChange = event => {
        const {name,value} = event.target;
        setDataNewVideo({
            ...dataNewVideo,
            [name]: value,
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const newVideo = { ...dataNewVideo, id: Date.now().toString() }; // Generar un id único como cadena
        addVideo(newVideo);
        console.log("datos en el form",newVideo)

        setDataNewVideo({
            id: "",
            title: "",
            category: "",
            photo: "",
            link: "",
            description: "",
        });

        navigate("/");


    }

    return (
        <main className={styles.principalContainer}>
            <h1 className={styles.title}>NUEVO VIDEO</h1>
            <p className={styles.description}>Complete el formulario para crear una nueva tarjeta de video</p>

            <div className={styles.formContainer}>
                <h3>Crear tarjeta</h3>

                <form className={styles.form} action="" onSubmit={handleSubmit}>

                    <div className={styles.fieldGroup}>
                        <InputText label="Titulo" name="title" placeholder="Ingresar titulo" onChange={handleInputChange} value={dataNewVideo.title}/>
                        <OptionList  onChange={handleInputChange} additionalClass="newVideo"/>
                    </div>

                    <div className={styles.fieldGroup} >
                        <InputText label="Imagen" name="photo" placeholder="Ingresar url de la imagen" onChange={handleInputChange} value={dataNewVideo.photo}/>
                        <InputText label="Video" name="link" placeholder="Ingresar url del video" onChange={handleInputChange} value={dataNewVideo.link}/>
                    </div>

                    <div id={styles.descriptionFieldGroup}>
                        <label>Descripción</label>
                        <textarea id={styles.area} name="description" placeholder="¿De que se trata el video?" onChange={handleInputChange} value={dataNewVideo.description}/>
                    </div>

                    <div className={styles.buttons}>
                        <button type="submit" id={styles.btnSave}>GUARDAR</button>
                        <button onClick={() =>setDataNewVideo({
                            title: "",
                            category:"",
                            photo: "",
                            link: "",
                            description: ""
                        })}>LIMPIAR</button>
                    </div>

                </form>
            </div>
        </main>
    )
}

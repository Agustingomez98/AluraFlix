import { GlobalContext } from "../../contexts/contexts.jsx";
import { useContext } from "react"
import styles from "./Option.module.css"

export const OptionList = ({onChange, additionalClass}) => {

    const { categories } = useContext(GlobalContext);
    console.log(additionalClass)

    return (<div>
        <label>Categoria</label>
        <select name="category" onChange={onChange} defaultValue="" className={`${styles.select} ${additionalClass == "newVideo" ? styles.newVideo : styles.updateVideo }`}>
            <option value="" disabled>Seleccione una categoria</option>
            {
                categories.map((category, index) => {
                    return <option className={styles.option}  key={index} value={category.name}>
                        {category.name}
                        </option>
                })
            }
            
        </select>
        </div>
    )
}
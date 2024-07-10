import { useState } from "react"
import styles from "./Inputs.module.css"

export const InputText = ({ label, placeholder, name, onChange, value }) => {

    return (<div className={styles.field}>
        <label>{label}</label>
        <input
            type="text"
            name={name}
            placeholder={placeholder}
            required
            onChange={onChange}
            value={value} />
    </div>)
}

export const Button = ({children,state}) => {

    <div className={styles.containerButtom}>
        <button
            className={`{styles.btnActive} ${state === 'active' ? styles.active : ''}`}
            onClick={() => handlerButtonClick('active')} >
            <Link to="/" className={styles.link}>{children}</Link>
        </button>

        <button className={`{styles.btnSecondary} ${state === 'secondary' ? styles.active : ''}`}
            onClick={() => handlerButtonClick('secondary')}>
            <Link to="/newVideo" className={styles.link}></Link>
        </button>
    </div>
}
import react from "react";
import styles from '../../../styles/Header.module.css';


const Header = () =>{
    return(
        <div className={styles.Header}>
            <h1 className={styles.Header_title}>Where in the World?</h1>
            <p>Dark Mode</p>
        </div>
    )
}

export default Header;
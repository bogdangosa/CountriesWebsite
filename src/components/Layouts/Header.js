import react, { useState,useEffect } from "react";
import styles from '../../../styles/Header.module.css';


const Header = () =>{
    const [darkTheme, setDarkTheme] = useState(undefined);

    const handleToggle = (event) => {
      setDarkTheme(event.target.checked);
    };

  
    useEffect(() => {
      if (darkTheme !== undefined) {
        if (darkTheme) {
          // Set value of  darkmode to dark
          document.documentElement.setAttribute('data-theme', 'dark');
          window.localStorage.setItem('theme', 'dark');
        } else {
          // Set value of  darkmode to light
          document.documentElement.removeAttribute('data-theme');
          window.localStorage.setItem('theme', 'light');
        }
      }
    }, [darkTheme]);
  
    useEffect(() => {
      const root = window.document.documentElement;
      const initialColorValue = root.style.getPropertyValue(
        '--initial-color-mode'
      );
      // Set initial darkmode to light
      setDarkTheme(initialColorValue === 'dark');
    }, []);

    return(
        <div className={styles.Header}>
            <h1 className={styles.Header_title}>Where in the World?</h1>
            <p onClick={()=>setDarkTheme(!darkTheme)} className={styles.DarkModeToggle}>{darkTheme?"Dark Mode":"Light Mode"}</p>
        </div>
    )
}

export default Header;
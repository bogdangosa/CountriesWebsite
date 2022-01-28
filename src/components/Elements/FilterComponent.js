import react, { useState } from "react";
import styles from '../../../styles/FilterComponent.module.css';


const FilterComponent = () =>{
    const [TopText,setTopText] = useState("Filter by Region");
    const [FilterState,setFilterState] = useState(false);
    return(
        <div className={styles.FilterComponent}>
            <p className={styles.FilterComponentTopText} onClick={()=>setFilterState(!FilterState)}>{TopText}</p>
            <div className={FilterState?styles.FilterComponentOptions+' '+styles.FilterVisible:styles.FilterComponentOptions}>
                <p className={styles.FilterComponentOption} onClick={()=>setTopText("Filter by Region")}>All</p>
                <p className={styles.FilterComponentOption} onClick={()=>setTopText("Africa")}>Africa</p>
                <p className={styles.FilterComponentOption} onClick={()=>setTopText("America")}>America</p>
                <p className={styles.FilterComponentOption} onClick={()=>setTopText("Asia")}>Asia</p>
                <p className={styles.FilterComponentOption} onClick={()=>setTopText("Europa")}>Europa</p>
                <p className={styles.FilterComponentOption} onClick={()=>setTopText("Oceania")}>Oceania</p>
            </div>
        </div>
    )
}

export default FilterComponent;
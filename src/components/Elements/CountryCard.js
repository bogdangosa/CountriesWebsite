import react from "react";
import styles from '../../../styles/CountryCard.module.css';
import { useRouter } from "next/router";


const CountryCard = (props) =>{
    const router = useRouter();

    const RouteToCountry = () =>{
      router.push({
        pathname:'/country/[id]',
        query:{id:props.data.name}
      });
    }
    return(
        <div className={styles.CountryCard} onClick={()=>RouteToCountry()}>
            <img src={props.data.flags.svg} className={styles.CountryCard_flag}></img>
            <div className={styles.CountryCard_text_section}>
                <p className={styles.CountryCard_title}>{props.data.name}</p>
                <p className={styles.CountryCard_info}>Population: {props.data.population}</p>
                <p className={styles.CountryCard_info}>Region: {props.data.region}</p>
                <p className={styles.CountryCard_info}>Capital: {props.data.capital}</p>
            </div>
        </div>
    )
}

export default CountryCard;
import react, { useState } from "react";
import styles from '../../../../styles/CountryId.module.css';
import { useRouter } from "next/router";

export const getServerSideProps = async (context) =>{
    const data = await getData("name/"+context.query.id);
    return {
      props: {data: data[0]}
    }
  }
  
  const getData = async (params)=>{
    const response = await fetch(`https://restcountries.com/v2/${params}`);
    const data = await response.json();
    return data;
  }


const CountryId = ({data})=>{
    const router = useRouter();


    return(
    <div className={styles.CountryId}>
        <p className={styles.BackBtn} onClick={()=>router.back()}>Back</p>
        {data!=undefined?
        <div className={styles.CountryId_data_container}>
            <img src={data.flag} className={styles.CountryId_image}/>
            <div className={styles.CountryId_data}>
                <p className={styles.CountryId_Name}>{data.name}</p> 
                <p>Native Name: {data.nativeName}</p> 
                <p>Population: {data.population}</p> 
                <p>Region: {data.region}</p> 
                <p>Subregion: {data.subregion}</p>
                <p>Capital: {data.capital}</p>  
                <p>Border Countries: </p>
                <div className={styles.CountryId_borders_container}>
                    {data.borders!=undefined?
                        data.borders.map((border,index)=>{
                            return (
                                <div className={styles.CountryId_border_country} key={index}>{border}</div>
                            )
                        }):<></>
                    }
                </div>
            </div>
        </div>
        :<></>}


    </div>)
}

export default CountryId;
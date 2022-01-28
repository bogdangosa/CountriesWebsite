import { useRouter } from "next/router";
import react,{useState} from "react";
import styles from '../../../../styles/SearchId.module.css';
import CountryCard from "../../../components/Elements/CountryCard";
import Searchbar from "../../../components/Elements/Searchbar";
import FilterComponent from "../../../components/Elements/FilterComponent";

export const getServerSideProps = async (context) =>{
    const data = await getData("name/"+context.query.id);
    return {
      props: {data: data}
    }
  }
  
  const getData = async (params)=>{
    const response = await fetch(`https://restcountries.com/v2/${params}`);
    const data = await response.json();
    return data;
  }


const SearchId = ({data}) =>{

    return (
        <div className={styles.SearchId}>

            <div className={styles.search_top_section}>
                <Searchbar/>
                <FilterComponent/>
            </div>

            <div className={styles.search_country_grid}>         
                {
                data!=undefined?
                data.map((country_data,index)=>{
                    return (<CountryCard key={index} data={country_data}/>)
                } ):<></>
            } 
            </div>
        </div>
    )
}

export default SearchId;

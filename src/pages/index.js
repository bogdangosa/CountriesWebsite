import react,{useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import FilterComponent from '../components/Elements/FilterComponent'
import Searchbar from '../components/Elements/Searchbar'
import CountryCard from '../components/Elements/CountryCard'


export const getStaticProps = async () =>{
  const data = await getData("all");
  //console.log(data);
  return {
    props: {data: data}
  }
}

const getData = async (params)=>{
  const response = await fetch(`https://restcountries.com/v2/${params}`);
  const data = await response.json();
  return data;
}

export default function Home({data}) {


  return (
    <div className={styles.container}>
      <div className={styles.home_top_section}>
        <Searchbar/>
        <FilterComponent/>
      </div>
      <div className={styles.home_country_grid}>         
        {
          data.map((country_data,index)=>{
            return (<CountryCard key={index} data={country_data}/>)
          } )
        } 
        </div>

    </div>
  )
}

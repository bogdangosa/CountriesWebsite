import react,{useState} from "react";
import styles from '../../../styles/Searchbar.module.css';
import {useRouter} from 'next/router';


const Searchbar = () =>{ 
    const [searchValue,setSearchValue] = useState();
    const router = useRouter();

    const Search = ()=>{
        if(searchValue=="")
          return;
        router.push({
          pathname:'/search/[id]',
          query:{id:searchValue}
        });
      }

    return(
        <div className={styles.Searchbar}>
            <img src="search-icon.svg" className={styles.Searchbar_search_btn} onClick={()=>Search()}></img>
            <input placeholder="Search for a country..." className={styles.Searchbar_input} value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
        </div>
    )
}

export default Searchbar;
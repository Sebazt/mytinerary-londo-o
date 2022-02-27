/* import React from 'react'; */
import CallHome from '../components/callHome';
import CardsCities from '../components/cardsCities';
import HeaderCities from '../components/headerCities';
import MainCities from '../components/mainCities';
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios"
import "../css/searchCities.css";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';




function PagCities() {  
    const [cities, setCities] = useState()
    
    useEffect(()=>{
    window.scrollTo(0, 0)
    /* allcities es el entpoint */
    axios.get("http://localhost:4000/api/allcities")
    .then(response=>setCities(response.data.response.ciudades))
      /* llamada a la api y se setea */

},[])

  
    return (
      
          <div>
              <HeaderCities/>

              <MainCities/> 

              <div className='search-city'>
                  <div className='search-wrap'>
                        <div className='search-box'>
                              <div className='btn btn-common'>
                                    <SavedSearchIcon className='fas fa-search'/>
                              </div>
                              <input type='text' className='input' placeholder='Search...'/>
                        </div>
                  </div>
              </div>

              {/* defino la propiedad cities para pasarla a los componentes hijos como props, en este caso cardscities */}
              <CardsCities cities={cities}/> 

              <CallHome/>
                  
          </div>
     
    );
  }
  
  export default PagCities;
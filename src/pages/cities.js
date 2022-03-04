/* import React from 'react'; */
import CallHome from '../components/callHome';

import HeaderCities from '../components/headerCities';
import MainCities from '../components/mainCities';
import React from "react";
import { useEffect,useState } from "react";
import axios from "axios"
import "../css/searchCities.css";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import Card from '../components/card';


function PagCities() {  

    useEffect(() => { /* ínicialización de variables  */
    window.scrollTo(0, 0);
  }, []); /* array vacio para evitar que se convierta en un loop y todo arriba atm */

  const [input, setInput] = useState();
  const [apidata, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/allcities")
      .then((respuesta) => setApiData(respuesta.data.response.ciudades));
}, []);

      function filterCards(event) { /* filter para busquedad input */
      setInput(
      apidata.filter((city) =>
        city.name.toLowerCase().startsWith(event.target.value.toLowerCase().trim()))
    );
  }


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
                              <input type='text' onKeyUp={filterCards} className='input' placeholder='Search...'/>
                        </div>
                  </div>
              </div>

              {/* defino la propiedad cities para pasarla a los componentes hijos como props, en este caso cardscities */}
              
              <Card search={input}/> {/* props */}
              <CallHome/>
              
          </div>
     
    );
  }
  
  export default PagCities;
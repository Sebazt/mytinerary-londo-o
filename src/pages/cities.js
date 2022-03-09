import React from 'react';
import CallHome from '../components/callHome';
import HeaderCities from '../components/headerCities';
import MainCities from '../components/mainCities';
import { useEffect,useState } from "react";
import axios from "axios"
import "../css/searchCities.css";
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import Card from '../components/card';
import {connect} from "react-redux"
import citiesActions from "../redux/actions/citiesAction";

/* import Zeta from "../components/zeta"; */
/* import React, {Suspense} from "react"; */
/* const  Card = React.lazy(() => import('../components/card')) */


function PagCities(props) {  

    useEffect(() => { /* ínicialización de variables  */
    window.scrollTo(0, 0);
  }, []); /* array vacio para evitar que se convierta en un loop y todo arriba atm */

  const [input, setInput] = useState();
  const [apidata, setApiData] = useState([]);

  useEffect(()=>{
    props.fetchearCities()
  },[]) 


  function filterCards (event) {
      props.filtrarCities(props.cities, event.target.value)

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

              
              {/* <Suspense fallback={<Zeta/>}> */}
              <Card cities={props.filterCities}/> {/* props */}
              {/* </Suspense> */}
              <CallHome/>
              
          </div>
     
    );
  }
  
const mapDispatchToProps  ={  /* aqui modifico los estados mapStateToProps */
  fetchearCities:citiesActions.fetchearCities,
  filtrarCities:citiesActions. filtrarCities,

}

const mapStateToProps = (state) =>{ /* aqui tomo los estados mapStateToProps */
  return{
      cities:state.citiesReducer.cities,
      auxiliar: state.citiesReducer.auxiliar,
      filterCities:state.citiesReducer.filterCities
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagCities);
 /* a través del metodo connect vinculo los componentes de react al redux */
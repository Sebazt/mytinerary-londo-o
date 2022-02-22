
import React from 'react';
import "../css/searchCities.css"
import SavedSearchIcon from '@mui/icons-material/SavedSearch';


function SearchCities() {


      return (

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

      );
}

export default SearchCities;
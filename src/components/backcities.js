import "../css/callHome.css"
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom'




export default function Backtocities() {
  return (
        <div className="">
          <LinkRouter to={"/cities"}>
          <button className="button-callhome">Back to cities
            <span></span>
          </button>
          </LinkRouter>
        </div>       
  );
}



import "../css/calltoAct.css"
import React from 'react';

import {Link as LinkRouter} from 'react-router-dom'

export default function ButonCall() {
  return (
      <div className="container-call">
        <LinkRouter to={"/cities"}>
        <button className="botonaction">Go cities</button>
        </LinkRouter>
        </div>  
  );
}
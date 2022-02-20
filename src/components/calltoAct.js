import "../css/calltoAct.css"
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Link as LinkRouter} from 'react-router-dom'

export default function ButonCall() {
  return (
      <div className="container-call">
        <LinkRouter to="cities">
        <MDBBtn className="botonaction">Cities</MDBBtn>
        </LinkRouter>
        </div>  
  );
}
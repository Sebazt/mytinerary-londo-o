import "../css/calltoAct.css"
import React from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import {Link as LinkRouter} from 'react-router-dom'

export default function App() {
  return (
      <div className="container-video">
        <LinkRouter to="cities">
        <MDBBtn>Cities</MDBBtn>
        </LinkRouter>
        </div>  
  );
}
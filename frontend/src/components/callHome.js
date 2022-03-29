import "../css/callHome.css"
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom'

export default function CallHome() {
  return (
      <div className=" home-call">
        <LinkRouter to={"/home"}>
        <button className="button-callhome">Back to home
          <span></span>
        </button>
        </LinkRouter>
        </div>  
  );
}
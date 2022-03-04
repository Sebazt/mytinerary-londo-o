import "../css/callHome.css"
import React from 'react';
import {Link as LinkRouter} from 'react-router-dom'




export default function BotontoCalls() {
  return (
        <div className="">
          <LinkRouter to="home">
          <button className="button-callhome">Back to home
            <span></span>
          </button>
          </LinkRouter>
        </div>       
  );
}
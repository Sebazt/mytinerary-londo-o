import { useEffect } from "react";
import "./signin.css"
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { connect } from 'react-redux';
import UserActions from '../../redux/actions/usersActions';
import { FcGoogle } from "react-icons/fc"
import { FcUnlock } from "react-icons/fc"
import { FcInvite } from "react-icons/fc"
import { FcCheckmark } from "react-icons/fc"
import { FcApprove } from "react-icons/fc"

function SingUp(props) {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="container-signup">
      <div className="container-form">
        <h1 className="titulo-form">Sign In</h1>

        <form>

          <div className="inputbox">
            <input type="text" required="required" />
            <span><FcApprove /> E-mail</span>
          </div>


          <div className="inputbox">
            <input type="password" required="required" />
            <span><FcUnlock /> Password</span>
          </div>

          <div className="form-submit">
            <button type="submit" className="boton-submit"><FcCheckmark className="boton-submit2" /></button>
          </div>


          <button className="button-callhome2">
            <span className="boton-google"><FcGoogle className="boton-google" /></span>  Sign in with Google
          </button>


          <div className="container-h2-callhome">
            <h2 className="h2-callhome ">
              Already have an account? <LinkRouter to={"/signup"} className="h2-callsign"><span >Sign up here !</span></LinkRouter>
            </h2>
          </div>
        </form>

      </div>
    </div>
  );
}

export default SingUp;

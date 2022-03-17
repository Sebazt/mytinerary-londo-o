import { useEffect } from "react";
import "./signin.css"
import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import { connect } from 'react-redux';
import UserActions from '../../redux/actions/usersActions';
import { FcGoogle } from "react-icons/fc"
import { FcUnlock } from "react-icons/fc"
import { FcCheckmark } from "react-icons/fc"
import { FcApprove } from "react-icons/fc"
import FacebookSignIn from './facebookSignIn';
import GoogleSignIn from './googleSignIn';


function SignIn(props) {
    console.log(props)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    let formReset = document.querySelector('#formResete')
    const logedUser = {
      email: event.target[0].value,
      password: event.target[1].value,
      from: "form-Signup"
    }
    formReset.reset()
    props.signInUser(logedUser)
  }

  
  return (
    <div className="container-signup">
     
      <div className="container-form">
        <h1 className="titulo-form">Sign In</h1>

        <form onSubmit={handleSubmit} id="formResete">

          <div className="inputbox">
            <input type="email" required="required" />
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
            <GoogleSignIn/>
            <FacebookSignIn/>
          


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

const mapDispatchToProps = {
  signInUser:UserActions.signInUser,

}



export default connect(null, mapDispatchToProps)(SignIn);

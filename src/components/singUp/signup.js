import React from "react";
import { useEffect } from "react";
import "./signup.css";
import { Link as LinkRouter } from "react-router-dom";
import { connect } from 'react-redux';
import UserActions from '../../redux/actions/usersActions';
import { FcGoogle } from "react-icons/fc"
import { FcUnlock } from "react-icons/fc"
import { FcVoicePresentation } from "react-icons/fc"
import { FcCameraIdentification } from "react-icons/fc"
import { FcInvite } from "react-icons/fc"
import { FcCheckmark } from "react-icons/fc"


function SignUp(props) {
  console.log(props)
  

  const handleSubmit = (event) => {
    event.preventDefault()  /* evita que la pag se refresque */
    let formReset = document.querySelector('#formRese')
    const userData = {
      firstName: event.target[0].value,
      lastName: event.target[1].value,
      email: event.target[2].value,
      password: event.target[3].value,
      photoURL: event.target[4].value,
      chooseCountry: event.target[5].value,
      from: "form-Signup"  /* desde aquí se cargaron los datos */
    }
    formReset.reset()
    props.signUpUser(userData) /* guardo toda la inf. recolectada en esta variable */

  }
  console.log(props.message)
  /* alert(props.message.message) */
  
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  

  
  return (
    <div className="container-signup">
      <div className="container-form">
        <h1 className="titulo-form">Sign Up</h1>

        <form onSubmit={handleSubmit} id="formRese">
          <div className="inputbox">
            <input type="text" required="required" />
            <span><FcVoicePresentation/> First Name</span>
          </div>

          <div className="inputbox">
            <input type="text" required="required" />
            <span><FcVoicePresentation/> Last Name</span>
          </div>

          <div className="inputbox">
            <input type="text" required="required" />
            <span><FcInvite /> E-mail</span>
          </div>

          <div className="inputbox">
            <input type="password" required="required" />
            <span><FcUnlock/> Password</span>
          </div>

          <div className="inputbox">
            <input type="text" required="required" />
            <span><FcCameraIdentification/> Photo URL</span>
          </div>

          <label htmlFor="country" className="form-selector">
            <select for="country" className="seleccionador">
              <option>Choose your country</option>
            </select>
          </label>

          <div className="form-submit">
            <button type="submit" className="boton-submit"><FcCheckmark className="boton-submit2"/></button>
          </div>


          <button className="button-callhome2">
            <span className="boton-google"><FcGoogle className="boton-google"/></span>  Sign up with Google
          </button>

          <div className="container-h2-callhome">
            <h2 className="h2-callhome ">
              Already have an account? <LinkRouter to={"/signin"} className="h2-callsign"><span >Sign in here !</span></LinkRouter>
            </h2>
           </div>
        </form>

      </div>
    </div>
  );
}

const mapDispatchToProps = {
  signUpUser:UserActions.signUpUser,

}
const mapStateToProps = (state) => {
  return {
    message: state.userReducer.message,
  }
}




export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

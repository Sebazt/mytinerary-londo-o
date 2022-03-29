import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/usersActions';
import '../singUp/facebookUp.css';

function GoogleSignUp(props) {

  const responseGoogle = async (res) => {
    console.log(res);
    const userData = {
      firstName: res.profileObj.givenName, 
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      photoURL: res.profileObj.imageUrl,
      chooseCountry: props.countrie,  /* capaz esta no es la ruta */
      from: "google"
      
    }
    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
      className="buttonsocial2"
      clientId="830634743901-7hvtii4m121jrjn8h0g7tb1005vj3je3.apps.googleusercontent.com"
      buttonText=" With Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}

const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignUp);
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
      clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
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
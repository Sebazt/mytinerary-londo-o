import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/usersActions';
import '../singUp/facebookUp.css'

function GoogleSignIn(props) {

  const responseGoogle = async (res) => {
    console.log(res)
    const logedUser = {
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      from: "google"
    }
    await props.signInUser(logedUser)
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
  signInUser: userActions.signInUser,

}

export default connect(null, mapDispatchToProps)(GoogleSignIn);
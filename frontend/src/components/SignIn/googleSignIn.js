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
      clientId="830634743901-7hvtii4m121jrjn8h0g7tb1005vj3je3.apps.googleusercontent.com"
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
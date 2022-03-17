import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/usersActions';


function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    console.log(res)
    console.log(res.name)
    const fullNameSeparado = res.name.split(" ")
    console.log(fullNameSeparado)

    // let nombre = fullNameSeparado[0]
    //let apellido = fullNameSeparado[1]
    //console.log(nombre)
    //console.log(apellido)
    console.log(props.countrie)
    const userData = {
      
      firstName: fullNameSeparado[0],
      lastName: fullNameSeparado[1],
      email: res.email,
      password: res.id,
      photoURL: res.picture.data.url,
      chooseCountry: props.countrie,
      from: "facebook"
    }
    await props.signUpUser(userData)
  }

  return (
    <FacebookLogin
      cssClass="buttonsocial my-facebook-button-class"
      icon="fa-facebook"
      textButton=" Facebook"
      appId="2848979418734353"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);
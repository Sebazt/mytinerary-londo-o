import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/usersActions';
import './facebookUp.css';

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

    const userData = {  /* aqui recopilo los datos que traigo de facebook, debe ser = a los datos que requiero en sign up dónde llamo este */
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
      appId="1670742906603180"
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
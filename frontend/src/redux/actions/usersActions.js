import axios from 'axios';

const userActions = {

  signUpUser: (userData) => {
    console.log(userData) /* en userData se envia la informacion que se recolecta en el form */
    return async (dispatch, getState) => {

      const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })
      dispatch({
        type: 'message',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success
        }
      });

    }
  },

  signInUser: (logedUser) => {
    console.log(logedUser)
    return async (dispatch, getState) => {
      const user = await axios.post('http://localhost:4000/api/auth/signin', { logedUser })
      console.log(user)
      if (user.data.success) {
        localStorage.setItem('token', user.data.response.token);
        console.log(user.data.success)
        dispatch({ type: 'user', payload: user.data.response.userData });

      } dispatch({
        type: 'message',
        payload: {
          view: true,
          message: user.data.message,
          success: user.data.success
        }
      });

    }
  },
  signOutUser: (closeuser) => {
    return async (dispatch, getState) => {
      console.log("ingrese a la función")
      const user = await axios.post('http://localhost:4000/api/auth/signout', { closeuser })
      localStorage.removeItem('token')
      dispatch({ type: 'user', payload: null }); /* elimino el token para deslogearlo */
    }
  },
  VerificarToken: (token) => {

    return async (dispatch, getState) => {
      console.log(token)
      const user = await axios.get('http://localhost:4000/api/auth/signInToken', {
        headers: {
          Authorization: 'Bearer ' + token
        }  /* meotod para gestionar los datos del usuario */
      })
      console.log(user)

      if (user.data.success) {
        dispatch({ type: 'user', payload: user.data.response });
        dispatch({
          type: 'message',
          payload: {
            view: true,
            message: user.data.message,
            success: user.data.success
          }
        });
      } else {
        localStorage.removeItem('token')
      }

    }
  }
}

export default userActions;
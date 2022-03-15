import axios from 'axios';

const userActions = {

  signUpUser: (userData) => {
    console.log(userData) /* en userData se envia la informacion que se recolecta en el form */
    return async (dispatch, getState) => {

      const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })
      dispatch({type: 'message', 
                       payload: {view: true,
                                 message: res.data.message,
                                 success: res.data.success}});

    }
  },

  signInUser: (logedUser) => {
    console.log(logedUser)
    return async (dispatch, getState) => {
      const user = await axios.post('http://localhost:4000/api/auth/signin', { logedUser })
      console.log(user)
      if (user.data.success) {
        console.log(user.data.success)
        dispatch({ type: 'user', payload: user.data.response.userData });
      } dispatch({type: 'message',
            payload: {view: true,
                      message: user.data.message,
                      success: user.data.success}});

    }
  },
  signOutUser: (closeuser) => {
    return async (dispatch, getState) => {
      console.log("ingrese a la función")
      const user = await axios.post('http://localhost:4000/api/auth/signout', { closeuser })
      dispatch({ type: 'user', payload: null });
    }
  }
}

export default userActions;
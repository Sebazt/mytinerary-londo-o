import axios from 'axios';

const userActions = {

  signUpUser: (userData) => { /* en userData se envia la informacion que se recolecta en el form */
    return async (dispatch, getState) => {

      const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })
      dispatch({ type: 'message', payload: res.data });

    }
  },
  signInUser: (logedUser) => {

    return async (dispatch, getState) => {
      const user = await axios.post('http://localhost:4000/api/auth/signin', { logedUser })
      if (user.data.success) {
        dispatch({ type: 'user', payload: user.data.response.userData });
      } else { console.log(user.data.message) }

    }
  },
  SignOutUser: (closeuser) => {
    return async (dispatch, getState) => {
      const user = axios.post('http://localhost:4000/api/auth/signout', { closeuser })
      dispatch({ type: 'user', payload: null });
    }
  }
}
export default userActions;
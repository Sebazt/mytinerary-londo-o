import axios from 'axios';

const userActions = {

  signUpUser: (userData) => {
    console.log(userData) /* en userData se envia la informacion que se recolecta en el form */
    return async (dispatch, getState) => {

      const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })
      dispatch({ type: 'message', payload: res.data });

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
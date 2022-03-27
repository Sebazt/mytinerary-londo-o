import axios from 'axios';

const commentsActions = {

  addComment: (comment) => {

    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      const res = await axios.post('http://localhost:4000/api/itinerary/comment', { comment }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      dispatch({
        type: 'message',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success
        }
      })
      return res
    }
  },
  modifiComment: (comment) => {

    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      const res = await axios.put('http://localhost:4000/api/itinerary/comment', { comment }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      dispatch({
        type: 'message',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success
        }
      })

      return res
    }
  },
  deleteComment: (id) => {

    const token = localStorage.getItem('token')
    return async (dispatch, getState) => {
      const res = await axios.post(`http://localhost:4000/api/itinerary/comment/${id}`, {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }

      })
      dispatch({
        type: 'message',
        payload: {
          view: true,
          message: res.data.message,
          success: res.data.success
        }
      })
      return res
    }
  },

}

export default commentsActions;
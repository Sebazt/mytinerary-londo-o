const initialState = {
    user: null, /* para poder establecer un valor de renderizado */
    message: null,

}

const userReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'user':
            return {
                ...state,
                user: action.payload,
            }
        case 'message':
            return {
                ...state,
                message: action.payload.message
            }

        default:
            return state
    }
}
export default userReducer
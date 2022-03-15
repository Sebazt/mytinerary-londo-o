const initialState = {
    user: null, /* para poder establecer un valor de renderizado */
    snackbar:{view: false,
        message: '',
        success:false},

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
                snackbar: action.payload,
            }

        default:
            return state
    }
}
export default userReducer
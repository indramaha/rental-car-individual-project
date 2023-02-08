const authState = {
    message: "",
}

export const authReducers = (state = authState, action) => {
    switch (action.type){
        case "LOGIN_STATUS":
            return {
                ...authState,
                message: action.payload,
            }
        case "LOGOUT":
            return {
                ...authState,
                message: action.payload,
            }
        default:
            return state;
    }
}
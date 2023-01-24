const inputAuthState = {
    email: "",
    password: "",
    isPwdShow: false,
}

export const inputAuthReducers = (state = inputAuthState, action) => {
    switch (action.type) {
        case "EMAIL":
            return{
                ...inputAuthState,
                email: action.payload.email,
            }
        case "PASSWORD":
            return{
                ...inputAuthState,
                password: action.payload.password,
            }
        case "PASSWORD_SHOW":
            return{
                ...inputAuthState,
                isPwdShow: action.payload.isPwdShow,
            }
        default:
            return state;
    }
}
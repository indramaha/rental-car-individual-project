export const inputEmail = (e) => dispatch => {
    dispatch({
        type: "EMAIL",
        payload: {
            email:e.target.value,
        },
    })
}

export const inputPassword = (e) => dispatch => {
    dispatch({
        type: "PASSWORD",
        payload: {
            password:e.target.value,
        },
    })
}

export const passwordShow = (pwd) => dispatch => {
    dispatch({
        type: "PASSWORD_SHOW",
        payload: {
            isPwdShow: pwd,
        },
    })
}
import axios from "axios"
import { API } from "../../const/endpoint"

export const handleLogin = (payload) => dispatch => {
    axios
        .post(API.CUSTOMER_LOGIN, payload)
        .then((res) => {
            localStorage.setItem("token", res.data.access_token)
            // console.log(res)
            dispatch({
                type: "LOGIN_STATUS",
                payload: res.statusText
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const handleLogOut = () => dispatch => {
    localStorage.removeItem("token")
    dispatch({
        type: "LOGOUT",
        payload: "",
    })
}
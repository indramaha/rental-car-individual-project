import axios from "axios"
import { API } from "../../const/endpoint"

export const regisAction = (payload) => dispatch => {
    axios
        .post(API.CUSTOMER_REGIS, payload)
        .then((ress) => {
            console.log(ress)
        })
        .catch((err) => {
            console.log(err.response.data.errors[0].message)
            console.log(err.response.data.errors[1].message)
        })
}
import axios from "axios"
import { API } from "../../const/endpoint"

export const regisAction = (payload) => dispatch => {
    axios
        .post(API.CUSTOMER_REGIS, payload)
        .then((ress) => {
            // console.log(ress.statusText)
            dispatch({
                type: "REGIS_STATUS",
                payload: ress.statusText
            })
        })
        .catch((err) => {
            console.log(err.message)
        })
}
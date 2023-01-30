import axios from "axios"
import { API } from "../../const/endpoint"

export const handleGetAllCar = () => dispatch => {
    axios
        .get(API.CARS_SHOW)
        .then((res) => {
            // console.log(res)
            dispatch({
                type: "GET_ALL_CARS",
                payload: res.data.cars,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

export const handleFilterBtn = (name, category, minPrice, maxPrice) => dispatch => {
    axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        .then((res) => {
            // console.log(res);
            dispatch({
                type: "GET_CAR_BY_FILTER",
                payload: {
                    carList: res.data.cars,
                    filterBtn: true,
                } 
            })
        })
        .catch((err) => console.log(err.message))
}

export const handleCarById = (id) => dispatch => {
    axios
        .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
        .then((res) => {
            // console.log(res.data)
            dispatch({
                type: "GET_CAR_BY_ID",
                payload: res.data,
            })
        })
        .catch((err) => console.log(err.message))
}
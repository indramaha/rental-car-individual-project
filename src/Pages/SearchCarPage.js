import { useEffect, useState } from "react";
import FilterBox from "../Components/FilterBox";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import axios from "axios";
import { API } from "../const/endpoint";
import CarsShow from "../Components/CarsShow";

const SearchCarPage = () => {
    const [cars, setCars] = useState([])
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handlePrice = (e) => {
        if (e.target.value == "cheap"){
            setMinPrice(0)
            setMaxPrice(400000)
        } else if (e.target.value === "middle") {
            setMinPrice(400000)
            setMaxPrice(600000)
        } else if (e.target.value === "expensive") {
            setMinPrice(600000)
            setMaxPrice(0)
        } else if (e.target.value === "default") {
            setMinPrice(0)
            setMaxPrice(0)
        } else {
        }
    }
    // console.log("name", name)
    // console.log("category", category)
    // console.log("minprice", minPrice)
    // console.log("maxprice", maxPrice)

    const handleSearchButton = (e) => {
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/v2/car?name=${name}&category=${category}&minPrice=${minPrice}&maxPrice=${maxPrice}&page=&pageSize=`)
            .then((ress) => {
                setCars(ress.data.cars)
            })
            .catch((err) => console.log(err.message))
    }
    

    useEffect(() => {
        axios
            .get(API.CARS_SHOW)
            .then((ress) => {
                setCars(ress.data.cars)
            })
            .catch((err) => console.log(err.message))
    },[])
    return (  
        <div>
            <NavBar />
            <Hero isBtnShow={false}/>
            <FilterBox hName={handleName} hCategory={handleCategory} hPrice={handlePrice} buttonFilter={handleSearchButton}/>
            <CarsShow carsData={cars}/>
            <Footer /> 
        </div>
    );
}

export default SearchCarPage
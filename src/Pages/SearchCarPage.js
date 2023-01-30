import { useEffect, useState } from "react";
import FilterBox from "../Components/FilterBox";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import CarsShow from "../Components/CarsShow";
import { useDispatch, useSelector } from "react-redux";
import { handleFilterBtn, handleGetAllCar } from "../redux/action/carAction";

const SearchCarPage = () => {
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state)
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const dispatch = useDispatch()

    const onHandleAllCars = () => {
        dispatch(handleGetAllCar())
    }

    useEffect(() => {
        onHandleAllCars()
        // eslint-disable-next-line
    },[])

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handlePrice = (e) => {
        if (e.target.value === "cheap"){
            setMinPrice(0)
            setMaxPrice(400000)
        } else if (e.target.value === "middle") {
            setMinPrice(400000)
            setMaxPrice(600000)
        } else if (e.target.value === "expensive") {
            setMinPrice(600000)
            setMaxPrice(100000000)
        } else if (e.target.value === "default") {
            setMinPrice("")
            setMaxPrice("")
        } else {
        }
    }

    const onHandleFilterBtn = () => {
        dispatch(handleFilterBtn(name, category, minPrice, maxPrice))
    }


    return (  
        <div>
            <NavBar />
            <Hero isBtnShow={false} onOff={state.car.filterBtn}/>
            <FilterBox hName={handleName} hCategory={handleCategory} hPrice={handlePrice} buttonFilter={onHandleFilterBtn} onOff={state.car.filterBtn}/>
            <CarsShow carsData={state.car.carList}/>
            <Footer /> 
        </div>
    );
}

export default SearchCarPage
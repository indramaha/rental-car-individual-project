import CarDetail from "../Components/CarDetail";
import FilterBox from "../Components/FilterBox";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";

const DetailCarPage = () => {
    return (  
        <div>
            <NavBar />
            <Hero onOff={true}/>
            <FilterBox detailOff={true} onOff={true}/>
            <CarDetail />
            <Footer />
        </div>
    );
}
 
export default DetailCarPage;
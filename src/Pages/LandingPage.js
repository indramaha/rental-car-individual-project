import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import OurServices from "../Components/OurServices";
// import Testimonial from "../Components/Testimonial";
import WhyUs from "../Components/WhyUs";

const LandingPage = () => {
    return (  
        <div>
            <NavBar />
            <Hero isBtnShow={true}/>
            <OurServices />
            <WhyUs />
            {/* <Testimonial /> */}
            <Banner />
            <Footer />
        </div>
    );
}

export default LandingPage;
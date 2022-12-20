import { useState } from "react";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import OurServices from "../Components/OurServices";

const LandingPage = () => {
    return (  
        <div>
            <NavBar />
            <Hero />
            <OurServices />
        </div>
    );
}
 
export default LandingPage;
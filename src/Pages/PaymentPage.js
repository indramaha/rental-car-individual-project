import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer"
import PaymentMethod from "../Components/PaymentMethod";

const PaymentPage = () => {
    return (  
        <div>
            <NavBar />
            <HeroPayment isStepOneDone={false} isStepTwoDone={false} isStepThreeDone={false} stepOneBg={true} stepTwoBg={false} stepThreeBg={false}/>
            <PaymentMethod />
            <Footer />
        </div>
    );
}

export default PaymentPage;
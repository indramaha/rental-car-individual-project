import Footer from "../Components/Footer";
import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/NavBar";
import PaymentConfirm from "../Components/PaymentConfirm";

const PaymentConfirmPage = () => {
    return (  
        <div>
            <NavBar />
            <HeroPayment isStepOneDone={true} isStepTwoDone={false} isStepThreeDone={false} stepOneBg={true} stepTwoBg={true} stepThreeBg={false} bank={true}/>
            <PaymentConfirm />
            <Footer />
        </div>
    );
}

export default PaymentConfirmPage;
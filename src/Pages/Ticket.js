import Footer from "../Components/Footer";
import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/NavBar";

const Ticket = () => {
    return (  
        <div>
            <NavBar />
            <HeroPayment isStepOneDone={true} isStepTwoDone={true} isStepThreeDone={false} stepOneBg={true} stepTwoBg={true} stepThreeBg={true} isTicketShow={true}/>
            <h1>Ticket</h1>
            <Footer />
        </div>
    );
}
 
export default Ticket;
import Footer from "../Components/Footer";
import HeroPayment from "../Components/HeroPayment";
import NavBar from "../Components/NavBar";
import Ticket from "../Components/Ticket";

const TicketPage = () => {
    return (  
        <div>
            <NavBar />
            <HeroPayment isStepOneDone={true} isStepTwoDone={true} isStepThreeDone={false} stepOneBg={true} stepTwoBg={true} stepThreeBg={true} isTicketShow={true}/>
            <Ticket />
            <Footer />
        </div>
    );
}
 
export default TicketPage;
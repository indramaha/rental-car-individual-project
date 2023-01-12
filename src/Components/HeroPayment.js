import { useParams } from "react-router-dom";
import "./HeroPayment.css"
import {FiArrowLeft, FiCheck} from "react-icons/fi"

const HeroPayment = (props) => {
    const {id} = useParams()
    return (  
        <div className="heropayment-section-bg">
            <div className={props.stepTwoBg ? "heropayment-section-two":"heropayment-section"}>
                <div className="heropayment-left" >
                    <div>
                        <FiArrowLeft size={24}/>
                    </div>
                    <div>
                        <div className="heropayment-left-title">
                            <p>Pembayaran</p>
                        </div>
                        {
                            props.isStepOneDone ? (
                            <div className="heropayment-left-id">
                                <p>Order ID: {id}</p>
                            </div>
                            ) : null
                        }
                    </div>
                </div>
                <div className="heropayment-right">
                    <div className="heropayment-right-content">
                        <div className={props.stepOneBg ? "heropayment-right-icon-active" : "heropayment-right-icon"}>
                            {
                                props.isStepOneDone ? <FiCheck /> : <p>1</p>
                            }
                        </div>
                        <div className="heropayment-right-step">
                            <p>Pilih Metode</p>
                        </div>
                    </div>
                    <div className="heropayment-right-rectangel"></div>
                    <div className="heropayment-right-content">
                        <div className={props.stepTwoBg ? "heropayment-right-icon-active" : "heropayment-right-icon"}>
                            {
                                props.isStepTwoDone ? <FiCheck /> : <p>2</p>
                            }
                        </div>
                        <div className="heropayment-right-step">
                            <p>Bayar</p>
                        </div>
                    </div>
                    <div className="heropayment-right-rectangel"></div>
                    <div className="heropayment-right-content">
                        <div className={props.stepThreeBg ? "heropayment-right-icon-active" : "heropayment-right-icon"}>
                            {
                                props.isStepThreeDone ? <FiCheck /> : <p>3</p>
                            }
                        </div>
                        <div className="heropayment-right-step">
                            <p>Tiket</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default HeroPayment;
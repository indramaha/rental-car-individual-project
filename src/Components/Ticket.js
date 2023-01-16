import {FiCheck,FiDownload} from "react-icons/fi"
import "./Ticket.css"

const Ticket = () => {
    return (  
        <div className="ticket-section-bg">
            <div className="ticket-section">
                <div className="ticket-chceck">
                    <FiCheck size={34}/>
                </div>
                <div className="ticket-success">
                    <p>Pembayaran Berhasil!</p>
                </div>
                <div className="ticket-instruct">
                    <p>Tunjukkan invoice ini ke petugas BCR di titik temu.</p>
                </div>
                <div className="ticket-pdf">
                    <div className="ticket-pdf-header">
                        <div className="ticket-pdf-invoice">
                            <p>Invoice</p>
                        </div>
                        <div className="ticket-pdf-btn">
                            <button><FiDownload size={18}/>Unduh</button>
                        </div>
                    </div>
                    <div>
                        <p>*no invoice</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
 
export default Ticket;
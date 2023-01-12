import "./PaymentConfirm.css"
import {FiCopy} from "react-icons/fi"

const PaymentConfirm = () => {
    return (
        <div className="paymentconfirm-section-bg">
            <div className="paymentconfirm-section">
                <div className="paymentconfirm-left">
                    <div className="paymentconfirm-infor-time">
                        <div>
                            <div>
                                <p>Selesaikan Pembayaran Sebelum</p>
                            </div>
                            <div>
                                <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                            </div>
                        </div>
                        <div>
                            <p>5pm</p>
                        </div>
                    </div>
                    <div className="paymentconfirm-bank-infor">
                        <div>
                            <p>Lakukan Transfer Ke</p>
                        </div>
                        <div>
                            <div>
                                <p>BCA</p>
                            </div>
                            <div>
                                <div>
                                    <p>BCA Transfer</p>
                                </div>
                                <div>
                                    <p>a.n Binar Car Rental</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Nomor Rekening</p>
                            </div>
                            <div>
                                <div>
                                    <p>54104257877</p>
                                </div>
                                <div>
                                    <FiCopy />
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <p>Total Bayar</p>
                            </div>
                            <div>
                                <div>
                                    <p>Rp 3.500.000</p>
                                </div>
                                <div>
                                    <FiCopy />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Intruksi Pembayaran</p>
                        </div>
                        <div>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
                <div className="paymentconfirm-right">
                    <p>asdasd</p>
                </div>
            </div>
        </div> 
    );
}

export default PaymentConfirm;
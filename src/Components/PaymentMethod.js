import { useEffect, useState } from "react";
import "./PaymentMethod.css"
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import moment from "moment/moment";
import 'moment/locale/id'
import {FiUsers, FiChevronDown, FiCheck} from "react-icons/fi"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import { convertToRupiah } from "../utils/function";
import { API } from "../const/endpoint";

const PaymentMethod = () => {
    const {id} = useParams()
    const [car, setCar] = useState({})
    const [isBcaTrue, setIsBcaTrue] = useState(false)
    const [isBniTrue, setIsBniTrue] = useState(false)
    const [isMandiriTrue, setIsMandiriTrue] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((ress) => {
                // console.log(ress.data)
                setCar(ress.data)
            })
            .catch((err) => console.log(err.message))
    },[id])

    const dateStart = moment(localStorage.getItem("start"))
    const dateEnd = moment(localStorage.getItem("end"))

    const longDate = Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))

    function PriceTotal(){
        const isPrice = car.price
        const dateCount = Math.round((dateEnd - dateStart) / (1000 * 60 * 60 * 24))
        const totalPrice = isPrice * (dateCount+1)
        return <p>Rp {convertToRupiah(totalPrice)}</p>
    }

    function ContextAwareToggle({ children, eventKey, callback }) {
        
        const decoratedOnClick = useAccordionButton(
            eventKey,
            () => callback && callback(eventKey),
        );
        return (
            <div onClick={decoratedOnClick} className="paymentmethod-detailorder-header">
                <div className="paymentmethod-detailorder-header-total">
                    <p>{children}</p>
                </div>
                <div className="paymentmethod-detailorder-header-right">
                    <div>
                        <FiChevronDown size={24}/>
                    </div>
                    <div className="paymentmethod-detailorder-header-price">
                        <PriceTotal />
                    </div>
                </div>
            </div>
        );
    }

    function TotalOrder() {
        return (
            <Accordion>
                <Card>
                    <Card.Header>
                        <ContextAwareToggle eventKey="0">Total</ContextAwareToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <div className="paymentmethod-detailorder-body">
                            <div>
                                <div className="paymentmethod-detailorder-body-harga">
                                    <p>Harga</p>
                                </div>
                                <div className="paymentmethod-detailorder-body-list-bg">
                                    <div>
                                        <ul>
                                            <li className="paymentmethod-detailorder-body-list">Sewa Mobil Rp.{convertToRupiah(car.price)} x {longDate} Hari</li>
                                        </ul>
                                    </div>
                                    <div className="paymentmethod-detailorder-body-harga-list">
                                        {<PriceTotal />}
                                    </div>
                                </div>
                            </div>
                            <div className="paymentmethod-detailorder-body-biayalain">
                                <div className="paymentmethod-detailorder-body-biayalain-title">
                                    <p>Biaya Lainnya</p>
                                </div>
                                <div className="paymentmethod-detailorder-body-biayalain-list-bg">
                                    <div>
                                        <ul>
                                            <li className="paymentmethod-detailorder-body-biayalain-list">Pajak</li>
                                        </ul>
                                    </div>
                                    <div className="paymentmethod-detailorder-body-biayalain-list-right">
                                        <p>Termasuk</p>
                                    </div>
                                </div>
                                <div className="paymentmethod-detailorder-body-biayalain-list-bg">
                                    <div>
                                        <ul>
                                            <li className="paymentmethod-detailorder-body-biayalain-list">Biaya makan sopir</li>
                                        </ul>
                                    </div>
                                    <div className="paymentmethod-detailorder-body-biayalain-list-right">
                                        <p>Termasuk</p>
                                    </div>
                                </div>
                            </div>
                            <div className="paymentmethod-detailorder-body-belumtermasuk">
                                <div className="paymentmethod-detailorder-body-biayalain-title">
                                    <p>Belum Termasuk</p>
                                </div>
                                <div className="paymentmethod-detailorder-body-biayalain-list-bg">
                                    <div>
                                        <ul>
                                            <li className="paymentmethod-detailorder-body-biayalain-list">Bensin</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="paymentmethod-detailorder-body-biayalain-list-bg">
                                    <div>
                                        <ul>
                                            <li className="paymentmethod-detailorder-body-biayalain-list">Tol dan parkir</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="paymentmethod-detailorder-body-total-button">
                                <div>
                                    <p>Total</p>
                                </div>
                                <div>
                                    <PriceTotal />
                                </div>
                            </div>
                            <div>
                                {(() => {
                                    if ((isBcaTrue === true) || (isBniTrue === true) || (isMandiriTrue === true)){
                                        return(
                                            <div onClick={handlePay} className="paymentmethod-detailorder-body-btn-active">
                                                <button>Bayar</button>
                                            </div>
                                        ) 
                                    } else {
                                        return(
                                            <div className="paymentmethod-detailorder-body-btn">
                                                <button>Bayar</button>
                                            </div>
                                        ) 
                                    }
                                })()}
                                
                            </div>
                        </div>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        );
    }

    const handleBca = () => {
        setIsBcaTrue(true)
        setIsBniTrue(false)
        setIsMandiriTrue(false)
        localStorage.setItem("bank", "bca")
    }

    const handleBni = () => {
        setIsBcaTrue(false)
        setIsBniTrue(true)
        setIsMandiriTrue(false)
        localStorage.setItem("bank", "bni")
    }

    const handleMandiri = () => {
        setIsBcaTrue(false)
        setIsBniTrue(false)
        setIsMandiriTrue(true)
        localStorage.setItem("bank", "mandiri")
    }

    const handlePay = () => {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                access_token: token
            },
        }
        const payload = {
            "start_rent_at": dateStart._d,
            "finish_rent_at": dateEnd._d,
            "car_id": id
        }

        axios
            .post(API.CUSTOMER_NEW_ORDER, payload, config)
            .then((ress) => {
                localStorage.setItem("car_id", id)
                navigate(`/payment-confirm/${ress.data.id}`)
                // localStorage.setItem("order-id", ress.data.id)
            })
            .catch((err) => console.log(err.message))
    }

    return (  
        <div className="paymentmethod-section-bg">
            <div className="paymentmethod-section">
                <div className="paymentmethod-head-order-bg">
                    <div className="paymentmethod-head-order">
                        <div className="paymentmethod-head-order-title">
                            <p>Detail Pesananmu</p>
                        </div>
                        <div className="paymentmethod-head-order-content">
                            <div className="paymentmethod-head-order-content-area">
                                <div className="paymentmethod-head-order-content-title">
                                    <p>Nama/Tipe Mobil</p>
                                </div>
                                <div className="paymentmethod-head-order-content-desc">
                                    <p>{car.name}</p>
                                </div>
                            </div>
                            <div className="paymentmethod-head-order-content-area">
                                <div className="paymentmethod-head-order-content-title">
                                    <p>Kategori</p>
                                </div>
                                <div className="paymentmethod-head-order-content-desc">
                                    {(() => {
                                        if (car.category === "small") {
                                            return <p>2 - 4 orang</p>
                                        } else if (car.category === "Medium") {
                                            return <p>4 - 6 orang</p>
                                        } else if (car.category === "large") {
                                            return <p>6 - 8 orang</p>
                                        } else {
                                            return <p>-</p>
                                        }
                                    })()}
                                </div>
                            </div>
                            <div className="paymentmethod-head-order-content-area">
                                <div className="paymentmethod-head-order-content-title">
                                    <p>Tanggal Mulai Sewa</p>
                                </div>
                                <div className="paymentmethod-head-order-content-desc">
                                    <p>{dateStart.format('LL')}</p>
                                </div>
                            </div>
                            <div className="paymentmethod-head-order-content-area">
                                <div className="paymentmethod-head-order-content-title">
                                    <p>Tanggal Akhir Sewa</p>
                                </div>
                                <div className="paymentmethod-head-order-content-desc">
                                    <p>{dateEnd.format("LL")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="paymentmethod-bank-detailorder">
                    <div className="paymentmethod-bank-bg">
                        <div className="paymentmethod-bank-title">
                            <p>Pilih Bank Transfer</p>
                        </div>
                        <div className="paymentmethod-bank-desc">
                            <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                        </div>
                        <div className="paymentmethod-bank-select-bg">
                            <div className="paymentmethod-bank-option-bg" onClick={handleBca}>
                                <div className="paymentmethod-bank-option-icon">
                                    <p>BCA</p>
                                </div>
                                <div className="paymentmethod-bank-option-desc-bg">
                                    <div className="paymentmethod-bank-option-desc">
                                        <p>BCA Transfer</p>
                                    </div>
                                    {
                                        isBcaTrue ? <div><FiCheck size={24} className="check-bank"/></div> : null
                                    }
                                </div>
                            </div>
                            <hr />
                            <div className="paymentmethod-bank-option-bg" onClick={handleBni}>
                                <div className="paymentmethod-bank-option-icon">
                                    <p>BNI</p>
                                </div>
                                <div className="paymentmethod-bank-option-desc-bg">
                                    <div className="paymentmethod-bank-option-desc">
                                        <p>BNI Transfer</p>
                                    </div>
                                    {
                                        isBniTrue ? <div><FiCheck size={24} className="check-bank"/></div> : null
                                    }
                                </div>
                            </div>
                            <hr />
                            <div className="paymentmethod-bank-option-bg" onClick={handleMandiri}>
                                <div className="paymentmethod-bank-option-icon">
                                    <p>Mandiri</p>
                                </div>
                                <div className="paymentmethod-bank-option-desc-bg">
                                    <div className="paymentmethod-bank-option-desc">
                                        <p>Mandiri Transfer</p>
                                    </div>
                                    {
                                        isMandiriTrue ? <div><FiCheck size={24} className="check-bank"/></div> : null
                                    }
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="paymentmethod-detailorder">
                        <div className="paymentmethod-detailorder-title">
                            <p>{car.name}</p>
                        </div>
                        {(() => {
                            if (car.category === "small") {
                                return(
                                    <div className="paymentmethod-detailorder-category">
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div className="paymentmethod-detailorder-category-text">
                                            <p>2 - 4 orang</p>
                                        </div>
                                    </div>
                                ) 
                            } else if (car.category === "Medium") {
                                return(
                                    <div className="paymentmethod-detailorder-category">
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div className="paymentmethod-detailorder-category-text">
                                            <p>4 - 6 orang</p>
                                        </div>
                                    </div>
                                ) 
                            } else if (car.category === "large") {
                                return(
                                    <div className="paymentmethod-detailorder-category">
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div className="paymentmethod-detailorder-category-text">
                                            <p>6 - 8 orang</p>
                                        </div>
                                    </div>
                                ) 
                            } else {
                                return(
                                    <div className="paymentmethod-detailorder-category">
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div className="paymentmethod-detailorder-category-text">
                                            <p>-</p>
                                        </div>
                                    </div>
                                ) 
                            }
                        })()}
                        <div className="paymentmethod-detailorder-total">
                            <TotalOrder />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentMethod;
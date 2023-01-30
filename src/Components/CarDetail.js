import { Link, useParams } from "react-router-dom";
import "./CarDetail.css"
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import Spinner from 'react-bootstrap/Spinner';
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FiUsers, FiCalendar} from "react-icons/fi"
import { convertToRupiah } from '../utils/function';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { handleCarById } from "../redux/action/carAction";
import { useDispatch, useSelector } from "react-redux";

const CarDetail = () => {
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state.car.carById);
    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;
    const {id} = useParams();
    const dispatch = useDispatch()

    const onHandleCarById = () => {
        dispatch(handleCarById(id)) 
    }

    useEffect(() => {
        localStorage.removeItem("car_id")
        localStorage.removeItem("start")
        localStorage.removeItem("end")
        localStorage.removeItem("bank")
        onHandleCarById()
        // eslint-disable-next-line
    },[])

    function PriceTotal(){
        const isPrice = state.car.carById.price
        const dateCount = Math.round((endDate - startDate) / (1000 * 60 * 60 * 24))
        const totalPrice = isPrice * (dateCount+1)
        if ((dateCount >= 0) && (dateCount < 7)) {
            return convertToRupiah(totalPrice)
        } else if (dateCount < 0) {
            return 0
        } else {
            return "- (Lebih dari 7 hari)"
        }
    }

    const handleBtnLp = () => {
        localStorage.setItem("start", startDate)
        localStorage.setItem("end", endDate)
    }

    function HandleButton() {
        if ((startDate != null) && (endDate != null)) {
            return(
                <Link to={`/payment/${state.car.carById.id}`} >
                    <button onClick={handleBtnLp} className="cardetail-right-desc-button">Lanjutkan Pembayaran</button>
                </Link>
            )
        } else  {
            return(
                <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Pilih Tanggal Sewa</Tooltip>}>
                    <button className="cardetail-right-desc-button-disable">Lanjutkan Pembayaran</button>
                </OverlayTrigger>
            ) 
        }
    }

    return (  
        <div className="cardetail-section-bg">
            <div className="cardetail-section">
                <div className="cardetail-left">
                    <p className="cardetail-left-p-bold">Tentang Paket</p>
                    <div className="cardetail-left-include-bg">
                        <div>
                            <p className="cardetail-left-p-bold">Include</p>
                        </div>
                        <div className="cardetail-left-list-bg">
                            <ul>
                                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                <li>Sudah termasuk bensin selama 12 jam</li>
                                <li>Sudah termasuk Tiket Wisata</li>
                                <li>Sudah termasuk pajak</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cardetail-left-exclude-bg">
                        <div>
                            <p className="cardetail-left-p-bold">Exclude</p>
                        </div>
                        <div className="cardetail-left-list-bg">
                            <ul>
                                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                <li>Tidak termasuk akomodasi penginapan</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cardetail-left-refund-bg">
                        <Accordion className="cardetail-left-accord">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Refund, Reschedule, Overtime</Accordion.Header>
                                <Accordion.Body className="cardetail-left-list-bg">
                                    <ul>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="cardetail-right">
                    {
                        Object.entries(state.car.carById).length ? (
                            <>
                                <div className="cardetail-right-img-bg">
                                    <img src={state.car.carById.image} alt={state.car.carById.name} className="cardetail-right-img"/>
                                </div>
                                <div className="cardetail-right-desc-bg">
                                    <div>
                                        <p className="cardetail-right-desc-name-p">{state.car.carById.name}</p>
                                    </div>
                                    <div className="cardetail-right-desc-category-bg">
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div>
                                            {(() => {
                                                if (state.car.carById.category === "small" ){
                                                    return(
                                                        <div>
                                                            <p className="cardetail-category-p">2 - 4 orang</p>
                                                        </div>
                                                    )
                                                } else if (state.car.carById.category === "Medium" ) {
                                                    return(
                                                        <div>
                                                            <p className="cardetail-category-p">4 - 6 orang</p>
                                                        </div>
                                                    )
                                                } else if (state.car.carById.category === "large" ) {
                                                    return(
                                                        <div>
                                                            <p className="cardetail-category-p">6 - 8 orang</p>
                                                        </div>
                                                    )
                                                } else {
                                                    return(
                                                        <div>
                                                            <p>-</p>
                                                        </div>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                    <div className="cardetail-right-desc-date-bg">
                                        <p className="cardetail-right-desc-date-title-p">Tentukan lama sewa mobil (max. 7 hari)</p>
                                        <div className="cardetail-right-desc-date-input-bg">
                                            <DatePicker
                                                selectsRange={true}
                                                startDate={startDate}
                                                endDate={endDate}
                                                minDate={new Date()}
                                                onChange={(update) => {
                                                    setDateRange(update);
                                                }}
                                                dateFormat="dd MMMM yyyy"
                                                isClearable={true}
                                                placeholderText="Pilih tanggal mulai dan tanggal akhir sewa"
                                                showDisabledMonthNavigation
                                            />
                                            <div>
                                                <FiCalendar size={18}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cardetail-right-desc-total">
                                        <div>
                                            <p className="cardetail-right-desc-total-p">Total</p>
                                        </div>
                                        <div>
                                            <p className="cardetail-right-desc-total-price-p">Rp <PriceTotal /></p>
                                        </div>
                                    </div>
                                    <div className="cardetail-right-desc-button-bg">
                                        <HandleButton />
                                    </div>
                                </div>
                            </>
                        ):(
                            <div className="cardetail-right-spinner"><Spinner animation="grow" variant="secondary" /></div>
                        )
                    }
                </div>
                
            </div>
        </div>
    );
}

export default CarDetail;

//date picker link
//https://reactdatepicker.com/#example-date-range-with-disabled-navigation-shown
// https://github.com/Hacker0x01/react-datepicker
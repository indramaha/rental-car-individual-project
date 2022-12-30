import { useParams } from "react-router-dom";
import "./CarDetail.css"
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from 'react-bootstrap/Spinner';
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {FiUsers, FiCalendar} from "react-icons/fi"
import { convertToRupiah } from '../utils/function';

const CarDetail = () => {
    const {id} = useParams();
    const [carDetail, setCarDetail] = useState([]);

    useEffect(() => {
        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`)
            .then((ress) => {
                setCarDetail(ress.data)
            })
            .catch((err) => console.log(err.message))
    },[])

    function Category () {
        const isCategory = carDetail.category
        if (isCategory === "small" ){
            return(
                <div>
                    <p className="cardetail-category-p">2 - 4 orang</p>
                </div>
            )
        } else if (isCategory === "medium" ) {
            return(
                <div>
                    <p className="cardetail-category-p">4 - 6 orang</p>
                </div>
            )
        } else if (isCategory === "large" ) {
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
    }

    const [dateRange, setDateRange] = useState([null, null]);
    const [startDate, endDate] = dateRange;

    // console.log("start", startDate)
    // console.log("end", endDate)
    // console.log("hasil", endDate-startDate)

    function PriceTotal(){
        const isPrice = carDetail.price
        return(
            convertToRupiah(isPrice)
        )
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
                        Object.entries(carDetail).length ? (
                            <>
                                <div className="cardetail-right-img-bg">
                                    <img src={carDetail.image} alt={carDetail.name} className="cardetail-right-img"/>
                                </div>
                                <div className="cardetail-right-desc-bg">
                                    <div>
                                        <p className="cardetail-right-desc-name-p">{carDetail.name}</p>
                                    </div>
                                    <div className="cardetail-right-desc-category-bg">
                                        <div>
                                            <FiUsers size={12}/>
                                        </div>
                                        <div>
                                            <Category />
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
                                            <p className="cardetail-right-desc-total-price-p"><PriceTotal /></p>
                                        </div>
                                    </div>
                                    <div className="cardetail-right-desc-button-bg">
                                        <button className="cardetail-right-desc-button">Lanjutkan Pembayaran</button>
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
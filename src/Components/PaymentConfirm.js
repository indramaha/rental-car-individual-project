import { useEffect, useState } from "react";
import "./PaymentConfirm.css"
import {FiCopy} from "react-icons/fi"
import axios from "axios";
import { useParams } from "react-router-dom";
import { convertToRupiah } from "../utils/function";

const PaymentConfirm = () => {
    const {id} = useParams()
    const [order, setOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState("")
    const norek = "54104257877"
    const [atm, setAtm] = useState(true)
    const [mBanking, setMBanking] = useState(false)
    const [clickBca, setClickBca] = useState(false)
    const [iBanking, setIBanking] = useState(false)

    const handleCopyPrice = () => {
        navigator.clipboard.writeText(totalPrice)
        alert("Price Copied!")
    }

    const handleCopyNorek = () => {
        navigator.clipboard.writeText(norek)
        alert("Bank Acc Copied!")
    }

    useEffect(() => {
        const token = localStorage.getItem("token")

        const config = {
            headers: {
                access_token: token
            },
        }

        axios
            .get(`https://bootcamp-rent-cars.herokuapp.com/customer/order/${id}`, config)
            .then((ress) => {
                setOrder(ress.data)
                setTotalPrice(ress.data.total_price)
            })
    },[id])

    const handleAtm = () => {
        setAtm(true)
        setMBanking(false)
        setClickBca(false)
        setIBanking(false)
    }

    const handleMBanking = () => {
        setAtm(false)
        setMBanking(true)
        setClickBca(false)
        setIBanking(false)
    }

    const handleClickBca = () => {
        setAtm(false)
        setMBanking(false)
        setClickBca(true)
        setIBanking(false)
    }

    const handleIBanking = () => {
        setAtm(false)
        setMBanking(false)
        setClickBca(false)
        setIBanking(true)
    }
    return (
        <div className="paymentconfirm-section-bg">
            <div className="paymentconfirm-section">
                <div className="paymentconfirm-left">
                    <div className="paymentconfirm-infor-time">
                        <div>
                            <div className="paymentconfirm-infor-time-title">
                                <p>Selesaikan Pembayaran Sebelum</p>
                            </div>
                            <div className="paymentconfirm-infor-time-desc">
                                <p>Rabu, 19 Mei 2022 jam 13.00 WIB</p>
                            </div>
                        </div>
                        <div>
                            <p>5pm</p>
                        </div>
                    </div>
                    <div className="paymentconfirm-bank-infor">
                        <div className="paymentconfirm-bank-infor-title">
                            <p>Lakukan Transfer Ke</p>
                        </div>
                        <div className="paymentconfirm-bank-infor-profile">
                            <div className="paymentconfirm-bank-infor-profile-icon">
                                <p>BCA</p>
                            </div>
                            <div>
                                <div className="paymentconfirm-bank-infor-profile-text">
                                    <p>BCA Transfer</p>
                                </div>
                                <div className="paymentconfirm-bank-infor-profile-text">
                                    <p>a.n Binar Car Rental</p>
                                </div>
                            </div>
                        </div>
                        <div className="paymentconfirm-bank-infor-text-copy-bg">
                            <div className="paymentconfirm-bank-infor-text-copy-title">
                                <p>Nomor Rekening</p>
                            </div>
                            <div className="paymentconfirm-bank-infor-text-copy">
                                <div className="paymentconfirm-bank-infor-text-copy-desc" onClick={handleCopyNorek}>
                                    <p>{norek}</p>
                                </div>
                                <div>
                                    <FiCopy onClick={handleCopyNorek} className="copy-icon"/>
                                </div>
                            </div>
                        </div>
                        <div className="paymentconfirm-bank-infor-text-copy-bg">
                            <div className="paymentconfirm-bank-infor-text-copy-title">
                                <p>Total Bayar</p>
                            </div>
                            <div className="paymentconfirm-bank-infor-text-copy">
                                <div className="paymentconfirm-bank-infor-text-copy-desc" onClick={handleCopyPrice}>
                                    <p>Rp {convertToRupiah(order.total_price)}</p>
                                </div>
                                <div>
                                    <FiCopy onClick={handleCopyPrice} className="copy-icon"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="paymentconfirm-instruct"> 
                        <div className="paymentconfirm-instruct-title">
                            <p>Intruksi Pembayaran</p>
                        </div>
                        <div className="paymentconfirm-instruct-headers-bg">
                            <div onClick={handleAtm} className={atm ? "paymentconfirm-instruct-headers-active":"paymentconfirm-instruct-headers"}>
                                <p>ATM BCA</p>
                            </div>
                            <div onClick={handleMBanking} className={mBanking ? "paymentconfirm-instruct-headers-active":"paymentconfirm-instruct-headers"}>
                                <p>M-BCA</p>
                            </div>
                            <div onClick={handleClickBca} className={clickBca ? "paymentconfirm-instruct-headers-active":"paymentconfirm-instruct-headers"}>
                                <p>BCA Klik</p>
                            </div>
                            <div onClick={handleIBanking} className={iBanking ? "paymentconfirm-instruct-headers-active":"paymentconfirm-instruct-headers"}>
                                <p>Internet Banking</p>
                            </div>
                        </div>
                        <div className="paymentconfirm-instruct-body">
                            {(() => {
                                if(atm === true){
                                    return(
                                        <ul>
                                            <li>Masukkan kartu ATM, lalu PIN</li>
                                            <li>Pilih menu “Transaksi Lainnya” – ‘Transfer” – “Ke Rek BCA Virtual Account”</li>
                                            <li>Masukkan nomor BCA Virtual Account: 70020+Order ID<br />
                                            Contoh:<br />
                                            No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                            <li>Layar ATM akan menampilkan konfirmasi, ikuti instruksi untuk menyelesaikan transaksi</li>
                                            <li>Ambil dan simpanlah bukti transaksi tersebut</li>
                                        </ul>
                                    )
                                } else if(mBanking === true){
                                    return(
                                        <ul>
                                            <li>Login dengan akun Mbanking Anda</li>
                                            <li>Pilih menu “m-Transfer”, pilih “BCA Virtual Account”</li>
                                            <li>Input Kode Virtual Account: 39107+20+NRP<br />
                                            Contoh:<br />
                                            No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                            <li>Klik menu “Simpan Daftar Transfer” untuk menyimpan nomor pembayaran</li>
                                            <li>Klik OK kemudian Kirim/Send</li>
                                            <li>Input PIN BCA untuk mengotorisasi</li>
                                            <li>Ikuti instruksi untuk menyelesailkan transaksi</li>
                                        </ul>
                                    )
                                } else if(clickBca === true){
                                    return(
                                        <ul>
                                            <li>Buka halaman BCAKlikPay</li>
                                            <li>Pilih menu Registrasi</li>
                                            <li>Baca Syarat dan Ketentuan</li>
                                            <li>Isi data dengan benar</li>
                                            <li>Pilih sumber dana pembayaran. Untuk saat ini DTKP hanya mendukung metode pembayaran BCA KlikPay dengan sumber dana dari KlikBCA</li>
                                            <li>Anda akan menerima kode aktivasi lewat email dan SMS</li>
                                        </ul>
                                    )
                                } else if(iBanking === true){
                                    return(
                                        <ul>
                                            <li>Login ke KlikBCA Individual</li>
                                            <li>Pilih Menu “Transfer”</li>
                                            <li>Pilih Menu “Transfer ke BCA Virtual Account”</li>
                                            <li>Input Kode Virtual Account: 39107+20+NRP<br />
                                            Contoh:<br />
                                            No. Peserta: 12345678, maka ditulis 7002012345678</li>
                                            <li>Pilih “Lanjutkan” untuk melanjutkan pembayaran</li>
                                            <li>Masukkan Respon KeyBCA Apply 1</li>
                                            <li>Ikuti instruksi untuk menyelesaikan transaksi</li>
                                        </ul>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </div>
                <div className="paymentconfirm-right">
                    <div className="paymentconfirm-fstep">
                        <p>Klik konfirmasi pembayaran untuk mempercepat proses pengecekan</p>
                    </div>
                    <div className="paymentconfirm-fstep-btn">
                        <button>Konfirmasi Pembayaran</button>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default PaymentConfirm;
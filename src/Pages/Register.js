import LogoLogReg from "../Assets/LogoLogReg.png"
import LpDekstop from "../Assets/Landing page - Desktop.png"
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {FiEye, FiEyeOff} from "react-icons/fi"
import axios from "axios";
import { API } from "../const/endpoint";

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordShown, setPasswordShown] = useState(false)

    const navigate = useNavigate()

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handlePasswordShown = () => {
        setPasswordShown(!passwordShown)
    }

    function EyeIcons(){
        if (passwordShown === true) {
            return <FiEye className="fieye"/>
        } else {
            return <FiEyeOff className="fieyeoff"/>
        }
    }

    const handleRegisBtn = () => {
        const payload = {
            "email": email,
            "password": password,
            "role": "Admin"
        }

        axios
            .post(API.CUSTOMER_REGIS, payload)
            .then((ress) => {
                console.log(ress)
                navigate('/customer-login')
            })
            .catch((err) => console.log(err.message))
    }

    return (  
        <div className="register-section-bg">
            <div className="register-section">
                <div className="register-left">
                    <div>
                        <img src={LogoLogReg} alt="register" />
                    </div>
                    <div className="register-left-welcome-bg">
                        <h1 className="register-left-welcome-p">Sign Up</h1>
                    </div>
                    <div className="register-left-form-bg">
                        <div>
                            <p className="register-left-form-p">Name*</p>
                        </div>
                        <div className="register-left-input-bg">
                            <input placeholder="Nama Lengkap" type="text" className="register-left-input" onChange={handleName} required/>
                        </div>
                        <div className="register-left-form-title">
                            <p className="register-left-form-p">Email*</p>
                        </div>
                        <div className="register-left-input-bg">
                            <input placeholder="Contoh: johndee@gmail.com" type="email" className="register-left-input" onChange={handleEmail} required/>
                        </div>
                        <div className="register-left-form-title">
                            <p className="register-left-form-p">Create Password*</p>
                        </div>
                        <div className="register-left-input-password-bg">
                            <input placeholder="6+ karakter" type={passwordShown ? "text":"password"} className="register-left-input-password" onChange={handlePassword} required/>
                            <i onClick={handlePasswordShown}>
                                <EyeIcons />
                            </i>
                        </div>
                    </div>
                    <div className="register-left-button-bg">
                        <button onClick={handleRegisBtn} className="register-left-button">SignUp</button>
                    </div>
                    <div className="register-left-bottom">
                        <div>
                            <p className="register-left-bottom-p">Already have an account?</p>
                        </div>
                        <div>
                            <Link to={"/customer-login"}>
                                <p className="register-left-bottom-link-p">Sign In here</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="register-right">
                    <div className="register-right-title">
                        <h1 className="register-right-title-h1">Binar Car Rental</h1>
                    </div>
                    <div className="register-right-img-bg">
                        <img src={LpDekstop} alt="Dekstop" className="register-right-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
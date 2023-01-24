import LogoLogReg from "../Assets/LogoLogReg.png"
import LpDekstop from "../Assets/Landing page - Desktop.png"
import "./Register.css"
import { Link, useNavigate } from "react-router-dom";
import {FiEye, FiEyeOff} from "react-icons/fi"
import axios from "axios";
import { API } from "../const/endpoint";
import { useDispatch, useSelector } from "react-redux";
import { inputEmail, inputPassword, passwordShow } from "../redux/action/inputAuthAction";

const Register = () => {
    const state = useSelector((rootReducers) => rootReducers)
    console.log(state)

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleEmail = (e) => {
        dispatch(inputEmail(e))
    }

    const handlePassword = (e) => {
        dispatch(inputPassword(e))
    }

    const handlePasswordShown = () => {
        dispatch(passwordShow(!state.inputAuth.isPwdShow))
    }

    function EyeIcons(){
        if (state.inputAuth.isPwdShow === true) {
            return <FiEye className="fieye"/>
        } else {
            return <FiEyeOff className="fieyeoff"/>
        }
    }

    const handleRegisBtn = () => {
        const payload = {
            "email": state.inputAuth.email,
            "password": state.inputAuth.password,
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
                            <input placeholder="Nama Lengkap" type="text" className="register-left-input" required/>
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
                            <input placeholder="6+ karakter" type={state.inputAuth.isPwdShow ? "text":"password"} className="register-left-input-password" onChange={handlePassword} required/>
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
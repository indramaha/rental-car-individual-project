import LogoLogReg from "../Assets/LogoLogReg.png"
import LpDekstop from "../Assets/Landing page - Desktop.png"
import { Link, useNavigate } from "react-router-dom"
import "./Login.css"
import {FiEye, FiEyeOff} from "react-icons/fi"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { handleLogin } from "../redux/action/authAction"

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state);

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleRedirect = () => {
        if(state.login.message === "Created"){
            navigate("/searchcar")
        }
    }

    useEffect(() => {
        handleRedirect()
        // eslint-disable-next-line
    },[state.login.message])

    const handlePasswordShown = () => {
        setPasswordShown(!passwordShown)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLoginBtn = () => {
        const payload = {
        "email": email,
        "password": password
        }
        dispatch(handleLogin(payload))
    }

    function EyeIcons(){
        if (passwordShown === true) {
            return <FiEye className="fieye"/>
        } else {
            return <FiEyeOff className="fieyeoff"/>
        }
    }

    return (  
        <div className="login-section-bg">
            <div className="login-section">
                <div className="login-left">
                    <div>
                        <img src={LogoLogReg} alt="Login" />
                    </div>
                    <div className="login-left-welcome-bg">
                        <h1 className="login-left-welcome-p">Welcome Back!</h1>
                    </div>
                    <div className="login-left-form-bg">
                        <div>
                            <p className="login-left-form-p">Email</p>
                        </div>
                        <div className="login-left-input-bg">
                            <input placeholder="Contoh: johndee@gmail.com" type="email" onChange={handleEmail} className="login-left-input"/>
                        </div>
                        <div className="login-left-password-bg">
                            <p className="login-left-form-p">Password</p>
                        </div>
                        <div className="login-left-input-password-bg">
                            <input placeholder="6+ karakter" type={passwordShown ? "text":"password"} onChange={handlePassword} className="login-left-input-password"/>
                            <i onClick={handlePasswordShown}>
                                <EyeIcons />
                            </i>
                        </div>
                    </div>
                    <div className="login-left-button-bg">
                        <button onClick={handleLoginBtn} className="login-left-button">Sign In</button>
                    </div>
                    <div className="login-left-bottom">
                        <div>
                            <p className="login-left-bottom-p">Don’t have an account?</p>
                        </div>
                        <div>
                            <Link to={"/customer-register"}>
                                <p className="login-left-bottom-link-p">Sign Up for free</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="login-right">
                    <div className="login-right-title">
                        <h1 className="login-right-title-h1">Binar Car Rental</h1>
                    </div>
                    <div className="login-right-img-bg">
                        <img src={LpDekstop} alt="Dekstop" className="login-right-img"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
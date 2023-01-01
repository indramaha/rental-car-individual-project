import { Link, useNavigate } from 'react-router-dom';
import Logo from '../Assets/logo.png'
import './NavBar.css'
import { useEffect, useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FiUser} from "react-icons/fi"

const NavBar = () => {
    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token === null) {
            setIsLogin(false)
        } else {
            setIsLogin(true)
        }
    },[])

    console.log(isLogin)

    const navIconLogin = (<FiUser />)

    const navigate = useNavigate()

    const handleLogOut = (() => {
        localStorage.removeItem("token")
        navigate("/")
    })
    return (  
        <div className='navbar-section-bg'>
            <div className='navbar-section'>
                <div className='navbar-left'>
                    <Link to='/'>
                        <img src={Logo} alt='logo'/>
                    </Link>
                </div>
                <div className='navbar-right'>
                    <div>
                        <p>Our Services</p>
                    </div>
                    <div>
                        <p>Why Us</p>
                    </div>
                    <div>
                        <p>Testimonial</p>
                    </div>
                    <div>
                        <p>FAQ</p>
                    </div>
                    <div>
                        {
                            isLogin ? (
                                <div className='navbar-login-bg'>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={navIconLogin}
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item onClick={handleLogOut}>Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                </div>
                                
                            ):(
                                <Link to={"/customer-register"}>
                                    <button className='navbar-button-register'>Register</button>
                                </Link>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;
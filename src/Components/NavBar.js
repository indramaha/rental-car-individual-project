import { Link } from 'react-router-dom';
import Logo from '../Assets/logo.png'
import './NavBar.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import {FiUser} from "react-icons/fi"
import { useDispatch, useSelector } from 'react-redux';
import { handleLogOut } from '../redux/action/authAction';

const NavBar = () => {
    const state = useSelector(rootReducers => rootReducers)
    // console.log(state.login.message)
    const dispatch = useDispatch()
    const navIconLogin = (<FiUser />)

    const onHandleLogOut = () => {
        dispatch(handleLogOut())
    }
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
                            state.login.message === "Created" ? (
                                <div className='navbar-login-bg'>
                                    <NavDropdown
                                        id="nav-dropdown-dark-example"
                                        title={navIconLogin}
                                        menuVariant="dark"
                                    >
                                        <NavDropdown.Item onClick={onHandleLogOut}>Sign Out</NavDropdown.Item>
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
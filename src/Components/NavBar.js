import Logo from '../Assets/logo.png'
import './NavBar.css'

const NavBar = () => {
    return (  
        <div className='navbar-section-bg'>
            <div className='navbar-section'>
                <div className='navbar-left'>
                    <img src={Logo} alt='logo'/>
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
                        <button className='navbar-button-register'>Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NavBar;
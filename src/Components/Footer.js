import './Footer.css'
import Logo from "../Assets/logo.png"
import {FiFacebook, FiInstagram, FiTwitter, FiMail, FiTwitch} from "react-icons/fi"


const Footer = () => {
    return (  
        <div className='footer-section-bg'>
            <div className='footer-section'>
                <div className='footer-bio-bg'>
                    <div className='footer-bio-location'>
                        <p className='footer-p-bold'>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    </div>
                    <div>
                        <p className='footer-p-bold'>binarcarrental@gmail.com</p>
                    </div>
                    <div>
                        <p className='footer-p-bold'>081-233-334-808</p>
                    </div>
                </div>
                <div className='footer-nav-bg'>
                    <div>
                        <p>Our services</p>
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
                </div>
                <div>
                    <div>
                        <p className='footer-p-bold'>Connect with us</p>
                    </div>
                    <div className='footer-socmed-bg'>
                        <div className='footer-socmed-icons'>
                            <FiFacebook size={20}/>
                        </div>
                        <div className='footer-socmed-icons'>
                            <FiInstagram size={20}/>
                        </div>
                        <div className='footer-socmed-icons'>
                            <FiTwitter size={20}/>
                        </div>
                        <div className='footer-socmed-icons'>
                            <FiMail size={20}/>
                        </div>
                        <div className='footer-socmed-icons'>
                            <FiTwitch size={20}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='footer-p-bold'>Copyright Binar 2022</p>
                    </div>
                    <div className='footer-logo-bg'>
                        <img src={Logo} alt="binar-rental" />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;
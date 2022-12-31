import './Hero.css'
import HeroImage from '../Assets/img_car.png'
import { Link } from 'react-router-dom';

const Hero = (props) => {
    return (  
        <div className='hero-section-bg'>
            <div className='hero-section'>
                {
                    props.onOff ? (
                        <div className='hero-filterbutton-on'></div>
                    ):(
                        <div className='hero-section'>
                            <div className='hero-left'>
                                <div>
                                    <h1 className='hero-left-title-p'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                                </div>
                                <div className='hero-left-desc'>
                                    <p className='hero-left-desc'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                </div>
                                {
                                    props.isBtnShow ? (
                                        <div className='hero-left-button-bg'>
                                            <Link to='/searchcar' >
                                                <button className='hero-left-button'>Mulai Sewa Mobil</button>
                                            </Link>
                                        </div>
                                    ):(null) 
                                }
                            </div>
                            <div className='hero-right'>
                                <img src={HeroImage} alt="car-content" className='hero-img'/>
                            </div>
                        </div>
                    )
                }
                
            </div>
        </div>
    );
}

export default Hero;
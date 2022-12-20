import './Hero.css'
import HeroImage from '../Assets/img_car.png'

const Hero = () => {
    return (  
        <div className='hero-section-bg'>
            <div className='hero-section'>
                <div className='hero-left'>
                    <div>
                        <h1 className='hero-left-title-p'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                    </div>
                    <div className='hero-left-desc'>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </div>
                    <div className='hero-left-button-bg'>
                        <button className='hero-left-button'>Mulai Sewa Mobil</button>
                    </div>
                </div>
                <div className='hero-right'>
                    <img src={HeroImage} alt="car-content" className='hero-img'/>
                </div>
            </div>
        </div>
    );
}

export default Hero;
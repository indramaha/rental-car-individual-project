import { Link } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (  
        <div className='banner-section-bg'>
            <div className='banner-section'>
                <div className='banner-bg'>
                    <div>
                        <h2 className='banner-title-h2'>Sewa Mobil di (Lokasimu) Sekarang</h2>
                    </div>
                    <div className='banner-desc-bg'>
                        <p className='banner-desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    </div>
                    <div className='banner-button-bg'>
                        <Link to='/searchcar'>
                            <button className='banner-button'>Mulai Sewa Mobil</button>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    );
}
 
export default Banner;
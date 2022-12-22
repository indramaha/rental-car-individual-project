import './OurServices.css'
import ServiceLogo from '../Assets/img_service.png'
import {FiCheck} from 'react-icons/fi'

const OurServices = () => {
    return (  
        <div className='ourservices-section-bg'>
            <div className='ourservices-section'>
                <div className='ourservices-left'>
                    <img src={ServiceLogo} alt='service' className=''/>
                </div>
                <div className='ourservices-right'>
                    <div>
                        <h2 className='ourservices-right-title-h2'>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                    </div>
                    <div className='ourservices-right-desc'>
                        <p className='ourservices-right-desc-p'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    </div>
                    <div>
                        <div className='ourservices-right-list'>
                            <div className='ourservices-right-list-icon-bg'>
                                <FiCheck size={16} className='ourservices-right-list-icon'/>
                            </div>
                            <div className='ourservices-right-list-p-bg'>
                                <p className='ourservices-right-list-p'>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                            </div>
                        </div>
                        <div className='ourservices-right-list'>
                            <div className='ourservices-right-list-icon-bg'>
                                <FiCheck size={16} className='ourservices-right-list-icon'/>
                            </div>
                            <div className='ourservices-right-list-p-bg'>
                                <p className='ourservices-right-list-p'>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                            </div>
                        </div>
                        <div className='ourservices-right-list'>
                            <div className='ourservices-right-list-icon-bg'>
                                <FiCheck size={16} className='ourservices-right-list-icon'/>
                            </div>
                            <div className='ourservices-right-list-p-bg'>
                                <p className='ourservices-right-list-p'>Sewa Mobil Jangka Panjang Bulanan</p>
                            </div>
                        </div>
                        <div className='ourservices-right-list'>
                            <div className='ourservices-right-list-icon-bg'>
                                <FiCheck size={16} className='ourservices-right-list-icon'/>
                            </div>
                            <div className='ourservices-right-list-p-bg'>
                                <p className='ourservices-right-list-p'>Gratis Antar - Jemput Mobil di Bandara</p>
                            </div>
                        </div>
                        <div className='ourservices-right-list'>
                            <div className='ourservices-right-list-icon-bg'>
                                <FiCheck size={16} className='ourservices-right-list-icon'/>
                            </div>
                            <div className='ourservices-right-list-p-bg'>
                                <p className='ourservices-right-list-p'>Layanan Airport Transfer / Drop In Out</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default OurServices;
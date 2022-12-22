import './WhyUs.css'
import {FiThumbsUp, FiTag, FiClock, FiAward} from 'react-icons/fi'

const WhyUs = () => {
    return (  
        <div className='whyus-section-bg'>
            <div className='whyus-section'>
                <div>
                    <h2 className='whyus-title-p'>Why Us?</h2>
                </div>
                <div className='whyus-desc'>
                    <p>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className='whyus-card-bg'>
                    <div className='whyus-card'>
                        <div className='whyus-card-icon-thumbsup'>
                            <FiThumbsUp size={20}/>
                        </div>
                        <div className='whyus-card-title'>
                            <p className='whyus-card-title-p'>Mobil Lengkap</p>
                        </div>
                        <div className='whyus-card-desc'>
                            <p className='whyus-card-desc-p'>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                        </div>
                    </div>
                    <div className='whyus-card'>
                        <div className='whyus-card-icon-tag'>
                            <FiTag size={20}/>
                        </div>
                        <div className='whyus-card-title'>
                            <p className='whyus-card-title-p'>Harga Murah</p>
                        </div>
                        <div className='whyus-card-desc'>
                            <p className='whyus-card-desc-p'>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                        </div>
                    </div>
                    <div className='whyus-card'>
                        <div className='whyus-card-icon-clock'>
                            <FiClock size={20}/>
                        </div>
                        <div className='whyus-card-title'>
                            <p className='whyus-card-title-p'>Layanan 24 Jam</p>
                        </div>
                        <div className='whyus-card-desc'>
                            <p className='whyus-card-desc-p'>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                        </div>
                    </div>
                    <div className='whyus-card'>
                        <div className='whyus-card-icon-award'>
                            <FiAward size={20}/>
                        </div>
                        <div className='whyus-card-title'>
                            <p className='whyus-card-title-p'>Sopir Profesional</p>
                        </div>
                        <div className='whyus-card-desc'>
                            <p className='whyus-card-desc-p'>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default WhyUs;
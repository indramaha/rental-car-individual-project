import './CarsShow.css'
import { convertToRupiah } from '../utils/function';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

const CarsShow = (props) => {
    return (  
        <div className='carsshow-section-bg'>
            <div className='carsshow-section'>
                <div className='carsshow-card-bg'>
                    {
                        !!props.carsData.length ? props.carsData.map((item, i) => {
                            return(
                                <div className='carsshow-card' key={i}>
                                    <div className='carsshow-card-img-bg'>
                                        <img src={item.image} alt={item.name} className='carsshow-card-img'/>
                                    </div>
                                    <div className='carsshow-card-name'>
                                        <p>{item.name}</p>
                                    </div>
                                    <div className='carsshow-card-price'>
                                        <p className='carsshow-card-price-p'>Rp {convertToRupiah(item.price)} /hari</p>
                                    </div>
                                    <div className='carsshow-card-desc'>
                                        <p className='carsshow-card-desc-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                    </div>
                                    <div className='carsshow-card-btn-bg'>
                                        <Link to={`/detail-car/${item.id}`}>
                                            <button className='carsshow-card-btn'>Pilih Mobil</button>
                                        </Link>
                                    </div>
                                </div>
                            )
                        }):(<Spinner animation="border" variant="secondary" />)
                    }
                </div>
                
            </div>
        </div>
    );
}
 
export default CarsShow;
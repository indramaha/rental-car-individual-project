import './FilterBox.css'
import Form from 'react-bootstrap/Form';
import CategoryIcon from "../Assets/fi_calendar-disable.png"
import PriceIcon from "../Assets/fi_clock-disable.png"
import StatusIcon from "../Assets/fi_users-disable.png"

const FilterBox = (props) => {

    const detail = props.onOff
    const buttonOnOff = props.detailOff
    function ButtonFIlter(){
        if (buttonOnOff == true){
            return null
        } else if (detail == true){
            return <button className='filterbox-button' onClick={props.buttonFilter}>Edit</button>
        } else if (detail == false){
            return <button className='filterbox-button' onClick={props.buttonFilter}>Cari Mobil</button>
        } else {
            return null
        }
    }
    
    return (  
        <div className={props.onOff ? "filterbox-section-bg-true":'filterbox-section-bg'}>
            <div className={props.detailOff ? "filterbox-section-disable":'filterbox-section'}>
                <div>
                    {
                        props.onOff ? <p className='filterbox-hasilpencarian-p'>Pencarianmu</p>:null
                    }
                    <div className={props.onOff ? 'filterbox-title-bg':null}>
                        <p className='filterbox-title-p'>Nama Mobil</p>
                    </div>
                    <div className='filterbox-input-bg'>
                        {
                            props.detailOff ? (
                                <div className='filterbox-select-disable'></div>
                            ):(
                                <input type='text' placeholder='Ketik nama/tipe mobil' className='filterbox-input' onChange={props.hName}/>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Kategori</p>
                    </div>
                    <div className='filterbox-select-bg'>
                        {
                            props.detailOff ? (
                                <div className='filterbox-select-disable'><img src={CategoryIcon} alt="category" /></div>
                            ):(
                                <Form.Select onChange={props.hCategory}>
                                    <option value="">Masukan Kapasitas Mobil</option>
                                    <option value="small">2 - 4 orang</option>
                                    <option value="medium">4 - 6 orang</option>
                                    <option value="large">6 - 8 orang</option>
                                </Form.Select>
                            )
                        }
                        
                    </div>
                </div>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Harga</p>
                    </div>
                    <div className='filterbox-select-bg'>
                        {
                            props.detailOff ? (
                                <div className='filterbox-select-disable'><img src={PriceIcon} alt="price" /></div>
                            ):(
                                <Form.Select onChange={props.hPrice}>
                                    <option value="default">Masukan Harga Sewa per Hari</option>
                                    <option value="cheap">&lt; Rp. 400.000</option>
                                    <option value="middle">Rp. 400.000 - Rp. 600.000</option>
                                    <option value="expensive">&gt; Rp. 600.000</option>
                                </Form.Select>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Status</p>
                    </div>
                    <div className='filterbox-select-bg'>
                        {
                            props.detailOff ? (
                                <div className='filterbox-select-disable'><img src={StatusIcon} alt="status" /></div>
                            ):(
                                <Form.Select>
                                    <option value="">Disewa</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                </Form.Select>
                            )
                        }
                    </div>
                </div>
                <div>
                    <ButtonFIlter />
                </div>
            </div>
        </div>
    );
}
 
export default FilterBox;
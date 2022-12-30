import './FilterBox.css'
import Form from 'react-bootstrap/Form';

const FilterBox = (props) => {
    return (  
        <div className='filterbox-section-bg'>
            <div className='filterbox-section'>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Nama Mobil</p>
                    </div>
                    <div className='filterbox-input-bg'>
                        <input type='text' placeholder='Ketik nama/tipe mobil' className='filterbox-input' onChange={props.hName}/>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Kategori</p>
                    </div>
                    <div className='filterbox-select-bg'>
                        <Form.Select onChange={props.hCategory}>
                            <option value="">Masukan Kapasitas Mobil</option>
                            <option value="small">2 - 4 orang</option>
                            <option value="medium">4 - 6 orang</option>
                            <option value="large">6 - 8 orang</option>
                        </Form.Select>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Harga</p>
                    </div>
                    <div className='filterbox-select-bg'>
                        <Form.Select onChange={props.hPrice}>
                            <option value="default">Masukan Harga Sewa per Hari</option>
                            <option value="cheap">&lt; Rp. 400.000</option>
                            <option value="middle">Rp. 400.000 - Rp. 600.000</option>
                            <option value="expensive">&gt; Rp. 600.000</option>
                        </Form.Select>
                    </div>
                </div>
                <div>
                    <div>
                        <p className='filterbox-title-p'>Status</p>
                    </div>
                    <div className='filterbox-select-bg'>
                        <Form.Select>
                            <option value="">Disewa</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                        </Form.Select>
                    </div>
                </div>
                <div>
                    <button className='filterbox-button' onClick={props.buttonFilter}>Cari Mobil</button>
                </div>
            </div>
        </div>
    );
}
 
export default FilterBox;
import Dropdown from 'react-bootstrap/Dropdown';
import usaFlag from '../../assets/images/country/united-states.png'
import usaFlag1 from '../../assets/images/country/united-kingdom.png'
import usaFlag2 from '../../assets/images/country/germany.png'
import usaFlag3 from '../../assets/images/country/turkish.png'
import { useState } from 'react';
function BasicExample() {

    const [lang, setLang] = useState({
        name: 'English',
        img: usaFlag
    })
    return (
        <Dropdown className='shadow-none'>
            <Dropdown.Toggle style={{ backgroundColor: 'transparent', outline: 'none', border: 'none', display: 'flex', color: 'white' }} variant="success" id="dropdown-basic">
                <img src={lang.img} style={{ width: '20px', height: '20px', marginRight: '12px', objectFit:'contain' }} />
                <p style={{ transform: 'translate(-5px,8px)' }}>{lang.name}</p>

            </Dropdown.Toggle>

            <Dropdown.Menu >
                <Dropdown.Item onClick={()=>setLang({name:'English', img:usaFlag1})} eventKey="1" style={{ display: 'flex', alignItems: 'center', gap: '5px' }} href="#/action-1">
                    <img src={usaFlag1} style={{ width: '20px', height: '20px', marginRight: '12px' }} />
                    <p className='m-0'>Engilish</p></Dropdown.Item>
                <Dropdown.Item eventKey="2"  onClick={()=>setLang({name:'German', img:usaFlag2})} style={{ display: 'flex', alignItems: 'center', gap: '5px' }} href="#/action-2">
                    <img src={usaFlag2} style={{ width: '20px', height: '20px', marginRight: '12px' }} />
                    <p className='m-0'>Germany</p></Dropdown.Item>
                <Dropdown.Item eventKey="3"  onClick={()=>setLang({name:'Turkish', img:usaFlag3})} style={{ display: 'flex', alignItems: 'center', gap: '5px' }} href="#/action-3">
                    <img src={usaFlag3} style={{ width: '20px', height: '15px', marginRight: '12px' }} />
                    <p className='m-0'>Turki</p></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;
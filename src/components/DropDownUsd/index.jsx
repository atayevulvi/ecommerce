import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function BasicExample() {
    const [sec, setSec] = useState({
        name: 'AUD'
    })
    return (
        <Dropdown>


            <Dropdown.Toggle style={{ display: 'flex', backgroundColor: 'transparent', outline: 'none', border: 'none' }} variant="success" id="dropdown-basic">
                <p style={{ transform: 'translate(-5px,8px)' }}>{sec.name}</p>
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: '30', height: '125px' }}>
                <Dropdown.Item onClick={() => setSec({ name: 'EUR' })} href="#/action-1"><p>EUR</p></Dropdown.Item>
                <Dropdown.Item onClick={() => setSec({ name: 'USD' })} href="#/action-2"><p>USD</p></Dropdown.Item>
                <Dropdown.Item onClick={() => setSec({ name: 'CRY' })} href="#/action-3"><p>CRY</p></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;
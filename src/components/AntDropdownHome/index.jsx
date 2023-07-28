import { AiOutlineDown } from 'react-icons/ai';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';

export default function AntDropdown() {
    const items = [
        {
            key: '1',
            label: (
                <NavLink className="dropdown-item" to="/index">
                    Kartshop
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink className="dropdown-item" to="/index-2">
                    Sweetshop
                </NavLink>
            ),


        },
        {
            key: '3',
            label: (
                <NavLink className="dropdown-item" to="/index-3">
                    Organic
                </NavLink>
            ),

        },
        {
            key: '4',
            label: (
                <NavLink className="dropdown-item" to="/index-4">
                    Supershop
                </NavLink>
            ),

        },
        {
            key: '5',
            label: (
                <NavLink className="dropdown-item" to="/index-5">
                    Classic shop
                </NavLink>
            ),

        },
        {
            key: '6',
            label: (
                <NavLink className="dropdown-item" to="/index-6">
                    Furniture
                </NavLink>
            ),

        },
        {
            key: '7',
            label: (
                <NavLink className="dropdown-item" to="/index-3">
                    Organic
                </NavLink>
            ),

        },
        {
            key: '8',
            label: (
                <NavLink className="dropdown-item" to="/index-7">
                    Search Oriented
                </NavLink>
            ),

        },
        {
            key: '9',
            label: (
                <NavLink className="dropdown-item" to="/index-8">
                    Category Focus
                </NavLink>
            ),

        },
        {
            key: '9',
            label: (
                <NavLink className="dropdown-item" to="/index-9">
                    Fashion
                </NavLink>
            ),

        },

    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ cursor: 'pointer',color:"#0da487",marginTop:'6px',transform:'translate(-75px)' }}>
                        Home
                        <AiOutlineDown style={{fontSize:'15px',marginRight:'5px',transform:'translateX(-5px)'}}/>
                    </Space>
                </a>
            </Dropdown>

        </>
    )
}

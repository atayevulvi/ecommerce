import { AiOutlineDown } from 'react-icons/ai';
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';

export default function AntDropdown() {
    const items = [
        {
            key: '1',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/seller-become"
                >
                    Become a Seller
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/seller-dashboard"
                >
                    Seller Dashboard
                </NavLink>
            ),


        },
        {
            key: '3',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/seller-detail"
                >
                    Seller Detail
                </NavLink>
            ),

        },
        {
            key: '4',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/seller-detail-2"
                >
                    Seller Detail 2
                </NavLink>
            ),

        },
        {
            key: '5',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/seller-grid"
                >
                    Seller Grid
                </NavLink>
            ),

        },
        {
            key: '6',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/seller-grid-2"
                >
                    Seller Grid 2
                </NavLink>
            ),
        }


    ];
    return (
        <>
            <Dropdown
                menu={{
                    items,
                }}
            >
                <a onClick={(e) => e.preventDefault()}>
                    <Space style={{ cursor: 'pointer', color: "#0da487", marginTop: '6px', transform: 'translateX(90px)' }}>
                        Seller
                        <AiOutlineDown style={{ fontSize: '15px', marginRight: '5px', transform: 'translateX(-5px)' }} />
                    </Space>
                </a>
            </Dropdown>

        </>
    )
}

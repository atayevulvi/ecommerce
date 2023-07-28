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
                    to="/shop-category-slider"
                >
                    Shop Category Slider
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/shop"
                >
                    Shop Category Sidebar
                </NavLink>
            ),


        },
        {
            key: '3',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/shop-banner"
                >
                    Shop Banner
                </NavLink>
            ),

        },
        {
            key: '4',
            label: (
                <NavLink
                    className="dropdown-item"
                    to="/shop-left-sidebar"
                >
                    Shop Left Sidebar
                </NavLink>
            ),

        },
        {
            key: '5',
            label: (
                <NavLink className="dropdown-item" to="/shop-list">
                Shop List
            </NavLink>
            ),

        },
        {
            key: '6',
            label: (
                <NavLink
                className="dropdown-item"
                to="/shop-right-sidebar"
            >
                Shop Right Sidebar
            </NavLink>
            ),

        },
        {
            key: '7',
            label: (
                <NavLink
                className="dropdown-item"
                to="/shop-top-filter"
            >
                Shop Top Filter
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
            key: '10',
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
                    <Space style={{ cursor: 'pointer', color: "#0da487", marginTop: '6px',transform:'translateX(-65px)' }}>
                        Shop
                        <AiOutlineDown style={{ fontSize: '15px', marginRight: '5px',transform:'translateX(-5px)' }} />
                    </Space>
                </a>
            </Dropdown>

        </>
    )
}

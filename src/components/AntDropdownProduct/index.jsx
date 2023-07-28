import { AiOutlineDown } from 'react-icons/ai'
import { Dropdown, Space } from 'antd';
import { NavLink } from 'react-router-dom';
import './style.css'
const items = [
    {
        key: '1',
        type: 'group',
        children: [
            {
                key: '1-1',
                label: (<NavLink
                    className="dropdown-item"
                    to="/product-4-image"
                >
                    Product 4 Image
                </NavLink>),
            },
        ],
    },

    {
        key: '2',
        label: (<NavLink
            to="#"
            className="dropdown-item"
        >
            Product Thumbnail
        </NavLink>),
        children: [
            {
                key: '1-1',
                label: (<NavLink to="/product-left-thumbnail">
                    Left Thumbnail
                </NavLink>),
            },
            {
                key: '2-2',
                label: (<NavLink to="/product-right-thumbnail">
                    Right Thumbnail
                </NavLink>),
            },
            {
                key: '3-3',
                label: (<NavLink to="/product-bottom-thumbnail">
                    Bottom Thumbnail
                </NavLink>),
            },
        ],
    },
    {
        key: '3',
        type: 'group',
        children: [
            {
                key: '1-1',
                label: (<NavLink
                    to="/product-bundle"
                    className="dropdown-item"
                >
                    Product Bundle
                </NavLink>),
            },
        ],
    },
    {
        key: '4',
        type: 'group',
        children: [
            {
                key: '1-1',
                label: (<NavLink
                    to="/product-slider"
                    className="dropdown-item"
                >
                    Product Slider
                </NavLink>),
            },
        ],
    },
    {
        key: '5',
        type: 'group',
        children: [
            {
                key: '1-1',
                label: (<NavLink
                    to="/product-sticky"
                    className="dropdown-item"
                >
                    Product Sticky
                </NavLink>),
            },
        ],
    },
];
const AntDropdownProduct = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space style={{ cursor: 'pointer', color: "#0da487", marginTop: '6px', transform: 'translateX(-50px)' }}>
                Product
                <AiOutlineDown style={{ fontSize: '15px', marginRight: '5px', transform: 'translateX(-5px)' }} />
            </Space>
        </a>
    </Dropdown>
);
export default AntDropdownProduct;
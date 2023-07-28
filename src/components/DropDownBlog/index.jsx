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
                    to="/blog-detail"
                >
                    Blog Detail
                </NavLink>
            ),
        },
        {
            key: '2',
            label: (
                <NavLink className="dropdown-item" to="/blog-grid">
                    Blog Grid
                </NavLink>
            ),


        },
        {
            key: '3',
            label: (
                <NavLink className="dropdown-item" to="/blog-list">
                    Blog List
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
                    <Space style={{ cursor: 'pointer', color: "#0da487", marginTop: '6px', transform: 'translateX(10px)' }}>
                        Blog
                        <AiOutlineDown style={{ fontSize: '15px', marginRight: '5px', transform: 'translateX(-5px)' }} />
                    </Space>
                </a>
            </Dropdown>

        </>
    )
}

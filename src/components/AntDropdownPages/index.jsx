
import { AiOutlineDown } from 'react-icons/ai';
import { Dropdown, Space } from 'antd';

const items = [
    {
        
 

      
    }

];
const AntDropdownPages = () => (
    <Dropdown
        menu={{
            items,
        }}
    >
        <a onClick={(e) => e.preventDefault()}>
            <Space>
                Pages
                <AiOutlineDown />
            </Space>
        </a>
    </Dropdown>
);
export default AntDropdownPages;
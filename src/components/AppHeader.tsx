import {
    BellOutlined,
    QuestionCircleOutlined,
    SettingOutlined
} from '@ant-design/icons';
import {
    Avatar,
    Badge,
    Button,
    Dropdown,
    Input,
    Layout
} from 'antd';

const { Header, Sider, Content } = Layout;
const { Search } = Input;

// Header Component
const AppHeader = () => {
    const userMenuItems = [
        { key: '1', label: 'Profile' },
        { key: '2', label: 'Settings' },
        { key: '3', label: 'Logout' }
    ];

    return (
        <Header className="bg-white shadow-sm px-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">M</span>
                    </div>
                    <span className="text-xl font-bold text-gray-800">MKT CARE</span>
                </div>
            </div>

            <div className="flex items-center space-x-4">
                <span className="text-gray-600">Không đổi Proxy</span>
                <Badge count={5} size="small">
                    <Button icon={<BellOutlined />} type="text" shape="circle" />
                </Badge>
                <Button icon={<QuestionCircleOutlined />} type="text" shape="circle" />
                <Button icon={<SettingOutlined />} type="text" shape="circle" />

                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight">
                    <div className="flex items-center space-x-2 cursor-pointer">
                        <Avatar size="small" className="bg-orange-500">VD</Avatar>
                        <div className="text-right">
                            <div className="text-sm font-medium">Việt Đăng Quốc</div>
                            <div className="text-xs text-gray-500">vietnuacu@gmail.com</div>
                        </div>
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default AppHeader;
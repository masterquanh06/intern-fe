import { FacebookOutlined, GithubOutlined, MailOutlined, TwitterOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Menu } from "antd";
import Sider from "antd/es/layout/Sider";

// Sidebar Component
interface SideBarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
}

const AppSideBar = ({ collapsed, setCollapsed }: SideBarProps) => {
    const menuItems = [
        { key: '1', icon: <UserOutlined />, label: 'Quản lý tài khoản' },
        { key: '2', icon: <UserOutlined />, label: 'Quản lý Proxy' },
        { key: '3', icon: <MailOutlined />, label: 'Quản lý Email' },
        { key: '4', icon: <UserOutlined />, label: 'Quản lý nội dung' },
        { key: '5', icon: <UserOutlined />, label: 'Tương tác tài khoản' },
        { key: '6', icon: <UserOutlined />, label: 'Chức năng Seeding' },
        { key: '7', icon: <UserOutlined />, label: 'Chức năng Chia sẻ' },
        { key: '8', icon: <UserOutlined />, label: 'Chức năng đăng bài' },
        { key: '9', icon: <UserOutlined />, label: 'Chức năng bình luận' },
        { key: '10', icon: <UserOutlined />, label: 'Chức năng nhắn tin' },
        { key: '11', icon: <UserOutlined />, label: 'Chức năng kết bạn' },
        { key: '12', icon: <UserOutlined />, label: 'Chức năng tài khoản' },
        { key: '13', icon: <UserOutlined />, label: 'Chức năng mở khóa' }
        
    ];

    return (
        <Sider
            width={250}
            className="bg-white shadow-sm"
            collapsed={collapsed}
            collapsible
            onCollapse={setCollapsed}
        >
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                items={menuItems}
                className="border-r-0 h-full"
            />

            {!collapsed && (
                <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="text-xs text-gray-600 mb-2">Phiên bản cài đặt</div>
                        <div className="text-sm font-medium">6.1.9</div>
                        <div className="text-xs text-gray-600 mt-2">Ngày cập nhật</div>
                        <div className="text-sm">26/5/2025</div>
                        <div className="text-xs text-gray-600 mt-2">Số ngày còn lại</div>
                        <div className="text-sm font-medium">23 ngày</div>
                    </div>

                    <div className="flex justify-center space-x-2 mt-4">
                        <Button icon={<FacebookOutlined />} type="text" size="small" />
                        <Button icon={<TwitterOutlined />} type="text" size="small" />
                        <Button icon={<GithubOutlined />} type="text" size="small" />
                    </div>
                </div>
            )}
        </Sider>
    );
};
export default AppSideBar;
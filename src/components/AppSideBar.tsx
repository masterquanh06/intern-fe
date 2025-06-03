import {
    BarChart,
    Calendar,
    ChevronRight,
    Clock,
    Facebook,
    Globe,
    Home,
    Leaf,
    Mail,
    Megaphone,
    MessageCircle,
    PencilLine,
    Smartphone,
    Target,
    Unlock,
    User,
    UserPlus,
    Users,
} from 'lucide-react';
import { useState } from 'react';

const tabs = [
    {
        id: 'facebook',
        icon: Facebook,
        label: 'Facebook',
        bgColor: 'bg-blue-500',
        hoverColor: 'hover:bg-blue-600',
    },
    {
        id: 'messenger',
        icon: MessageCircle,
        label: 'Messenger',
        bgColor: 'bg-blue-400',
        hoverColor: 'hover:bg-blue-500',
    },
    {
        id: 'other',
        icon: Globe,
        label: 'Other',
        bgColor: 'bg-gray-500',
        hoverColor: 'hover:bg-gray-600',
    },
];

const sidebarItems = [
    { icon: <BarChart size={16} />, label: 'Quản lý tài khoản', active: true },
    { icon: <Target size={16} />, label: 'Quản lý Proxy', hasSubmenu: true },
    { icon: <Mail size={16} />, label: 'Quản lý Email', hasSubmenu: true },
    { icon: <Home size={16} />, label: 'Quản lý nội dung' },
    { icon: <Users size={16} />, label: 'Tương tác tài khoản' },
    { icon: <Leaf size={16} />, label: 'Chức năng Seeding' },
    { icon: <Megaphone size={16} />, label: 'Chức năng Chia sẻ', hasSubmenu: true },
    { icon: <PencilLine size={16} />, label: 'Chức năng đăng bài', hasSubmenu: true },
    { icon: <MessageCircle size={16} />, label: 'Chức năng bình luận', hasSubmenu: true },
    { icon: <Mail size={16} />, label: 'Chức năng nhắn tin', hasSubmenu: true },
    { icon: <UserPlus size={16} />, label: 'Chức năng kết bạn', hasSubmenu: true },
    { icon: <User size={16} />, label: 'Chức năng tài khoản', hasSubmenu: true },
    { icon: <Unlock size={16} />, label: 'Chức năng mở khóa', hasSubmenu: true },
];

const AppSidebar = () => {
    const [activeTab, setActiveTab] = useState('facebook');

    return (
        <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col justify-between">
            {/* Logo */}
            <div className="h-[69px] border-b border-gray-200 flex items-center justify-center p-4">
                <img
                    src="https://mktcare.net/wp-content/uploads/2022/08/Logo-MKT-Tet-2.png"
                    alt="Logo"
                    className="h-full object-contain "
                />
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-auto py-2">
                {sidebarItems.map((item, index) => (
                    <div
                        key={index}
                        className={`
              px-4 py-2 cursor-pointer transition-all duration-200
              ${item.active ? 'bg-blue-50 border-r-4 border-blue-500' : 'hover:bg-gray-50'}
            `}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <span>{item.icon}</span>
                                <span
                                    className={`
                    text-sm
                    ${item.active ? 'text-blue-600 font-medium' : 'text-gray-700'}
                  `}
                                >
                                    {item.label}
                                </span>
                            </div>
                            {item.hasSubmenu && (
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="inline-flex bg-blue-500 rounded-full px-auto shadow-lg w-full py-2 justify-center space-x-2">
                {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                  relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ease-in-out
                  ${isActive ? 'bg-white text-blue-500 shadow-md scale-105' : 'text-white hover:bg-white/20'}
                `}
                            aria-label={tab.label}
                        >
                            <IconComponent
                                size={18}
                                className={isActive ? 'text-blue-500' : 'text-white'}
                            />
                            {isActive && (
                                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                            )}
                        </button>
                    );
                })}
            </div>
            {/* Footer Info */}
            <div className="p-8 border-t border-gray-100 bg-white">

                <div className="text-xs text-gray-600 space-y-3 shadow-xl rounded-lg p-6">
                    <div className="flex flex-col justify-between space-y-2 items-center">
                        <div className="flex items-center space-x-2">
                            <Smartphone size={16} />
                            <span>Phiên bản cài đặt</span>
                        </div>
                        <span className="font-medium">6.1.9</span>
                    </div>
                    <div className="flex flex-col justify-between space-y-2 items-center">
                        <div className="flex items-center space-x-2">
                            <Calendar size={16} />
                            <span>Ngày cập nhật</span>
                        </div>
                        <span className="font-medium">26/5/2025</span>
                    </div>
                    <div className="flex flex-col justify-between space-y-2 items-center">
                        <div className="flex items-center space-x-2">
                            <Clock size={16} />
                            <span>Số ngày còn lại</span>
                        </div>
                        <span className="font-medium">23 ngày</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppSidebar;
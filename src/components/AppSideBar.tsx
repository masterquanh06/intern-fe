import { ChevronRight } from 'lucide-react';


const sidebarItems = [
    { icon: '📊', label: 'Quản lý tài khoản', active: true },
    { icon: '🎯', label: 'Quản lý Proxy', hasSubmenu: true },
    { icon: '📧', label: 'Quản lý Email', hasSubmenu: true },
    { icon: '🏠', label: 'Quản lý nội dung' },
    { icon: '👥', label: 'Tương tác tài khoản' },
    { icon: '🌱', label: 'Chức năng Seeding' },
    { icon: '📢', label: 'Chức năng Chia sẻ', hasSubmenu: true },
    { icon: '📝', label: 'Chức năng đăng bài', hasSubmenu: true },
    { icon: '💬', label: 'Chức năng bình luận', hasSubmenu: true },
    { icon: '💌', label: 'Chức năng nhắn tin', hasSubmenu: true },
    { icon: '👫', label: 'Chức năng kết bạn', hasSubmenu: true },
    { icon: '👤', label: 'Chức năng tài khoản', hasSubmenu: true },
    { icon: '🔓', label: 'Chức năng mở khóa', hasSubmenu: true }
];

// Components
const AppSidebar = () => {
    return (
        <div className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
            {/* Logo */}
            <div className="p-4 border-b border-gray-200 h-[69px] flex">
                <img src="https://mktcare.net/wp-content/uploads/2022/08/Logo-MKT-Tet-2.png" alt="" />

            </div>

            {/* Menu Items */}
            <div className="py-2">
                {sidebarItems.map((item, index) => (
                    <div key={index} className={`px-4 py-2 cursor-pointer hover:bg-gray-50 ${item.active ? 'bg-blue-50 border-r-2 border-blue-500' : ''}`}>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <span className="text-sm">{item.icon}</span>
                                <span className={`text-sm ${item.active ? 'text-blue-600 font-medium' : 'text-gray-700'}`}>
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

            <div className="bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white">
                <div className="text-xs text-gray-500 space-y-1">
                    <div className="flex items-center space-x-2">
                        <span>📱</span>
                        <span>Phiên bản cài đặt</span>
                    </div>
                    <div className="ml-6 font-medium">6.1.9</div>
                    <div className="flex items-center space-x-2">
                        <span>📅</span>
                        <span>Ngày cập nhật</span>
                    </div>
                    <div className="ml-6 font-medium">26/5/2025</div>
                    <div className="flex items-center space-x-2">
                        <span>⏰</span>
                        <span>Số ngày còn lại</span>
                    </div>
                    <div className="ml-6 font-medium">23 ngày</div>
                </div>
            </div>
        </div>
    );
};
export default AppSidebar;
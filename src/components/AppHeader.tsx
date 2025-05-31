import { Bell, Settings, User } from "lucide-react";

const AppHeader = () => {


    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Không đổi Proxy</span>
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <Bell className="w-4 h-4 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                    </div>
                    <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
                    <div className="text-sm">
                        <div className="font-medium">VN</div>
                        <div className="text-xs text-gray-500">Việt Đăng Quốc</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;
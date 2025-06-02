import { Bell, Settings } from "lucide-react";

const AppHeader = () => {


    return (
        <div className="bg-white border-b border-gray-200 px-6 py-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                </div>

                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">Không đổi Proxy</span>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <Bell className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
                    </div>
                    <div className="text-sm flex items-center space-x-2">
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-600">VD</span>

                        </div>

                        <div className="flex flex-col items-start">
                            <div className="text-sm text-gray-500">Việt Đăng Quốc</div>
                            <div className="text-xs text-gray-500">vietnuacu@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;
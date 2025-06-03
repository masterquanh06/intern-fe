import { Bell, Settings } from "lucide-react";

const AppHeader = () => {
    return (
        <div className="bg-white border-b border-gray-200 px-2 md:px-6 py-2 md:py-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center space-x-4"></div>
                <div className="flex flex-wrap items-center gap-2 md:space-x-4 md:gap-0">
                    <span className="text-sm text-gray-600">Không đổi Proxy</span>
                    <label className="relative inline-block w-12 md:w-14 h-7 md:h-8">
                        <input type="checkbox" className="opacity-0 w-0 h-0" />
                        <span className="absolute cursor-pointer inset-0 bg-white border border-gray-400 rounded-full transition-all duration-400 before:content-[''] before:absolute before:h-5 before:w-5 before:rounded-full before:left-1 before:bottom-1 before:bg-gray-400 before:transition-all before:duration-400 checked:bg-blue-500 checked:border-blue-500 checked:before:bg-white checked:before:translate-x-6 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"></span>
                    </label>

                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <img src="https://cdn-icons-png.flaticon.com/128/197/197473.png" alt="" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <Bell className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                        <Settings className="w-5 h-5 text-gray-600 cursor-pointer" />
                    </div>

                    <div className="text-sm flex items-center space-x-2">
                        <div className="w-[2px] h-10 bg-gray-100 mx-2"></div>
                        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                            <span className="text-gray-600">VD</span>
                        </div>
                        <div className="flex flex-col items-start">
                            <div className="text-sm text-gray-500">Việt Đăng Quốc</div>
                            <div className="text-xs text-gray-500 break-all">vietnuacu@gmail.com</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppHeader;
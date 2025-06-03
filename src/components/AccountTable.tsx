import { Button, Input, Pagination } from "antd";
import { Columns2, Eye, Search, Trash2, X } from "lucide-react";
import { useState } from "react";

const accountsData = [
    {
        uid: '100002943112206',
        name: 'Kristina Dewi',
        password: 'WU82*******',
        twoFA: 'EU6WZ7O5ZJ3DF3CXBRP...',
        cookie: 'sb=_hrTZRvPRxsRgRuM_2...',
        email: 'dtomeka8nvb@outlook.com',
    },
    {
        uid: '100004350152810',
        name: 'Sylvia Afista San',
        password: 'w522*****',
        twoFA: 'ITSYTV4KXMW4C5XSL5...',
        cookie: 'sb=_hrTZxtv3NVD3tEZxC.dsankdsadjkashdjkasdhjkasdhkjasdhjkasdhjk,sadhjkasdhasdjkkjdhsajkdshajkdashjkdashjksahjksadhkjkdjashdjksahdjkashjkdashjkashjkashdjksahkdjashdjksahk..',
        email: 'k0irlerin@.',
    },
    {
        uid: '100010859430402',
        name: 'Rafael Ctmv',
        password: 'OpaL*****',
        twoFA: 'YKTBWW2VGPRYWLH3E4...',
        cookie: 'datr=wBzl24-94jt2BzrTCjp...',
        email: 'meulerlazar1@hotmail.com',
    },
    {
        uid: '100024894187631',
        name: 'Quốc Việt',
        password: 'H94r*****',
        twoFA: 'G43N7TRT36WASSVGZOV...',
        cookie: 'datr=wBzl20-npp_pCPHn...',
        email: 'lauriegforlaxyy3@hotmail.com',
    },
    {
        uid: '100046088622726',
        name: 'Quốc Việt',
        password: 'Lzqr*****',
        twoFA: '5Y4O6ADCEVPGA6J3YTG...',
        cookie: 'datr=03vmZwo7qCc35SKl...',
        email: 'bibelpella4@hotmail.com',
    },
    {
        uid: '61572881686123',
        name: '-',
        password: '@KJZ*****',
        twoFA: 'ZFWXEX7MPSRTI76BAML...',
        cookie: 'dblm=%7B%22615728816...',
        email: 'ajjanbroshi@hotmail.comffffffffffffffffffffffffffffffffffffffdjkaskdjsahkjasdhasjkdasdjkhaskjhdasjkhasjkhasjkdhaskjdhffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff',
    },
];

const AccountsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="flex flex-col justify-between h-full">
            {/* Nội dung bảng */}
            <div className="flex-1 bg-white rounded-lg border border-gray-200 m-4 overflow-x-scroll">
                {/* Table Header */}
                <div className="px-2 md:px-4 py-3 border-b border-gray-200">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <Input
                                placeholder="Tìm kiếm"
                                prefix={<Search className="w-4 h-4 text-gray-400" />}
                                className="w-full sm:w-64"
                            />
                            <div className="flex items-center space-x-2 text-sm text-gray-600 whitespace-nowrap">
                                <span>Tổng số: <span className="text-blue-400">6</span></span>
                                <span>Live: <span className="text-green-400">3</span></span>
                                <span>Die: <span className="text-red-400">3</span></span>
                                <span>Đã chọn: <span className="text-blue-400">0</span></span>
                            </div>
                        </div>
                        <div className="flex flex-wrap items-center space-x-2">
                            <Button className="flex items-center space-x-1">
                                <X size={16} />
                                <span>Đóng trình duyệt</span>
                            </Button>
                            <Button className="flex items-center space-x-1">
                                <Trash2 size={16} />
                                <span>Thùng rác</span>
                            </Button>
                            <Button className="flex items-center space-x-1">
                                <Columns2 size={16} />
                                <span>Tùy chỉnh cột</span>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Table Content */}
                <div>
                    <table className="min-w-[700px] md:min-w-full divide-y divide-gray-200 select-none caret-transparent">
                        <thead>
                            <tr>
                                <th className="px-2 md:px-4 py-3">
                                    <input type="checkbox" className="rounded" />
                                </th>
                                <th className="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">UID</th>
                                <th className="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Họ tên</th>
                                <th className="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mật khẩu</th>
                                <th className="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mã 2FA</th>
                                <th className="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cookie</th>
                                <th className="px-2 md:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {accountsData.map((account, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <td className="px-2 py-1">
                                        <input type="checkbox" className="rounded" />
                                    </td>
                                    <td className="px-2 py-1 text-[11px] text-gray-900 leading-tight">{account.uid}</td>
                                    <td className="px-2 py-1 text-[11px] text-gray-900 leading-tight">{account.name}</td>
                                    <td className="px-2 py-1 text-[11px] text-gray-900 leading-tight">
                                        <div className="flex items-center space-x-1">
                                            <span>{account.password}</span>
                                            <Eye className="w-3 h-3 text-gray-400 cursor-pointer" />
                                        </div>
                                    </td>
                                    <td className="px-2 py-1 text-[11px] text-gray-900 leading-tight">
                                        <div className="flex items-center space-x-1">
                                            <span className="truncate max-w-24">{account.twoFA}</span>
                                            <Eye className="w-3 h-3 text-gray-400 cursor-pointer" />
                                        </div>
                                    </td>
                                    <td className="px-2 py-1 text-[11px] text-gray-900 leading-tight">
                                        <div className="flex items-center space-x-1">
                                            <span className="truncate max-w-24">{account.cookie}</span>
                                            <Eye className="w-3 h-3 text-gray-400 cursor-pointer" />
                                        </div>
                                    </td>
                                    <td className="px-2 py-1 text-[11px] text-gray-900 leading-tight">
                                        <span className="truncate max-w-24">{account.email}</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Pagination luôn ở cuối */}
            <div className="py-4 flex flex-col md:flex-row justify-between items-center bg-white gap-2">
                <div className="text-sm text-gray-600 mb-2 md:mb-0">
                    Hiển thị 1 đến 6 trong 6 Dữ liệu
                </div>
                <Pagination
                    current={currentPage}
                    total={1000}
                    pageSize={50}
                    showSizeChanger
                    showQuickJumper
                    onChange={(page) => setCurrentPage(page)}
                />
            </div>
        </div>
    );
};

export default AccountsTable;
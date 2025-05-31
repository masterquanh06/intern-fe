import { Button, Input, Pagination } from "antd";
import { Eye, Search } from "lucide-react";
import { useState } from "react";

const accountsData = [
    {
        uid: '100002943112206',
        name: 'Kristina Dewi',
        password: 'WU82*******',
        twoFA: 'EU6WZ7O5ZJ3DF3CXBRP...',
        cookie: 'sb=_hrTZRvPRxsRgRuM_2...',
        email: 'dtomeka8nvb@outlook.com'
    },
    {
        uid: '100004350152810',
        name: 'Sylvia Afista San',
        password: 'w522*****',
        twoFA: 'ITSYTV4KXMW4C5XSL5...',
        cookie: 'sb=_hrTZxtv3NVD3tEZxC...',
        email: 'k0irlerin@outlook.com'
    },
    {
        uid: '100010859430402',
        name: 'Rafael Ctmv',
        password: 'OpaL*****',
        twoFA: 'YKTBWW2VGPRYWLH3E4...',
        cookie: 'datr=wBzl24-94jt2BzrTCjp...',
        email: 'meulerlazar1@hotmail.com'
    },
    {
        uid: '100024894187631',
        name: 'Quốc Việt',
        password: 'H94r*****',
        twoFA: 'G43N7TRT36WASSVGZOV...',
        cookie: 'datr=wBzl20-npp_pCPHn...',
        email: 'lauriegforlaxyy3@hotmail.com'
    },
    {
        uid: '100046088622726',
        name: 'Quốc Việt',
        password: 'Lzqr*****',
        twoFA: '5Y4O6ADCEVPGA6J3YTG...',
        cookie: 'datr=03vmZwo7qCc35SKl...',
        email: 'bibelpella4@hotmail.com'
    },
    {
        uid: '61572881686123',
        name: '-',
        password: '@KJZ*****',
        twoFA: 'ZFWXEX7MPSRTI76BAML...',
        cookie: 'dblm=%7B%22615728816...',
        email: 'ajjanbroshi@hotmail.com'
    }
];


const AccountsTable = () => {
    const [currentPage, setCurrentPage] = useState(1);

    return (
        <div className="bg-white rounded-lg border border-gray-200">
            {/* Table Header */}
            <div className="px-4 py-3 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Input
                            placeholder="Tìm kiếm"
                            prefix={<Search className="w-4 h-4 text-gray-400" />}
                            className="w-64"
                        />
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <span>Tổng số: 6</span>
                            <span>Live: 3</span>
                            <span>Die: 3</span>
                            <span>Đã chọn: 0</span>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button>Đồng trình duyệt</Button>
                        <Button>Thùng rác</Button>
                        <Button>Tùy chỉnh cột</Button>

                    </div>
                </div>
            </div>

            {/* Table Content */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                <input type="checkbox" className="rounded" />
                            </th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">UID</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Họ và tên</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mật khẩu</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mã 2FA</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cookie</th>
                            <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {accountsData.map((account, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                                <td className="px-4 py-3">
                                    <input type="checkbox" className="rounded" />
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">{account.uid}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">{account.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    <div className="flex items-center space-x-2">
                                        <span>{account.password}</span>
                                        <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    <div className="flex items-center space-x-2">
                                        <span className="truncate max-w-32">{account.twoFA}</span>
                                        <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    <div className="flex items-center space-x-2">
                                        <span className="truncate max-w-32">{account.cookie}</span>
                                        <Eye className="w-4 h-4 text-gray-400 cursor-pointer" />
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-900">
                                    <span className="truncate max-w-32">{account.email}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
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

import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import { Button, Card, Pagination, Table } from "antd";
import Search from "antd/es/input/Search";

function AccountTable() {
    const columns = [
        {
            title: 'UID',
            dataIndex: 'uid',
            key: 'uid',
            width: 150,
        },
        {
            title: 'Họ và tên',
            dataIndex: 'name',
            key: 'name',
            width: 150,
        },
        {
            title: 'Mật khẩu',
            dataIndex: 'password',
            key: 'password',
            width: 120,
            render: (password) => (
                <span>{password.substring(0, 4)}{'*'.repeat(password.length - 4)}</span>
            )
        },
        {
            title: 'Mã 2FA',
            dataIndex: 'twoFA',
            key: 'twoFA',
            width: 200,
            render: (code) => (
                <div className="flex items-center space-x-2">
                    <span className="font-mono text-xs">{code}</span>
                    <Button size="small" type="text">👁</Button>
                </div>
            )
        },
        {
            title: 'Cookie',
            dataIndex: 'cookie',
            key: 'cookie',
            width: 150,
            render: (cookie) => (
                <span className="font-mono text-xs">{cookie.substring(0, 10)}...</span>
            )
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            width: 200,
        }
    ];

    const data = [
        {
            key: '1',
            uid: '100002943112206',
            name: 'Kristina Dewi',
            password: 'WU82********',
            twoFA: 'EU6WZ7O52J3DF3CXBRP...',
            cookie: 'sb=_JnTZRvPRxsRgRuM_2...',
            email: 'dtomeka8nvb@outlook...'
        },
        {
            key: '2',
            uid: '100004350152810',
            name: 'Sylvia Afista San',
            password: 'w522******',
            twoFA: 'ITSYTVI4KXM3W4C5XSL5...',
            cookie: 'sb=_JnTZktv3NVD3IEZxC...',
            email: 'k0rlerin@outlook.com'
        },
        {
            key: '3',
            uid: '100010859430402',
            name: 'Rafael Ctmv',
            password: 'Qb8l*******',
            twoFA: 'YKTBWW2VGPRYWLH3E4...',
            cookie: 'datr=wBzl24-94jt2BrzfCjp...',
            email: 'meulerIazar1@hotmail...'
        },
        {
            key: '4',
            uid: '100024894187631',
            name: 'Quốc Việt',
            password: 'H96r*******',
            twoFA: 'G43N7TRT36WASSVGZOV...',
            cookie: 'datr=wBzl20-npp_pCPHtn...',
            email: 'lauriegforlaxyy3@hotn...'
        },
        {
            key: '5',
            uid: '100046088622726',
            name: 'Quốc Việt',
            password: 'Lzqr*******',
            twoFA: '5Y4O6ADCEVFGA6J3YTG...',
            cookie: 'datr=03vmZwo7qCc35SKI...',
            email: 'bibelpella4@hotmail.c'
        },
        {
            key: '6',
            uid: '61572881686123',
            name: '-',
            password: '@KJZ*******',
            twoFA: 'ZFWXEX7MPSRTI76BAMI...',
            cookie: 'dbln=%7B%226157288168...',
            email: 'ajjanbroshi@hotmail.c'
        }
    ];

    return (
        <Card>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Danh sách tài khoản</h2>
                <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 text-sm">
                        <span>Tổng số: <strong>6</strong></span>
                        <span>Live: <strong className="text-green-500">3</strong></span>
                        <span>Die: <strong className="text-red-500">3</strong></span>
                        <span>Đã chọn: <strong>0</strong></span>
                    </div>
                    <Button type="primary" icon={<PlusOutlined />}>
                        Thêm tài khoản
                    </Button>
                    <Button>Xuất dữ liệu</Button>
                    <Button>Thùng rác</Button>
                    <Button>Tùy chỉnh cột</Button>
                </div>
            </div>

            <div className="mb-4">
                <Search
                    placeholder="Tìm kiếm"
                    style={{ width: 300 }}
                    prefix={<SearchOutlined />}
                />
            </div>

            <Table
                columns={columns}
                dataSource={data}
                pagination={false}
                scroll={{ x: 1200 }}
                size="small"
            />

            <div className="flex justify-between items-center mt-4">
                <span className="text-sm text-gray-500">
                    Hiển thị 1 đến 6 trong 6 Dữ liệu
                </span>
                <Pagination
                    current={1}
                    total={1000}
                    pageSize={10}
                    showSizeChanger={false}
                    size="small"
                />
            </div>
        </Card>
    );
}

export default AccountTable;
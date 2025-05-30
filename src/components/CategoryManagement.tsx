import { MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Card } from "antd";
import Search from "antd/es/transfer/search";
import { useState } from "react";

const CategoryManagement = () => {
    const [categories] = useState(['Tất cả', 'demo', 'Acc Chính']);

    return (
        <Card title="Quản lý danh mục" className="mb-6">
            <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Search placeholder="Tìm kiếm" style={{ width: 200 }} />
                    <Button type="primary" icon={<PlusOutlined />}>
                        Thêm
                    </Button>
                </div>

                <div className="space-y-2">
                    {categories.map((category, index) => (
                        <div key={index} className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                            <span>{category}</span>
                            <Button icon={<MoreOutlined />} type="text" size="small" />
                        </div>
                    ))}
                </div>
            </div>
        </Card>
    );
};
export default CategoryManagement;
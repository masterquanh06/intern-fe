import { Button, Input } from "antd";
import { MoreHorizontal, Plus } from "lucide-react";

const CategoryManagement = () => {
  return (
    <div className="bg-white rounded-lg h-screen p-4 border border-gray-200 mb-6">
      <h3 className="font-medium text-gray-800 mb-4">Quản lý danh mục</h3>
      <div className="flex space-x-2 mb-4">
        <Input placeholder="Tìm kiếm" className="flex-1" />
        <Button type="primary" icon={<Plus className="w-4 h-4" />}>
          Thêm
        </Button>
      </div>
      <div className="space-y-2">
        <div className="text-sm text-gray-600 mb-2">Tất cả</div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">demo</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
          <div className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Acc chính</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-gray-400 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};
export default CategoryManagement;
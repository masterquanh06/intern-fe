import { Button } from 'antd';
import { Download, Plus } from 'lucide-react';
import './App.css';
import AccountsTable from './components/AccountTable';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSideBar';
import CategoryManagement from './components/CategoryManagement';
import StatsCards from './components/StatCards';

function App() {

  return (
    <div className="flex">
      <AppSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AppHeader />

        <div className="flex-1 overflow-y-auto">
          <div className="p-6 h-full flex flex-col space-y-6">
            <div className="flex space-x-6 justify-between">
              <h1 className="text-xl font-semibold text-gray-800">Danh sách tài khoản</h1>
              <div className="flex items-center space-x-2">

                <Button type="primary" icon={<Plus className="w-4 h-4" />}>
                  Thêm tài khoản
                </Button>
                <Button className="flex items-center space-x-1">
                  <Download size={16} />
                  <span>Xuất dữ liệu</span>
                </Button>

              </div>
            </div>
            <div className="flex flex-1 space-x-6 mt-4">
              {/* Left Content */}
              <div className="flex-1 flex flex-col space-y-6 max-w-2xl">
                <StatsCards />

                <CategoryManagement />

              </div>

              {/* Right Sidebar */}
              <div className="w-3/4 bg-white rounded-lg p-4 border border-gray-200">
                <AccountsTable />

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default App;

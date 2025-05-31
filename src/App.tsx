import { Button } from 'antd';
import { Plus } from 'lucide-react';
import './App.css';
import AccountsTable from './components/AccountTable';
import AppHeader from './components/AppHeader';
import AppSidebar from './components/AppSideBar';
import CategoryManagement from './components/CategoryManagement';
import StatsCards from './components/StatCards';

function App() {

  return (
    <div className="flex h-screen bg-gray-100">
      <AppSidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <AppHeader />

        <div className="flex-1 overflow-y-auto">
          <div className="p-6">
            <div className="flex space-x-6 justify-between">
              <h1 className="text-xl font-semibold text-gray-800">Danh sách tài khoản</h1>
              <div className="flex items-center space-x-2">

                <Button type="primary" icon={<Plus className="w-4 h-4" />}>
                  Thêm tài khoản
                </Button>
                <Button>Xuất dữ liệu</Button>

              </div>
            </div>
            <div className="flex space-x-6 mt-4">
              {/* Left Content */}
              <div className="">
                <StatsCards />
                <CategoryManagement />

              </div>

              {/* Right Sidebar */}
              <div className="flex-1 bg-white rounded-lg p-4 border border-gray-200">
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

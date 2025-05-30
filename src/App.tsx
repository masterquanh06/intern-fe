import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { useState } from 'react';
import './App.css';
import AccountTable from './components/AccountTable';
import AppHeader from './components/AppHeader';
import AppSideBar from './components/AppSideBar';
import CategoryManagement from './components/CategoryManagement';
import StatsCards from './components/StatCards';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen bg-gray-100">
      <AppHeader />
      <Layout>
        <AppSideBar collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout className="bg-gray-50">
          <Content className="p-6 h-screen">
            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-3">
                <StatsCards />
                <CategoryManagement />
              </div>
              <div className="col-span-9">
                <AccountTable />
              </div>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};



export default App

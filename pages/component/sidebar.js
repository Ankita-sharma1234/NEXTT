import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link href='/dashboard/dashboard' style={{ textDecoration: 'none' }}>Dashboard</Link>, '1', <PieChartOutlined />),
  getItem(<Link href='/category/addcategory' style={{ textDecoration: 'none' }}>Add Category</Link>, '2', <DesktopOutlined />),
  getItem(<Link href='/category/viewcategory' style={{ textDecoration: 'none' }}>View Category</Link>, '3', <UserOutlined />),
  getItem(<Link href='/subcategory/addsubcategory' style={{ textDecoration: 'none' }}>Add Subcategory</Link>, '4', <TeamOutlined />),
  getItem(<Link href='/subcategory/viewsubcategory' style={{ textDecoration: 'none' }}>View Subcategory</Link>, '5', <TeamOutlined />),
  getItem(<Link href='/user/adduser' style={{ textDecoration: 'none' }}>Add User</Link>, '6', <TeamOutlined />),
  getItem(<Link href='/user/viewuser' style={{ textDecoration: 'none' }}>View User</Link>, '7', <TeamOutlined />),
];
const Sidebar = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout className="site-layout">
            
          <Content
            style={{
              margin: '0 16px',
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Sidebar;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
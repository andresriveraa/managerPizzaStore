import React, { useState } from 'react';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
const { SubMenu } = Menu
const { Sider } = Layout;


export default function SiderLayout() {
  const [collapsed, setCollapsed] = useState(false)
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 60 }}>
        {collapsed ?
          <TeamOutlined style={{color: "white"}}/>
          :
          (
            <h3 style={{ margin: 0, padding: 0, color: 'white', }}>
              Manager Pizza store
            </h3>
          )
        }
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          <Link to="/">
            Make Pizza
            </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          <Link to="/statistic">
            Sales Statistics
            </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

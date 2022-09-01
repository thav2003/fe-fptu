import React, { useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "./App.css";

import type { MenuProps } from "antd";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Dashboard from "./modules/dashboard/dashboard";
import XetDuyet from "./modules/xet-duyet/xet-duyet";
import DangBai from "./modules/dang-bai/dang-bai";
import XoaBai from "./modules/xoa-bai/xoa-bai";
import LichSu from "./modules/lich-su/lich-su";
import LichDangBai from "./modules/lich-dang-bai/lich-dang-bai";

const { Header, Footer, Sider } = Layout;
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem(
    <Link to="/admin/dashboard">Dashboard</Link>,
    "1",
    <AppstoreOutlined className="menu-dashboard-icon" />,
  ),

  getItem(
    "Manager",
    "sub1",
    <VideoCameraOutlined className="menu-dashboard-icon" />,
    [
      getItem("Cài đặt", "3"),
      getItem(<Link to="/admin/dang-bai">Đăng bài</Link>, "4"),
      getItem(<Link to="/admin/xet-duyet">Duyệt bài</Link>, "5"),
      getItem(<Link to="/admin/xoa-bai">Bài viết đã duyệt</Link>, "6"),
      getItem(<Link to="/admin/lich-dang-bai">Lịch đăng bài</Link>, "7"),
      getItem(<Link to="/admin/lich-su">Lịch sử</Link>, "8"),
    ],
  ),
  getItem(
    "Manger member",
    "sub2",
    <UploadOutlined className="menu-dashboard-icon" />,
    [
      getItem("Xóa thành viên", "9"),
      getItem("Cấm thành viên", "10"),
      getItem("Thành viên tích cực", "11"),
    ],
  ),
  getItem(
    "Thông báo",
    "12",
    <UploadOutlined className="menu-dashboard-icon" />,
  ),
  getItem(
    "Tool FaceBook",
    "13",
    <UploadOutlined className="menu-dashboard-icon" />,
  ),
];

const routes = [
  {
    path: "/",
    component: <Dashboard />,
  },
  {
    path: "/admin/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/admin/xet-duyet",
    component: <XetDuyet />,
  },
  {
    path: "/admin/dang-bai",
    component: <DangBai />,
  },
  {
    path: "/admin/xoa-bai",
    component: <XoaBai />,
  },
  {
    path: "/admin/lich-su",
    component: <LichSu />,
  },
  {
    path: "/admin/lich-dang-bai",
    component: <LichDangBai />,
  },
];

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="min-h-[100vh] h-fit w-auto">
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
          }}
        >
          <div className="logo"></div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["4"]}
            items={items}
          />
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header
            className="site-layout-sub-header-background"
            style={{ padding: 0 }}
          />

          <Routes>
            {routes.map((route, i) => (
              <Route key={i} path={route.path} element={route.component} />
            ))}
          </Routes>
          <Footer style={{ textAlign: "center", padding: 16 }}>
            FPTU HCM ©2022 Created by 2804
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;

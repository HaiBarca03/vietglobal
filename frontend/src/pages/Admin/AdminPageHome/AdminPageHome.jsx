import React, { useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import {
  FileTextOutlined,
  CommentOutlined,
  UserOutlined,
  ShoppingOutlined,
  AppstoreOutlined,
  UnorderedListOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ContactsOutlined,
  UsergroupAddOutlined
} from '@ant-design/icons'
import './AdminPageHome.css'
import { useNavigate } from 'react-router-dom'
import CategoryAdminPage from '../CategoryAdminPage/CategoryAdminPage'
import ContactAdminPage from '../ContactAdminPage/ContactAdminPage'
import AboutAdminPage from '../AboutAdminPage/AboutAdminPage'
const { Header, Sider, Content } = Layout
import logo from '../../../assets/logo.png'
import ProductAdminPage from '../ProductAdminPage/ProductAdminPage'
import PolicyAdminPage from '../PolicyAdminPage/PolicyAdminPage'

const AdminPageHome = () => {
  const navigate = useNavigate()
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState('articles')
  const user = JSON.parse(localStorage.getItem('user'))
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }
  const renderContent = () => {
    switch (selectedKey) {
      case 'products':
        return <ProductAdminPage />
      case 'contactus':
        return <ContactAdminPage />
      case 'aboutus':
        return <AboutAdminPage />
      case 'categories':
        return <CategoryAdminPage />
      case 'policies':
        return <PolicyAdminPage />
      case 'logout':
        navigate('/')
        return null
      case 'homepage':
        navigate('/')
      default:
        return <h2>Chào mừng đến trang Admin</h2>
    }
  }
  return (
    <Layout className="admin-layout">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="ad-logo">
          {' '}
          <img className="logo-web-my" src={logo} alt="VietGlobal Logo" />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['articles']}
          onClick={(e) => setSelectedKey(e.key)}
        >
          <Menu.Item key="homepage" icon={<FileTextOutlined />}>
            Trang chủ
          </Menu.Item>
          <Menu.Item key="products" icon={<AppstoreOutlined />}>
            Sản phẩm
          </Menu.Item>
          <Menu.Item key="contactus" icon={<ContactsOutlined />}>
            Liên hệ
          </Menu.Item>
          <Menu.Item key="aboutus" icon={<UsergroupAddOutlined />}>
            Về chúng tôi
          </Menu.Item>
          <Menu.Item key="categories" icon={<UnorderedListOutlined />}>
            Danh mục
          </Menu.Item>
          <Menu.Item key="policies" icon={<CommentOutlined />}>
            Chính sách
          </Menu.Item>
          <Menu.Item
            key="logout"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
          >
            Đăng xuất
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="admin-header">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{ fontSize: '18px', width: 48, height: 48 }}
          />
          <h1 className="admin-title">Admin Dashboard</h1>
        </Header>
        <Content className="admin-content">{renderContent()}</Content>
      </Layout>
    </Layout>
  )
}

export default AdminPageHome

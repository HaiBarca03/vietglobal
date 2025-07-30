import React from 'react'
import { Layout, Row, Col } from 'antd'
import {
  FacebookOutlined,
  YoutubeOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined
} from '@ant-design/icons'
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import './Footer.css'

const { Footer } = Layout

const AppFooter = () => {
  const { t } = useTranslation()

  return (
    <Footer className="footer">
      <div className="footer-container">
        <Row gutter={[32, 32]}>
          {/* Company Info Section */}
          <Col xs={24} sm={24} md={8} lg={8}>
            <div className="footer-section">
              <h3 className="footer-logo">VietGlobal</h3>
              <p>{t('description')}</p>
              <div className="footer-socials">
                <FacebookOutlined />
                <YoutubeOutlined />
                <MailOutlined />
              </div>
            </div>
          </Col>

          {/* Navigation Links */}
          <Col xs={12} sm={8} md={5} lg={5}>
            <div className="footer-section">
              <h4>{t('links.title')}</h4>
              <ul className="footer-links">
                <li>{t('links.home')}</li>
                <li>{t('links.products')}</li>
                <li>{t('links.categories')}</li>
                <li>{t('links.deals')}</li>
              </ul>
            </div>
          </Col>

          {/* Policies */}
          <Col xs={12} sm={8} md={5} lg={5}>
            <div className="footer-section">
              <h4>{t('policies.title')}</h4>
              <ul className="footer-links">
                <li>{t('policies.privacy')}</li>
                <li>{t('policies.terms')}</li>
                <li>{t('policies.shipping')}</li>
                <li>{t('policies.returnPolicy')}</li>
              </ul>
            </div>
          </Col>

          {/* Contact Info */}
          <Col xs={24} sm={8} md={6} lg={6}>
            <div className="footer-section">
              <h4>{t('contact.title')}</h4>
              <div className="footer-contact">
                <p>
                  <EnvironmentOutlined />
                  <span>{t('contact.address')}</span>
                </p>
                <p>
                  <PhoneOutlined />
                  <span>{t('contact.phone')}</span>
                </p>
                <p>
                  <MailOutlined />
                  <span>{t('contact.email')}</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} VietGlobal
          </p>
        </div>
      </div>
    </Footer>
  )
}

export default AppFooter

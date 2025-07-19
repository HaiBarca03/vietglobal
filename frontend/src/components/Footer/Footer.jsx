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
          <Col xs={24} sm={12} md={8}>
            <h3 className="footer-logo">VietGlobal</h3>
            <p>{t('description')}</p>
            <div className="footer-socials">
              <FacebookOutlined />
              <YoutubeOutlined />
              <MailOutlined />
            </div>
          </Col>

          <Col xs={24} sm={12} md={5}>
            <h4>{t('links.title')}</h4>
            <ul className="footer-links">
              <li>{t('links.home')}</li>
              <li>{t('links.products')}</li>
              <li>{t('links.categories')}</li>
              <li>{t('links.deals')}</li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={5}>
            <h4>{t('policies.title')}</h4>
            <ul className="footer-links">
              <li>{t('policies.privacy')}</li>
              <li>{t('policies.terms')}</li>
              <li>{t('policies.shipping')}</li>
              <li>{t('policies.returnPolicy')}</li>
            </ul>
          </Col>

          <Col xs={24} sm={12} md={6}>
            <h4>{t('contact.title')}</h4>
            <p>
              <EnvironmentOutlined /> {t('contact.address')}
            </p>
            <p>
              <PhoneOutlined /> {t('contact.phone')}
            </p>
            <p>
              <MailOutlined /> {t('contact.email')}
            </p>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} CineZone. {t('allRights')}
          </p>
        </div>
      </div>
    </Footer>
  )
}

export default AppFooter

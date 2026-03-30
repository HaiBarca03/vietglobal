import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  FacebookOutlined,
  GlobalOutlined,
  WhatsAppOutlined
} from '@ant-design/icons'
import './ContactUs.css'
import { getAllContactUs } from '../../stores/ContactUs/ContactUsApi'
import { useDispatch, useSelector } from 'react-redux'

import { Typography, Space, Divider } from 'antd'

const { Title, Text, Paragraph } = Typography

const ContactUs = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const dispatch = useDispatch()
  const contactUsDetails = useSelector(
    (state) => state.contactUs.contactUsDetails || {}
  )

  useEffect(() => {
    dispatch(getAllContactUs())
  }, [dispatch])

  const info = contactUsDetails

  const ContactItem = ({ icon, label, children }) => (
    <div style={{ marginBottom: 20, display: 'flex', gap: 15 }}>
      <div style={{
        color: '#00B5B8',
        fontSize: 20,
        marginTop: 4,
        background: 'rgba(0, 181, 184, 0.1)',
        width: 40,
        height: 40,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      }}>
        {icon}
      </div>
      <div>
        <Text strong style={{ display: 'block', fontSize: 13, textTransform: 'uppercase', color: '#888', letterSpacing: 0.5 }}>
          {label}
        </Text>
        <div style={{ fontSize: 16 }}>{children}</div>
      </div>
    </div>
  )

  return (
    <div className="contact-us-section" style={{ padding: '40px', background: '#fff', borderRadius: 20 }}>
      <Title level={3} style={{ marginBottom: 30, color: '#0a1f3a', fontFamily: "'Barlow Condensed', sans-serif", textTransform: 'uppercase' }}>
        {lang === 'vi' ? 'Thông tin liên hệ' : 'Contact Information'}
      </Title>

      <ContactItem icon={<EnvironmentOutlined />} label={t('address')}>
        <Paragraph style={{ marginBottom: 0 }}>
          <Text strong>Office 1:</Text> {info.address?.[lang]}
        </Paragraph>
        {info.address2?.[lang] && (
          <Paragraph style={{ marginBottom: 0, marginTop: 8 }}>
            <Text strong>Office 2:</Text> {info.address2?.[lang]}
          </Paragraph>
        )}
      </ContactItem>

      <ContactItem icon={<MailOutlined />} label={t('email')}>
        <a href={`mailto:${info.email}`} style={{ color: 'inherit' }}>{info.email}</a>
      </ContactItem>

      <ContactItem icon={<PhoneOutlined />} label={t('phone')}>
        <Space direction="vertical" size={0}>
          <Text>{info.phone}</Text>
          {info.phone2?.[lang] && <Text>{info.phone2?.[lang]}</Text>}
        </Space>
      </ContactItem>

      <ContactItem icon={<WhatsAppOutlined />} label="WhatsApp / Zalo">
        <Space size="large">
          <a href={`https://wa.me/${info.social_links?.zalo?.replace(/\D/g, '') || '84346779622'}`} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 600 }}>
            WhatsApp
          </a>
          <a href={info.social_links?.zalo} target="_blank" rel="noopener noreferrer" style={{ color: '#0068FF', fontWeight: 600 }}>
            Zalo
          </a>
        </Space>
      </ContactItem>

      <Divider style={{ margin: '30px 0' }} />

      <Text strong style={{ display: 'block', marginBottom: 15, color: '#888', fontSize: 12, textTransform: 'uppercase' }}>
        {lang === 'vi' ? 'Theo dõi chúng tôi' : 'Follow Us'}
      </Text>

      <Space size="middle">
        <a href={info.social_links?.facebook} target="_blank" rel="noopener noreferrer" style={{ fontSize: 24, color: '#1877F2' }}><FacebookOutlined /></a>
        <a href={info.social_links?.instagram} target="_blank" rel="noopener noreferrer" style={{ fontSize: 24, color: '#E4405F' }}><InstagramOutlined /></a>
        <a href={info.website} target="_blank" rel="noopener noreferrer" style={{ fontSize: 24, color: '#00B5B8' }}><GlobalOutlined /></a>
      </Space>
    </div>
  )
}

export default ContactUs

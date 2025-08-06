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

const ContactUs = () => {
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'vi'
  const dispatch = useDispatch()
  const contactUsDetails = useSelector(
    (state) => state.contactUs.contactUsDetails || []
  )

  useEffect(() => {
    dispatch(getAllContactUs())
  }, [dispatch])

  const info = contactUsDetails

  return (
    <div className="contact-us-section">
      <h4>{lang === 'vi' ? 'Liên hệ với chúng tôi' : 'Contact Us'}</h4>

      <p>
        <EnvironmentOutlined />
        <strong>{t('address')}:</strong>
        {info.address?.[lang]}
      </p>

      <p>
        <MailOutlined />
        <strong>{t('email')}:</strong> {info.email}
      </p>

      <p>
        <PhoneOutlined />
        <strong>{t('phone')}:</strong> {info.phone}
      </p>

      <p>
        <GlobalOutlined />
        <strong>{t('website')}:</strong>
        <a href={info.website} target="_blank" rel="noopener noreferrer">
          {info.website}
        </a>
      </p>

      <p>
        <FacebookOutlined />
        <strong>Facebook:</strong>
        <a
          href={info.social_links?.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.social_links?.facebook}
        </a>
      </p>

      <p>
        <InstagramOutlined />
        <strong>Instagram:</strong>
        <a
          href={info.social_links?.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.social_links?.instagram}
        </a>
      </p>

      <p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Icon_of_Zalo.svg/2048px-Icon_of_Zalo.svg.png"
          alt="Zalo"
        />
        <strong>Zalo:</strong>
        <a
          href={info.social_links?.zalo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.social_links?.zalo}
        </a>
      </p>

      <p>
        <WhatsAppOutlined />
        <strong>Whatsapp:</strong>
        <a
          href={info.social_links?.zalo}
          target="_blank"
          rel="noopener noreferrer"
        >
          {info.social_links?.linkedin}
        </a>
      </p>
    </div>
  )
}

export default ContactUs

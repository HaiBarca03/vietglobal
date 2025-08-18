import React from 'react'
import { Row, Col } from 'antd'
import {
  BarChartOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FileDoneOutlined
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import './ChooseUs.css'

const WhyChooseUs = () => {
  const { i18n, t } = useTranslation()
  const lang = i18n.language || 'en'

  const items = [
    {
      icon: <BarChartOutlined style={{ fontSize: '36px', color: '#fff' }} />,
      title: {
        vi: 'Nông dân tiến bộ',
        en: 'Progressive Farmers'
      },
      description: {
        vi: 'VietGlobal là nhà cung cấp sản phẩm nông nghiệp hàng đầu tại Việt Nam.',
        en: 'VietGlobal ins Group is the largest manufacturer and supplier of all agricultural products from Vietnam.'
      }
    },
    {
      icon: (
        <SafetyCertificateOutlined
          style={{ fontSize: '36px', color: '#fff' }}
        />
      ),
      title: {
        vi: 'Chất lượng hàng đầu',
        en: 'Top Quality'
      },
      description: {
        vi: 'Chúng tôi đảm bảo chất lượng cao và kiểm soát nghiêm ngặt.',
        en: 'We guarantee high quality with strict control.'
      }
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: '36px', color: '#fff' }} />,
      title: {
        vi: 'Cam kết bền vững',
        en: 'Sustainability Commitment'
      },
      description: {
        vi: 'Phát triển nông nghiệp bền vững và thân thiện môi trường.',
        en: 'Promoting sustainable and eco-friendly agriculture.'
      }
    },
    {
      icon: <FileDoneOutlined style={{ fontSize: '36px', color: '#fff' }} />,
      title: {
        vi: 'Chứng nhận đầy đủ',
        en: 'Fully Certified'
      },
      description: {
        vi: 'Sản phẩm được chứng nhận bởi các tổ chức uy tín.',
        en: 'Products certified by reputable organizations.'
      }
    }
  ]

  return (
    <div className="why-choose-us-section">
      <div className="overlay-choose-us" />
      <h2 className="section-title">
        {lang === 'vi' ? 'Tại sao chọn chúng tôi?' : 'Why Choose Us?'}
      </h2>
      <Row gutter={[24, 24]}>
        {items.map((item, index) => (
          <Col xs={24} md={12} key={index}>
            <div className="choose-item">
              <div className="icon">{item.icon}</div>
              <h3 className="title">{item.title[lang]}</h3>
              <p className="description">{item.description[lang]}</p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default WhyChooseUs

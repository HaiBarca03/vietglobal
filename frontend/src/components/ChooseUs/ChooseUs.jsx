import React from 'react'
import { Row, Col } from 'antd'
import {
  BarChartOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FileDoneOutlined
} from '@ant-design/icons'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion' // Thêm framer-motion
import './ChooseUs.css'

const WhyChooseUs = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'en'

  const items = [
    {
      icon: <BarChartOutlined style={{ fontSize: '40px' }} />,
      title: { vi: 'Nông dân tiến bộ', en: 'Progressive Farmers' },
      description: {
        vi: 'VietGlobal là nhà cung cấp sản phẩm nông nghiệp hàng đầu tại Việt Nam.',
        en: 'VietGlobal ins Group is the largest manufacturer and supplier of all agricultural products from Vietnam.'
      }
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: '40px' }} />,
      title: { vi: 'Chất lượng hàng đầu', en: 'Top Quality' },
      description: {
        vi: 'Chúng tôi đảm bảo chất lượng cao và kiểm soát nghiêm ngặt.',
        en: 'We guarantee high quality with strict control.'
      }
    },
    {
      icon: <CheckCircleOutlined style={{ fontSize: '40px' }} />,
      title: { vi: 'Cam kết bền vững', en: 'Sustainability Commitment' },
      description: {
        vi: 'Phát triển nông nghiệp bền vững và thân thiện môi trường.',
        en: 'Promoting sustainable and eco-friendly agriculture.'
      }
    },
    {
      icon: <FileDoneOutlined style={{ fontSize: '40px' }} />,
      title: { vi: 'Chứng nhận đầy đủ', en: 'Fully Certified' },
      description: {
        vi: 'Sản phẩm được chứng nhận bởi các tổ chức uy tín.',
        en: 'Products certified by reputable organizations.'
      }
    }
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  }

  return (
    <div className="why-choose-us-section">
      <div className="overlay-choose-us" />
      
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="section-title"
      >
        {lang === 'vi' ? 'Tại sao chọn chúng tôi?' : 'Why Choose Us?'}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="choose-content-wrapper"
      >
        <Row gutter={[24, 24]}>
          {items.map((item, index) => (
            <Col xs={24} md={12} lg={6} key={index}>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -10 }} // Bay nhẹ khi hover
                className="choose-item"
              >
                <div className="icon-box">
                  <div className="icon-glow" />
                  <div className="icon">{item.icon}</div>
                </div>
                <h3 className="title">{item.title[lang]}</h3>
                <p className="description">{item.description[lang]}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  )
}

export default WhyChooseUs
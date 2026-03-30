import React from 'react'
import { Carousel, Button } from 'antd'
import './AdBanner.css'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { RightOutlined } from '@ant-design/icons'

const AdBanner = () => {
  const { t, i18n } = useTranslation(); 
  const lang = i18n.language || 'en';

  const banners = [
    {
      id: 1,
      title: "importAndexport.ad-banners.title1",
      description: "importAndexport.ad-banners.desc1",
      image: "https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/7/14/e151df377d5e4819aa761b11f228941b"
    },
    {
      id: 2,
      title: "importAndexport.ad-banners.title2",
      description: "importAndexport.ad-banners.desc2",
      image: "https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_1280.jpg"
    },
    {
      id: 3,
      title: "importAndexport.ad-banners.title3",
      description: "importAndexport.ad-banners.desc3",
      image: "https://nld.mediacdn.vn/291774122806476800/2022/1/30/xk2-16435297552741167554561.jpeg"
    },
    {
      id: 4,
      title: "importAndexport.ad-banners.title4",
      description: "importAndexport.ad-banners.desc4",
      image: "https://moit.gov.vn/upload/2005517/fck/files/Ng__nh-xu___t-nh___p-kh___u-l__-g___99d98.jpg"
    }
  ]

  return (
    <div className="ad-banner-container">
      <Carousel autoplay effect="fade" speed={1000} autoplaySpeed={5000}>
        {banners.map((banner) => (
          <div key={banner.id} className="ad-slide">
            <div
              className="ad-slide-bg"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="ad-overlay" />
              <div className="ad-content">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="ad-title">{t(banner.title)}</h2>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <p className="ad-desc">{t(banner.description)}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button 
                    type="primary" 
                    size="large" 
                    className="ad-cta-btn"
                    icon={<RightOutlined />}
                  >
                    {lang === 'vi' ? 'Khám phá ngay' : 'Explore Now'}
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default AdBanner

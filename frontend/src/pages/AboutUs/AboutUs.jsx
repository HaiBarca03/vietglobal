import React, { useEffect } from 'react'
import { Typography, Card } from 'antd'
import { useTranslation } from 'react-i18next'
import { motion, useScroll, useTransform } from 'framer-motion' // Thêm framer-motion
import './AboutUs.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutUsId } from '../../stores/AboutUs/aboutUsApi'

const { Title } = Typography

const AboutUs = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const dispatch = useDispatch()
  
  // Hiệu ứng cuộn chuột cho nền
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100])

  const aboutUsDetail = useSelector(
    (state) => state.aboutUs.aboutUsDetails || []
  )

  useEffect(() => {
    dispatch(getAboutUsId())
  }, [dispatch])

  const aboutData = aboutUsDetail

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { type: 'spring', stiffness: 100, damping: 15 } 
    }
  }

  return (
    <div className="about-page-container">
      {/* Nền động với Framer Motion */}
      <div className="floating-background">
        <motion.div style={{ y: y1 }} className="floating-shape-1" />
        <motion.div style={{ y: y2 }} className="floating-shape-2" />
        <motion.div className="floating-shape-3" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="main-content-wrapper"
      >
        {/* Tiêu đề với hiệu ứng trồi lên */}
        <motion.div variants={itemVariants}>
          <Title level={1} className="about-main-title">
            <span className="title-text-gradient">
              {aboutData.name?.[currentLang]}
            </span>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="title-underline"
            />
          </Title>
        </motion.div>

        {/* Card nội dung với hiệu ứng kính mờ */}
        <motion.div variants={itemVariants}>
          <Card className="about-glass-card">
            <div className="card-inner-glow" />
            <div
              className="about-content-render"
              dangerouslySetInnerHTML={{
                __html: aboutData.description?.[currentLang]
              }}
            />
          </Card>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="floating-action-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          ↑
        </motion.button>
      </motion.div>
    </div>
  )
}

export default AboutUs
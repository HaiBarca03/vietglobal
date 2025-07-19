import React, { useEffect, useState } from 'react'
import { Typography, Card } from 'antd'
import { useTranslation } from 'react-i18next'
import './AboutUs.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutUsId } from '../../stores/AboutUs/aboutUsApi'

const { Title } = Typography

const AboutUs = () => {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(false)
  const aboutUsDetail = useSelector(
    (state) => state.aboutUs.aboutUsDetails || []
  )

  useEffect(() => {
    setIsVisible(true)
  }, [])
  useEffect(() => {
    dispatch(getAboutUsId())
  }, [dispatch])

  const aboutData = aboutUsDetail

  const containerStyle = {
    minHeight: '100vh',
    background: `
      linear-gradient(135deg, 
        rgba(74, 144, 226, 0.1) 0%, 
        rgba(80, 200, 120, 0.05) 25%,
        rgba(255, 107, 107, 0.05) 50%,
        rgba(196, 181, 253, 0.1) 75%,
        rgba(59, 130, 246, 0.08) 100%
      ),
      radial-gradient(circle at 20% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 80%, rgba(34, 197, 94, 0.08) 0%, transparent 50%)
    `,
    backgroundAttachment: 'fixed',
    position: 'relative',
    overflow: 'hidden'
  }

  const floatingShapesStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    zIndex: 0
  }

  const mainContentStyle = {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 20px',
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    opacity: isVisible ? 1 : 0,
    transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
  }

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '60px',
    fontSize: 'clamp(1.5rem, 8vw, 2.5rem)',
    fontWeight: '800',
    background:
      'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    position: 'relative',
    letterSpacing: '-0.02em',
    lineHeight: '1.5',
    textShadow: '0 0 30px rgba(102, 126, 234, 0.3)'
  }

  const cardStyle = {
    borderRadius: '32px',
    border: 'none',
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    boxShadow: `
      0 32px 64px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(255, 255, 255, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4)
    `,
    padding: '0 50px',
    position: 'relative',
    overflow: 'hidden',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    transform: 'translateY(0)',
    cursor: 'default'
  }

  const contentStyle = {
    fontSize: '18px',
    lineHeight: '2',
    color: '#2d3748',
    fontFamily:
      '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    position: 'relative',
    zIndex: 2
  }

  const cardGlowStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(135deg, rgba(102, 126, 234, 0.02) 0%, rgba(118, 75, 162, 0.02) 100%)',
    borderRadius: '32px',
    zIndex: 1
  }

  const handleCardMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
    e.currentTarget.style.boxShadow = `
      0 40px 80px rgba(0, 0, 0, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.4),
      inset 0 1px 0 rgba(255, 255, 255, 0.5)
    `
  }

  const handleCardMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0) scale(1)'
    e.currentTarget.style.boxShadow = `
      0 32px 64px rgba(0, 0, 0, 0.12),
      0 0 0 1px rgba(255, 255, 255, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.4)
    `
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div style={containerStyle}>
      <div style={floatingShapesStyle}>
        <div className="floating-shape-1" />
        <div className="floating-shape-2" />
        <div className="floating-shape-3" />
      </div>

      <div style={mainContentStyle}>
        <Title level={1} style={titleStyle}>
          <span
            style={{
              display: 'inline-block'
              // animation:
              //   'slideInFromLeft 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both'
            }}
          >
            {aboutData.name?.[currentLang]}
          </span>
          <div
            style={{
              position: 'absolute',
              bottom: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '120px',
              height: '6px',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '3px',
              animation: 'expandWidth 1s cubic-bezier(0.4, 0, 0.2, 1) 1s both'
            }}
          />
        </Title>

        {/* Main content card */}
        <Card
          style={cardStyle}
          onMouseEnter={handleCardMouseEnter}
          onMouseLeave={handleCardMouseLeave}
        >
          {/* Card glow effect */}
          <div style={cardGlowStyle} />

          <div
            className="about-content"
            dangerouslySetInnerHTML={{
              __html: aboutData.description?.[currentLang]
            }}
            style={contentStyle}
          />
        </Card>

        {/* Floating action element */}
        <button
          className="floating-action-btn"
          onClick={scrollToTop}
          title="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  )
}

export default AboutUs

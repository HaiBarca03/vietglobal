import React from 'react';
import { Typography, Button, Row, Col, Tag } from 'antd';
import { motion } from 'framer-motion';
import {
  CheckCircleFilled,
  RightOutlined,
  ThunderboltFilled,
  SafetyCertificateFilled,
  EnvironmentFilled,
  ClockCircleFilled,
  FileDoneOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import './HomeBannerSlider.css';

const { Title, Text, Paragraph } = Typography;

const HomeBannerSlider = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang = 'en' } = useParams();

  const features = t('viChi.banner.features', { returnObjects: true }) || [];

  const handleScrollToProcess = () => {
    const el = document.getElementById('order-process-flow');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-banner-wrapper">
      <div className="hero-grid-pattern" />
      <div className="hero-ambient-glow" />

      <div className="banner-container">
        <Row align="middle" gutter={[40, 40]}>
          {/* Left Column: Headline & Strengths */}
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Eyebrow badge */}
              <div className="hero-eyebrow">
                <span className="hero-pulse-dot" />
                <span className="hero-eyebrow-text">{t('viChi.banner.tag')}</span>
              </div>

              <Text className="sub-title-top">{t('viChi.banner.subTitle')}</Text>

              <h1 className="hero-main-title">
                {t('viChi.banner.mainTitle')}
              </h1>

              <Paragraph className="hero-desc">
                {t('viChi.banner.desc')}
              </Paragraph>

              {/* 8-Feature Grid */}
              <div className="feature-grid">
                {Array.isArray(features) &&
                  features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                      <CheckCircleFilled className="check-icon" />
                      <span className="feature-text">{feat}</span>
                    </div>
                  ))}
              </div>

              {/* Action Buttons */}
              <div className="hero-cta-group">
                <Button
                  type="primary"
                  size="large"
                  className="hero-primary-btn"
                  onClick={() => navigate(`/${lang}/shipping-contact-us`)}
                  icon={<RightOutlined />}
                >
                  {t('viChi.banner.ctaQuote')}
                </Button>
                <Button
                  size="large"
                  className="hero-secondary-btn"
                  onClick={handleScrollToProcess}
                >
                  {t('viChi.banner.ctaProcess')}
                </Button>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Interactive Logistics Telemetry Card */}
          <Col xs={24} lg={10} className="telemetry-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { duration: 0.8, delay: 0.2 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              }}
              className="telemetry-card"
            >
              <div className="telemetry-header">
                <div className="telemetry-route-badge">
                  <EnvironmentFilled style={{ color: '#60A5FA' }} />
                  <span>{t('viChi.banner.telemetry.route', 'Trung Quốc ⇄ Việt Nam (Daily Cargo)')}</span>
                </div>
                <div className="live-status-chip">
                  <span className="live-dot" />
                  <span>{t('viChi.banner.telemetry.statusActive', 'Active')}</span>
                </div>
              </div>

              <div className="telemetry-corridor-box">
                <div className="corridor-point">
                  <div className="point-dot origin" />
                  <div>
                    <div className="point-title">{t('viChi.banner.telemetry.originTitle', 'Quảng Châu / Bằng Tường')}</div>
                    <div className="point-sub">{t('viChi.banner.telemetry.originSub', 'Kho tập kết xưởng 1688 & Taobao')}</div>
                  </div>
                </div>

                <div className="corridor-divider">
                  <div className="corridor-line" />
                  <div className="corridor-badge">{t('viChi.banner.telemetry.transitBadge', 'Trucking Express • 3–7 Ngày')}</div>
                </div>

                <div className="corridor-point">
                  <div className="point-dot dest" />
                  <div>
                    <div className="point-title">{t('viChi.banner.telemetry.destTitle', 'Hà Nội • Đà Nẵng • TP.HCM')}</div>
                    <div className="point-sub">{t('viChi.banner.telemetry.destSub', 'Hệ thống tổng kho 3 miền chính chủ')}</div>
                  </div>
                </div>
              </div>

              <div className="telemetry-metrics-grid">
                <div className="metric-item">
                  <div className="metric-icon-wrap blue">
                    <ClockCircleFilled />
                  </div>
                  <div>
                    <div className="metric-val">{t('viChi.banner.telemetry.transitTimeVal', '3 – 7 Ngày')}</div>
                    <div className="metric-lbl">{t('viChi.banner.telemetry.transitTimeLbl', 'Thời gian về hàng')}</div>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-icon-wrap green">
                    <SafetyCertificateFilled />
                  </div>
                  <div>
                    <div className="metric-val">{t('viChi.banner.telemetry.insuranceVal', '100% Bảo hiểm')}</div>
                    <div className="metric-lbl">{t('viChi.banner.telemetry.insuranceLbl', 'Đền bù hàng hóa')}</div>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-icon-wrap amber">
                    <ThunderboltFilled />
                  </div>
                  <div>
                    <div className="metric-val">{t('viChi.banner.telemetry.minWeightVal', 'Từ 50kg')}</div>
                    <div className="metric-lbl">{t('viChi.banner.telemetry.minWeightLbl', 'Ghép cont chính ngạch')}</div>
                  </div>
                </div>

                <div className="metric-item">
                  <div className="metric-icon-wrap purple">
                    <FileDoneOutlined />
                  </div>
                  <div>
                    <div className="metric-val">{t('viChi.banner.telemetry.docVal', 'VAT & C/O Form E')}</div>
                    <div className="metric-lbl">{t('viChi.banner.telemetry.docLbl', 'Chứng từ nhập khẩu')}</div>
                  </div>
                </div>
              </div>

              <div className="telemetry-footer">
                <span className="telemetry-tip">
                  {t('viChi.banner.telemetry.dispatchTip', '⚡ Xe tải xuất bến cố định 18:00 mỗi ngày tại kho Bằng Tường')}
                </span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeBannerSlider;
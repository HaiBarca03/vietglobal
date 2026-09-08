import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import {
  FiArrowRight,
  FiCheckCircle,
  FiBox,
  FiTruck,
  FiLayers,
  FiGlobe,
  FiChevronDown,
  FiClock,
  FiShield,
  FiShoppingBag,
  FiSend,
  FiZap,
  FiPackage,
  FiTag,
  FiFileText,
  FiCompass
} from 'react-icons/fi'
import './FulfillmentPage.css'

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.95, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

const itemVariant = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}

const FulfillmentPage = () => {
  const { t } = useTranslation()
  const { lang = 'en' } = useParams()

  const [activeLane, setActiveLane] = useState('us')
  const [openFaq, setOpenFaq] = useState(0)

  // Estimator State
  const [estimateCategory, setEstimateCategory] = useState('apparel')
  const [estimateMarket, setEstimateMarket] = useState('us')

  // Estimator calculation logic
  const getEstimation = () => {
    let prod = '24 - 48h'
    let transit = '5 - 7 Days'
    let total = '6 - 9 Days'

    if (estimateCategory === 'stock') {
      prod = 'Same-Day (< 12h)'
      if (estimateMarket === 'us') { transit = '5 - 7 Days'; total = '5 - 7 Days'; }
      if (estimateMarket === 'eu') { transit = '6 - 8 Days'; total = '6 - 8 Days'; }
      if (estimateMarket === 'me') { transit = '4 - 6 Days'; total = '4 - 6 Days'; }
    } else if (estimateCategory === 'general') {
      prod = '24h QC & Pack'
      if (estimateMarket === 'us') { transit = '5 - 8 Days'; total = '6 - 9 Days'; }
      if (estimateMarket === 'eu') { transit = '6 - 9 Days'; total = '7 - 10 Days'; }
      if (estimateMarket === 'me') { transit = '4 - 7 Days'; total = '5 - 8 Days'; }
    } else {
      // Apparel POD
      prod = '24 - 48h Print'
      if (estimateMarket === 'us') { transit = '5 - 8 Days'; total = '6 - 10 Days'; }
      if (estimateMarket === 'eu') { transit = '6 - 9 Days'; total = '7 - 11 Days'; }
      if (estimateMarket === 'me') { transit = '4 - 7 Days'; total = '5 - 9 Days'; }
    }

    return { prod, transit, total }
  }

  const currentEst = getEstimation()

  // Pipeline Stations
  const pipelineStations = [
    {
      num: '01',
      icon: <FiZap />,
      title: t('fulfillmentPage.pipeline.step1.title'),
      detail: t('fulfillmentPage.pipeline.step1.desc')
    },
    {
      num: '02',
      icon: <FiLayers />,
      title: t('fulfillmentPage.pipeline.step2.title'),
      detail: t('fulfillmentPage.pipeline.step2.desc')
    },
    {
      num: '03',
      icon: <FiPackage />,
      title: t('fulfillmentPage.pipeline.step3.title'),
      detail: t('fulfillmentPage.pipeline.step3.desc')
    },
    {
      num: '04',
      icon: <FiTruck />,
      title: t('fulfillmentPage.pipeline.step4.title'),
      detail: t('fulfillmentPage.pipeline.step4.desc')
    },
    {
      num: '05',
      icon: <FiShield />,
      title: t('fulfillmentPage.pipeline.step5.title'),
      detail: t('fulfillmentPage.pipeline.step5.desc')
    },
    {
      num: '06',
      icon: <FiCheckCircle />,
      title: t('fulfillmentPage.pipeline.step6.title'),
      detail: t('fulfillmentPage.pipeline.step6.desc')
    }
  ]

  // Lane Console Data Lookup
  const activeLaneData = {
    flag: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.flag`),
    name: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.name`),
    transit: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.transit`),
    carrier: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.carrier`),
    customs: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.customs`),
    advantage: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.advantage`),
    bestFor: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.bestFor`),
    route: t(`fulfillmentPage.laneConsole.lanes.${activeLane}.route`)
  }

  // FAQ Items
  const faqItems = [
    { q: t('fulfillmentPage.faq.q1'), a: t('fulfillmentPage.faq.a1') },
    { q: t('fulfillmentPage.faq.q2'), a: t('fulfillmentPage.faq.a2') },
    { q: t('fulfillmentPage.faq.q3'), a: t('fulfillmentPage.faq.a3') },
    { q: t('fulfillmentPage.faq.q4'), a: t('fulfillmentPage.faq.a4') },
    { q: t('fulfillmentPage.faq.q5'), a: t('fulfillmentPage.faq.a5') },
    { q: t('fulfillmentPage.faq.q6'), a: t('fulfillmentPage.faq.a6') }
  ]

  const platforms = ['Shopify', 'TikTok Shop', 'Amazon', 'WooCommerce', 'Etsy']

  return (
    <div id="fulfillment-page-root" className="fulfillment-page-root">

      {/* 1. HERO SECTION */}
      <section className="ffp-hero">
        <div className="ffp-container">
          <div className="ffp-hero-grid">
            <motion.div
              className="ffp-hero-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ffp-section-eyebrow">
                <span className="ffp-pulse-dot"></span>
                {t('fulfillmentPage.hero.eyebrow')}
              </div>
              <h1 className="ffp-hero-headline">
                {t('fulfillmentPage.hero.headline')}
              </h1>
              <p className="ffp-hero-subheadline">
                {t('fulfillmentPage.hero.subheadline')}
              </p>

              <div className="ffp-hero-actions">
                <Link to={`/${lang}/shipping-contact-us`} className="ffp-btn-primary">
                  {t('fulfillmentPage.hero.primaryCta')}
                  <FiArrowRight />
                </Link>
                <a href="#console" className="ffp-btn-secondary">
                  {t('fulfillmentPage.hero.secondaryCta')}
                </a>
              </div>

              <div className="ffp-hero-trust-badges">
                <div className="ffp-hero-badge-item">
                  <FiCheckCircle />
                  <span>{t('fulfillmentPage.hero.badges.api')}</span>
                </div>
                <div className="ffp-hero-badge-item">
                  <FiClock />
                  <span>{t('fulfillmentPage.hero.badges.dispatch')}</span>
                </div>
                <div className="ffp-hero-badge-item">
                  <FiShield />
                  <span>{t('fulfillmentPage.hero.badges.tracking')}</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Right: Live Shipment Terminal */}
            <motion.div
              className="ffp-dashboard-preview"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="ffp-dashboard-header">
                <div className="ffp-dashboard-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="ffp-dashboard-title-pill">
                  {t('fulfillmentPage.hero.preview.title')}
                </div>
              </div>

              <div className="ffp-dashboard-inner">
                <div className="ffp-live-order-card">
                  <div className="ffp-live-order-top">
                    <span className="ffp-order-code">VG-984210984US</span>
                    <span className="ffp-status-badge in-transit">
                      <span className="ffp-status-dot"></span>
                      {t('fulfillmentPage.hero.preview.status')}
                    </span>
                  </div>
                  <div className="ffp-live-order-details">
                    <div><strong>{t('fulfillmentPage.hero.preview.routeLabel')}</strong> {t('fulfillmentPage.hero.preview.routeVal')}</div>
                    <div><strong>{t('fulfillmentPage.hero.preview.pkgLabel')}</strong> {t('fulfillmentPage.hero.preview.pkgVal')}</div>
                    <div><strong>{t('fulfillmentPage.hero.preview.carrierLabel')}</strong> {t('fulfillmentPage.hero.preview.carrierVal')}</div>
                  </div>
                  <div className="ffp-route-progress-bar">
                    <div className="ffp-progress-track">
                      <motion.div
                        className="ffp-progress-fill"
                        initial={{ width: 0 }}
                        animate={{ width: '68%' }}
                        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
                      />
                    </div>
                    <div className="ffp-progress-labels">
                      <span>{t('fulfillmentPage.hero.preview.step1')}</span>
                      <span>{t('fulfillmentPage.hero.preview.step2')}</span>
                      <span>{t('fulfillmentPage.hero.preview.step3')}</span>
                    </div>
                  </div>
                </div>

                <div className="ffp-quick-stats-row">
                  <div className="ffp-quick-stat-box">
                    <div className="ffp-quick-stat-val">{t('fulfillmentPage.hero.preview.stat1Val')}</div>
                    <div className="ffp-quick-stat-lbl">{t('fulfillmentPage.hero.preview.stat1Lbl')}</div>
                  </div>
                  <div className="ffp-quick-stat-box">
                    <div className="ffp-quick-stat-val">{t('fulfillmentPage.hero.preview.stat2Val')}</div>
                    <div className="ffp-quick-stat-lbl">{t('fulfillmentPage.hero.preview.stat2Lbl')}</div>
                  </div>
                  <div className="ffp-quick-stat-box">
                    <div className="ffp-quick-stat-val">{t('fulfillmentPage.hero.preview.stat3Val')}</div>
                    <div className="ffp-quick-stat-lbl">{t('fulfillmentPage.hero.preview.stat3Lbl')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. METRICS STRIP */}
      <section className="ffp-metrics-strip">
        <div className="ffp-container">
          <motion.div
            className="ffp-metrics-sub"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            {t('fulfillmentPage.metrics.title')}
          </motion.div>
          <motion.div
            className="ffp-metrics-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.div className="ffp-metric-card" variants={itemVariant}>
              <div className="ffp-metric-number">
                <CountUp end={100} suffix="+" duration={2} enableScrollSpy scrollSpyOnce={false} />
              </div>
              <div className="ffp-metric-label">{t('fulfillmentPage.metrics.card1Label')}</div>
            </motion.div>

            <motion.div className="ffp-metric-card" variants={itemVariant}>
              <div className="ffp-metric-number">
                <CountUp end={500} suffix="K+" duration={2} enableScrollSpy scrollSpyOnce={false} />
              </div>
              <div className="ffp-metric-label">{t('fulfillmentPage.metrics.card2Label')}</div>
            </motion.div>

            <motion.div className="ffp-metric-card" variants={itemVariant}>
              <div className="ffp-metric-number">
                {t('fulfillmentPage.metrics.card3Value')}
              </div>
              <div className="ffp-metric-label">{t('fulfillmentPage.metrics.card3Label')}</div>
            </motion.div>

            <motion.div className="ffp-metric-card" variants={itemVariant}>
              <div className="ffp-metric-number">
                <CountUp end={15} suffix="+" duration={2} enableScrollSpy scrollSpyOnce={false} />
              </div>
              <div className="ffp-metric-label">{t('fulfillmentPage.metrics.card4Label')}</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. SOLUTIONS OVERVIEW (High-level, comprehensive, non-repetitive) */}
      <section className="ffp-solutions-section" id="solutions">
        <div className="ffp-container">
          <motion.div
            className="ffp-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInUp}
          >
            <div className="ffp-section-eyebrow">{t('fulfillmentPage.solutions.eyebrow')}</div>
            <h2>{t('fulfillmentPage.solutions.headline')}</h2>
            <p>{t('fulfillmentPage.solutions.subtitle')}</p>
          </motion.div>

          <motion.div
            className="ffp-solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
          >
            {/* Card 1: POD Fulfillment */}
            <motion.div
              className="ffp-solution-card"
              variants={itemVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="ffp-solution-card-top">
                <div className="ffp-solution-icon-box pod-accent">
                  <FiPackage />
                </div>
                <span className="ffp-solution-tag pod-tag">{t('fulfillmentPage.solutions.pod.tag')}</span>
              </div>
              <h3 className="ffp-solution-title">{t('fulfillmentPage.solutions.pod.title')}</h3>
              <p className="ffp-solution-desc">{t('fulfillmentPage.solutions.pod.desc')}</p>

              <div className="ffp-solution-features">
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.pod.item1')}</span>
                </div>
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.pod.item2')}</span>
                </div>
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.pod.item3')}</span>
                </div>
              </div>

              <div className="ffp-solution-footer">
                <span className="ffp-solution-fit">{t('fulfillmentPage.solutions.pod.fitFor')}</span>
              </div>
            </motion.div>

            {/* Card 2: Dropshipping Fulfillment */}
            <motion.div
              className="ffp-solution-card"
              variants={itemVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="ffp-solution-card-top">
                <div className="ffp-solution-icon-box dropship-accent">
                  <FiZap />
                </div>
                <span className="ffp-solution-tag dropship-tag">{t('fulfillmentPage.solutions.dropship.tag')}</span>
              </div>
              <h3 className="ffp-solution-title">{t('fulfillmentPage.solutions.dropship.title')}</h3>
              <p className="ffp-solution-desc">{t('fulfillmentPage.solutions.dropship.desc')}</p>

              <div className="ffp-solution-features">
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.dropship.item1')}</span>
                </div>
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.dropship.item2')}</span>
                </div>
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.dropship.item3')}</span>
                </div>
              </div>

              <div className="ffp-solution-footer">
                <span className="ffp-solution-fit">{t('fulfillmentPage.solutions.dropship.fitFor')}</span>
              </div>
            </motion.div>

            {/* Card 3: E-commerce Fulfillment */}
            <motion.div
              className="ffp-solution-card"
              variants={itemVariant}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
            >
              <div className="ffp-solution-card-top">
                <div className="ffp-solution-icon-box ecom-accent">
                  <FiLayers />
                </div>
                <span className="ffp-solution-tag ecom-tag">{t('fulfillmentPage.solutions.ecommerce.tag')}</span>
              </div>
              <h3 className="ffp-solution-title">{t('fulfillmentPage.solutions.ecommerce.title')}</h3>
              <p className="ffp-solution-desc">{t('fulfillmentPage.solutions.ecommerce.desc')}</p>

              <div className="ffp-solution-features">
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.ecommerce.item1')}</span>
                </div>
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.ecommerce.item2')}</span>
                </div>
                <div className="ffp-feature-item">
                  <FiCheckCircle className="ffp-check-icon" />
                  <span>{t('fulfillmentPage.solutions.ecommerce.item3')}</span>
                </div>
              </div>

              <div className="ffp-solution-footer">
                <span className="ffp-solution-fit">{t('fulfillmentPage.solutions.ecommerce.fitFor')}</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. GLOBAL LANE CONSOLE (Merged Network + Markets) */}
      <section className="ffp-console-section" id="console">
        <div className="ffp-container">
          <motion.div
            className="ffp-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInUp}
          >
            <div className="ffp-section-eyebrow">
              <FiGlobe /> {t('fulfillmentPage.laneConsole.eyebrow')}
            </div>
            <h2>{t('fulfillmentPage.laneConsole.headline')}</h2>
            <p>{t('fulfillmentPage.laneConsole.subtitle')}</p>
          </motion.div>

          <motion.div
            className="ffp-lane-console-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={fadeInScale}
          >
            {/* Console Corridor Tabs with Sliding Indicator */}
            <div className="ffp-console-tabs-bar">
              {[
                { id: 'us', flag: '🇺🇸 USA', label: t('fulfillmentPage.laneConsole.tabs.us') },
                { id: 'eu', flag: '🇪🇺 EU & UK', label: t('fulfillmentPage.laneConsole.tabs.eu') },
                { id: 'me', flag: '🇦🇪 GCC', label: t('fulfillmentPage.laneConsole.tabs.me') },
                { id: 'sea', flag: '🇻🇳 SEA Hub', label: t('fulfillmentPage.laneConsole.tabs.sea') }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`ffp-console-tab-btn ${activeLane === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveLane(tab.id)}
                >
                  <span className="ffp-tab-flag-chip">{tab.flag}</span>
                  <span className="ffp-tab-corridor-name">{tab.label}</span>
                  {activeLane === tab.id && (
                    <motion.div
                      className="ffp-active-tab-indicator"
                      layoutId="activeLaneIndicator"
                      transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Active Corridor Analytics Stage with Animated Transitions */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLane}
                className="ffp-console-stage"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="ffp-console-hero-row">
                  <motion.div
                    className="ffp-console-corridor-title"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.05 }}
                  >
                    <h3>{activeLaneData.name}</h3>
                    <span className="ffp-console-route-snippet">{activeLaneData.route}</span>
                  </motion.div>

                  <motion.div
                    className="ffp-console-transit-badge"
                    initial={{ opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.08, type: 'spring', bounce: 0.3 }}
                  >
                    <div className="ffp-transit-time-big">{activeLaneData.transit}</div>
                    <div className="ffp-transit-time-label">{t('fulfillmentPage.laneConsole.labels.transitTime')}</div>
                  </motion.div>
                </div>

                {/* 3 Key Operational Pillars with Stagger */}
                <div className="ffp-console-pillars-grid">
                  <motion.div
                    className="ffp-console-pillar-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.12 }}
                  >
                    <div className="ffp-pillar-header">
                      <FiTruck />
                      <span>{t('fulfillmentPage.laneConsole.labels.carrier')}</span>
                    </div>
                    <div className="ffp-pillar-main-val">{activeLaneData.carrier}</div>
                    <p className="ffp-pillar-body-text">{t('fulfillmentPage.laneConsole.labels.bestFor')}: {activeLaneData.bestFor}</p>
                  </motion.div>

                  <motion.div
                    className="ffp-console-pillar-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.18 }}
                  >
                    <div className="ffp-pillar-header">
                      <FiShield />
                      <span>{t('fulfillmentPage.laneConsole.labels.customs')}</span>
                    </div>
                    <div className="ffp-pillar-main-val">{activeLaneData.customs}</div>
                    <p className="ffp-pillar-body-text">{t('fulfillmentPage.laneConsole.labels.customsDesc')}</p>
                  </motion.div>

                  <motion.div
                    className="ffp-console-pillar-card"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.24 }}
                  >
                    <div className="ffp-pillar-header">
                      <FiCompass />
                      <span>{t('fulfillmentPage.laneConsole.labels.advantage')}</span>
                    </div>
                    <p className="ffp-pillar-body-text" style={{ fontSize: '0.925rem', color: '#1c2b3a', fontWeight: 500 }}>
                      {activeLaneData.advantage}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. CONNECTED LOGISTICS PIPELINE (Continuous Smart Rail) */}
      <section className="ffp-pipeline-section" id="pipeline">
        <div className="ffp-container">
          <motion.div
            className="ffp-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInUp}
          >
            <div className="ffp-section-eyebrow">{t('fulfillmentPage.pipeline.eyebrow')}</div>
            <h2>{t('fulfillmentPage.pipeline.headline')}</h2>
            <p>{t('fulfillmentPage.pipeline.subtitle')}</p>
          </motion.div>

          <div className="ffp-pipeline-rail-container">
            {/* Glowing Rail Line with Pulse Light */}
            <div className="ffp-pipeline-track-line">
              <div className="ffp-pipeline-pulse-light"></div>
            </div>

            {/* 6 Connected Smart Nodes */}
            <motion.div
              className="ffp-pipeline-stations-grid"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.15 }}
              variants={staggerContainer}
            >
              {pipelineStations.map((station, idx) => (
                <motion.div key={idx} className="ffp-pipeline-station-node" variants={itemVariant}>
                  <div className="ffp-station-icon-orb">
                    {station.icon}
                  </div>
                  <span className="ffp-station-step-tag">Step {station.num}</span>
                  <div className="ffp-station-title">{station.title}</div>
                  <p className="ffp-station-detail">{station.detail}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. INSTANT ESTIMATOR WIDGET */}
      <section className="ffp-estimator-section">
        <div className="ffp-container">
          <motion.div
            className="ffp-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInUp}
          >
            <div className="ffp-section-eyebrow">{t('fulfillmentPage.estimator.eyebrow')}</div>
            <h2>{t('fulfillmentPage.estimator.headline')}</h2>
            <p>{t('fulfillmentPage.estimator.subtitle')}</p>
          </motion.div>

          <motion.div
            className="ffp-estimator-card-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={fadeInScale}
          >
            <div className="ffp-estimator-controls-row">
              <div className="ffp-estimator-field">
                <label>{t('fulfillmentPage.estimator.catLabel')}</label>
                <select
                  className="ffp-estimator-select"
                  value={estimateCategory}
                  onChange={(e) => setEstimateCategory(e.target.value)}
                >
                  <option value="apparel">{t('fulfillmentPage.estimator.catApparel')}</option>
                  <option value="general">{t('fulfillmentPage.estimator.catGeneral')}</option>
                  <option value="stock">{t('fulfillmentPage.estimator.catStock')}</option>
                </select>
              </div>

              <div className="ffp-estimator-field">
                <label>{t('fulfillmentPage.estimator.marketLabel')}</label>
                <select
                  className="ffp-estimator-select"
                  value={estimateMarket}
                  onChange={(e) => setEstimateMarket(e.target.value)}
                >
                  <option value="us">{t('fulfillmentPage.estimator.marketUS')}</option>
                  <option value="eu">{t('fulfillmentPage.estimator.marketEU')}</option>
                  <option value="me">{t('fulfillmentPage.estimator.marketME')}</option>
                </select>
              </div>
            </div>

            {/* Dynamic Calculated Results */}
            <div className="ffp-estimator-result-display">
              <div>
                <div className="ffp-result-item-lbl">{t('fulfillmentPage.estimator.prodTime')}</div>
                <div className="ffp-result-item-val">{currentEst.prod}</div>
              </div>

              <div>
                <div className="ffp-result-item-lbl">{t('fulfillmentPage.estimator.transitTime')}</div>
                <div className="ffp-result-item-val">{currentEst.transit}</div>
              </div>

              <div>
                <div className="ffp-result-item-lbl">{t('fulfillmentPage.estimator.totalTime')}</div>
                <div className="ffp-result-item-val highlight">{currentEst.total}</div>
              </div>
            </div>

            <div className="ffp-estimator-cta-center">
              <Link to={`/${lang}/shipping-contact-us`} className="ffp-btn-primary">
                <FiSend />
                {t('fulfillmentPage.estimator.ctaBtn')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. E-COMMERCE INTEGRATIONS */}
      <section className="ffp-integrations">
        <div className="ffp-container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <div className="ffp-section-eyebrow">{t('fulfillmentPage.integrations.eyebrow')}</div>
            <h2 style={{ fontSize: '1.85rem', fontWeight: 800, color: '#1c2b3a', marginBottom: 8 }}>
              {t('fulfillmentPage.integrations.headline')}
            </h2>
            <p style={{ color: '#64748b' }}>
              {t('fulfillmentPage.integrations.copy')}
            </p>
          </motion.div>

          <motion.div
            className="ffp-integrations-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={staggerContainer}
          >
            {platforms.map((platform) => (
              <motion.div key={platform} className="ffp-integration-badge" variants={itemVariant}>
                <FiShoppingBag style={{ color: '#1464c4' }} />
                <span>{platform}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 8. SOCIAL PROOF & TESTIMONIAL */}
      {/* <section className="ffp-social-proof">
        <div className="ffp-container">
          <motion.div 
            className="ffp-social-proof-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInScale}
          >
            <div className="ffp-quote-icon-mark">“</div>
            <p className="ffp-proof-quote-text">
              {t('fulfillmentPage.socialProof.quote')}
            </p>
            <div className="ffp-proof-author-info">
              <strong>{t('fulfillmentPage.socialProof.author')}</strong>
              <span>{t('fulfillmentPage.socialProof.role')}</span>
            </div>
            <div className="ffp-onboarding-banner-note">
              {t('fulfillmentPage.socialProof.onboarding')}
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* 9. FAQ ACCORDION */}
      <section className="ffp-faq">
        <div className="ffp-container">
          <motion.div
            className="ffp-heading-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInUp}
          >
            <div className="ffp-section-eyebrow">{t('fulfillmentPage.faq.eyebrow')}</div>
            <h2>{t('fulfillmentPage.faq.headline')}</h2>
            <p>{t('fulfillmentPage.faq.subtitle')}</p>
          </motion.div>

          <motion.div
            className="ffp-faq-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={staggerContainer}
          >
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <motion.div key={index} className={`ffp-faq-item ${isOpen ? 'open' : ''}`} variants={itemVariant}>
                  <button
                    className="ffp-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <FiChevronDown className="ffp-faq-icon-arrow" />
                  </button>
                  {isOpen && (
                    <motion.div
                      className="ffp-faq-answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.25 }}
                    >
                      {item.a}
                    </motion.div>
                  )}
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="ffp-final-cta">
        <div className="ffp-container">
          <motion.div
            className="ffp-final-cta-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.25 }}
            variants={fadeInScale}
          >
            <h2>{t('fulfillmentPage.cta.headline')}</h2>
            <p>{t('fulfillmentPage.cta.copy')}</p>
            <div className="ffp-final-cta-buttons">
              <Link to={`/${lang}/shipping-contact-us`} className="ffp-btn-primary">
                <FiSend />
                {t('fulfillmentPage.cta.primary')}
              </Link>
              <Link to={`/${lang}/shipping-contact-us`} className="ffp-btn-secondary">
                {t('fulfillmentPage.cta.secondary')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default FulfillmentPage

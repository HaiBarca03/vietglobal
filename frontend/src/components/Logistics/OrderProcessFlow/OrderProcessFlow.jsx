import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileTextOutlined,
  GiftOutlined,
  CarOutlined,
  HomeOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  SendOutlined,
  ArrowRightOutlined,
  ThunderboltFilled,
  EnvironmentFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./OrderProcessFlow.css";

const chinaStepsConfig = [
  { id: 1, stepNum: "01", key: "s1", icon: <FileTextOutlined /> },
  { id: 2, stepNum: "02", key: "s2", icon: <GiftOutlined /> },
  { id: 3, stepNum: "03", key: "s3", icon: <CarOutlined /> },
  { id: 4, stepNum: "04", key: "s4", icon: <HomeOutlined /> },
];

const vietnamStepsConfig = [
  { id: 5, stepNum: "05", key: "s5", icon: <GlobalOutlined /> },
  { id: 6, stepNum: "06", key: "s6", icon: <SafetyCertificateOutlined /> },
  { id: 7, stepNum: "07", key: "s7", icon: <ShopOutlined /> },
  { id: 8, stepNum: "08", key: "s8", icon: <SendOutlined /> },
];

export default function OrderProcessFlow() {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(1);

  const getStepData = (cfg) => ({
    id: cfg.id,
    stepNum: cfg.stepNum,
    icon: cfg.icon,
    title: t(`viChi.process.steps.${cfg.key}.title`),
    sub: t(`viChi.process.steps.${cfg.key}.sub`),
    detail: t(`viChi.process.steps.${cfg.key}.detail`),
    badge: t(`viChi.process.steps.${cfg.key}.badge`),
  });

  const stageChina = chinaStepsConfig.map(getStepData);
  const stageVietnam = vietnamStepsConfig.map(getStepData);
  const allSteps = [...stageChina, ...stageVietnam];
  const currentStepData = allSteps.find((s) => s.id === activeStep) || allSteps[0];

  return (
    <section id="order-process-flow" className="pipeline-section-wrapper">
      {/* Dynamic Background Ambient Waves */}
      <div className="pipeline-ambient-glow glow-top" />
      <div className="pipeline-ambient-glow glow-bottom" />

      <div className="pipeline-container">
        {/* Header */}
        <div className="pipeline-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="pipeline-eyebrow"
          >
            <ThunderboltFilled style={{ color: "#1464C4" }} />
            <span>{t("viChi.process.eyebrow", "HÀNH TRÌNH VẬN TẢI KHÉP KÍN")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="pipeline-title"
          >
            {t("viChi.process.title", "Pipeline Vận Chuyển 8 Bước Thông Suốt")}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="pipeline-desc"
          >
            {t("viChi.process.subtitle", "Quy trình 8 bước khép kín từ lúc phát sinh đơn đến khi nhận hàng tận tay an toàn, chuẩn xác.")}
          </motion.p>
        </div>

        {/* ================= STAGE 1: NGUỒN HÀNG TRUNG QUỐC ================= */}
        <div className="pipeline-stage-block">
          <div className="stage-ribbon-label">
            <span className="stage-flag-dot china" />
            <span className="stage-text">{t("viChi.process.stage1Title", "CHẶNG 1: NGUỒN HÀNG & TỔNG KHO TRUNG QUỐC")}</span>
            <span className="stage-sub-tag">{t("viChi.process.stage1Sub", "Kho Bằng Tường / Đông Hưng")}</span>
          </div>

          <div className="pipeline-highway-track">
            <div className="highway-connecting-line" />
            <div className="highway-nodes-row">
              {stageChina.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <motion.div
                    key={step.id}
                    className={`highway-node-card ${isActive ? "active" : ""}`}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="node-top-indicator">
                      <span className="node-num-pill">{step.stepNum}</span>
                      <span className="node-badge-pill">{step.badge}</span>
                    </div>

                    <div className="node-icon-circle">
                      {step.icon}
                    </div>

                    <div className="node-title">{step.title}</div>
                    <div className="node-sub">{step.sub}</div>

                    <div className="node-active-bar" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= CENTRAL GATEWAY BRIDGE ================= */}
        <div className="border-crossing-bridge">
          <div className="bridge-track-line" />
          <motion.div
            className="bridge-portal-card"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bridge-pulse-beacon" />
            <div className="bridge-content">
              <div className="bridge-icon">
                <EnvironmentFilled />
              </div>
              <div>
                <div className="bridge-title">{t("viChi.process.bridgeTitle", "Cửa khẩu Quốc tế Hữu Nghị / Tân Thanh")}</div>
                <div className="bridge-sub">{t("viChi.process.bridgeSub", "Chuyên tuyến thông quan mậu dịch chính ngạch • Xuất bến 18:00 hàng ngày")}</div>
              </div>
            </div>
            <div className="bridge-status-tag">
              <span className="status-live-dot" />
              <span>{t("viChi.process.bridgeStatus", "Thông quan 24h")}</span>
            </div>
          </motion.div>
          <div className="bridge-track-line" />
        </div>

        {/* ================= STAGE 2: PHÂN PHỐI VIỆT NAM ================= */}
        <div className="pipeline-stage-block">
          <div className="stage-ribbon-label">
            <span className="stage-flag-dot vietnam" />
            <span className="stage-text">{t("viChi.process.stage2Title", "CHẶNG 2: THÔNG QUAN & GIAO HÀNG TẠI VIỆT NAM")}</span>
            <span className="stage-sub-tag">{t("viChi.process.stage2Sub", "Hà Nội • Đà Nẵng • TP.HCM")}</span>
          </div>

          <div className="pipeline-highway-track">
            <div className="highway-connecting-line vn-line" />
            <div className="highway-nodes-row">
              {stageVietnam.map((step) => {
                const isActive = activeStep === step.id;
                return (
                  <motion.div
                    key={step.id}
                    className={`highway-node-card ${isActive ? "active" : ""}`}
                    onClick={() => setActiveStep(step.id)}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="node-top-indicator">
                      <span className="node-num-pill">{step.stepNum}</span>
                      <span className="node-badge-pill vn">{step.badge}</span>
                    </div>

                    <div className="node-icon-circle vn">
                      {step.icon}
                    </div>

                    <div className="node-title">{step.title}</div>
                    <div className="node-sub">{step.sub}</div>

                    <div className="node-active-bar" />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= INTERACTIVE STEP DETAIL CONSOLE ================= */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="step-detail-console"
        >
          <div className="detail-console-left">
            <div className="detail-step-badge">
              <span>{t("viChi.process.stepPrefix", "BƯỚC")} {currentStepData.stepNum}</span>
              <ArrowRightOutlined style={{ fontSize: 12 }} />
              <span className="detail-step-name">{currentStepData.title}</span>
            </div>
            <div className="detail-step-title">{currentStepData.sub}</div>
            <div className="detail-step-desc">{currentStepData.detail}</div>
          </div>

          <div className="detail-console-right">
            <div className="detail-action-chips">
              <span className="chip">{t("viChi.process.chipOnTime", "✓ Cam kết đúng tiến độ")}</span>
              <span className="chip">{t("viChi.process.chipTracking", "✓ Cập nhật mã tracking realtime")}</span>
              <span className="chip">{t("viChi.process.chipInsurance", "✓ Đền bù 100% nếu thất lạc")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

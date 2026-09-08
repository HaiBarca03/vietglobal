import React, { useState } from "react";
import { Button } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  SafetyCertificateFilled,
  CustomerServiceOutlined,
  ClockCircleFilled,
  CheckCircleFilled,
  RightOutlined,
  FileProtectOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceCommitment.css";

const commitmentConfigs = [
  {
    id: 1,
    key: "compensation",
    icon: <SafetyCertificateFilled />,
    accent: "blue",
  },
  {
    id: 2,
    key: "support",
    icon: <CustomerServiceOutlined />,
    accent: "teal",
  },
  {
    id: 3,
    key: "deliveryTime",
    icon: <ClockCircleFilled />,
    accent: "amber",
  },
];

const ServiceCommitment = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { lang = "en" } = useParams();
  const [selectedId, setSelectedId] = useState(1);

  const getCommitmentData = (cfg) => {
    const rawPoints = t(`viChi.commitments.${cfg.key}.points`, { returnObjects: true });
    return {
      id: cfg.id,
      key: cfg.key,
      icon: cfg.icon,
      accent: cfg.accent,
      title: t(`viChi.commitments.${cfg.key}.title`),
      tag: t(`viChi.commitments.${cfg.key}.tag`),
      slaWindow: t(`viChi.commitments.${cfg.key}.slaWindow`),
      statement: t(`viChi.commitments.${cfg.key}.statement`),
      points: Array.isArray(rawPoints) ? rawPoints : [],
    };
  };

  const commitments = commitmentConfigs.map(getCommitmentData);
  const activeCommitment = commitments.find((c) => c.id === selectedId) || commitments[0];

  return (
    <section className="sla-hub-section">
      <div className="sla-hub-container">
        {/* Header */}
        <div className="sla-header">
          <div className="sla-eyebrow">
            <SafetyCertificateFilled style={{ color: "#1464C4" }} />
            <span>{t("viChi.commitments.eyebrow", "CAM KẾT TRÁCH NHIỆM DỊCH VỤ")}</span>
          </div>
          <h2 className="sla-main-title">
            {t("viChi.commitments.mainTitle", "3 Cam Kết Vàng Về Trách Nhiệm Dịch Vụ")}
          </h2>
          <p className="sla-subtitle">
            {t("viChi.orderServiceCommit")}
          </p>
        </div>

        {/* Interactive 2-Column Asymmetrical Showcase */}
        <div className="sla-showcase-grid">
          {/* Left Column: Selector Ribbon Pillars */}
          <div className="sla-selector-column">
            {commitments.map((item) => {
              const isSelected = selectedId === item.id;
              return (
                <motion.div
                  key={item.id}
                  className={`sla-selector-pill ${item.accent} ${isSelected ? "selected" : ""}`}
                  onClick={() => setSelectedId(item.id)}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="pill-left-meta">
                    <div className="pill-icon-box">
                      {item.icon}
                    </div>
                    <div>
                      <div className="pill-eyebrow">
                        {t("viChi.commitments.commitmentPrefix", "Cam kết 0")}{item.id}
                      </div>
                      <div className="pill-title">{item.title}</div>
                    </div>
                  </div>

                  <div className="pill-right-indicator">
                    <span className="pill-tag">{item.tag}</span>
                    <RightOutlined className="pill-arrow" />
                  </div>
                </motion.div>
              );
            })}

            {/* Trust Assurance Badge */}
            <div className="sla-trust-card">
              <FileProtectOutlined style={{ fontSize: 24, color: "#1464C4" }} />
              <div>
                <div className="trust-card-title">
                  {t("viChi.commitments.legalTitle", "Cam Kết Có Hiệu Lực Pháp Lý")}
                </div>
                <div className="trust-card-sub">
                  {t("viChi.commitments.legalSub", "Kèm hợp đồng vận chuyển nguyên tắc & bảo hiểm hàng hóa rõ ràng.")}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Guarantee Spotlight Panel */}
          <div className="sla-spotlight-column">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCommitment.id}
                initial={{ opacity: 0, scale: 0.97, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: -15 }}
                transition={{ duration: 0.35 }}
                className={`sla-display-panel accent-${activeCommitment.accent}`}
              >
                <div className="display-panel-top">
                  <div className="display-badge-row">
                    <span className="display-tag-pill">{activeCommitment.tag}</span>
                    <span className="display-sla-chip">
                      <ThunderboltFilled style={{ color: "#F59E0B" }} />
                      <span>{activeCommitment.slaWindow}</span>
                    </span>
                  </div>

                  <h3 className="display-title">{activeCommitment.title}</h3>
                  <p className="display-statement">{activeCommitment.statement}</p>
                </div>

                <div className="display-divider" />

                <div className="display-points-section">
                  <div className="points-heading">
                    {t("viChi.commitments.pointsHeading", "Quy chuẩn thực thi chi tiết:")}
                  </div>
                  <div className="points-list-grid">
                    {activeCommitment.points.map((pt, idx) => (
                      <div key={idx} className="point-row">
                        <CheckCircleFilled className="point-icon" />
                        <span className="point-text">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="display-panel-footer">
                  <Button
                    type="primary"
                    size="large"
                    className="sla-cta-btn"
                    onClick={() => navigate(`/${lang}/shipping-contact-us`)}
                  >
                    <span>{t("viChi.commitments.ctaBtn", "Yêu cầu tư vấn & Nhận báo giá")}</span>
                    <RightOutlined />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCommitment;

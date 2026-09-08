import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  PayCircleOutlined,
  SwapOutlined,
  SendOutlined,
  InboxOutlined,
  CompassFilled,
  FileProtectOutlined,
  SafetyCertificateFilled,
  RiseOutlined,
  ClockCircleFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import "./AppStats.css";

const statsConfig = [
  {
    id: 1,
    value: 20394,
    suffix: "+",
    labelKey: "viChi.paymentFormForHousehold",
    descKey: "viChi.paymentFormForHouseholdDesc",
    descFallback: "Xử lý thanh toán xưởng 1688 / Taobao / Tmall trực tiếp trong 10 phút",
    growthKey: "viChi.stats.card1Growth",
    growthFallback: "+24% tháng này",
    slaKey: "viChi.stats.card1Sla",
    slaFallback: "SLA xử lý: < 10 phút",
    icon: <PayCircleOutlined />,
    badgeType: "positive",
    themeColor: "#1464C4",
  },
  {
    id: 2,
    value: 4982,
    suffix: "+",
    labelKey: "viChi.currencyExchangeService",
    descKey: "viChi.currencyExchangeServiceDesc",
    descFallback: "Tỷ giá cạnh tranh sát thị trường, bảo mật giao dịch tuyệt đối 100%",
    growthKey: "viChi.stats.card2Growth",
    growthFallback: "Khớp lệnh tự động",
    slaKey: "viChi.stats.card2Sla",
    slaFallback: "Khớp lệnh tức thì 24/7",
    icon: <SwapOutlined />,
    badgeType: "featured",
    themeColor: "#0D9488",
  },
  {
    id: 3,
    value: 2459,
    suffix: "+",
    labelKey: "viChi.ordersEveryDay",
    descKey: "viChi.ordersEveryDayDesc",
    descFallback: "Đội xe tải chuyên tuyến xuất bến cố định 3 chuyến mỗi ngày",
    growthKey: "viChi.stats.card3Growth",
    growthFallback: "Đúng giờ 99.8%",
    slaKey: "viChi.stats.card3Sla",
    slaFallback: "Xuất bến cố định mỗi ngày",
    icon: <SendOutlined />,
    badgeType: "success",
    themeColor: "#4F46E5",
  },
  {
    id: 4,
    value: 19852,
    suffix: "+",
    labelKey: "viChi.depositApplications",
    descKey: "viChi.depositApplicationsDesc",
    descFallback: "Kiểm đếm kiện, bọc bọt khí, đóng khung gỗ và phân loại tự động",
    growthKey: "viChi.stats.card4Growth",
    growthFallback: "Zero thất lạc",
    slaKey: "viChi.stats.card4Sla",
    slaFallback: "An toàn nguyên kiện 100%",
    icon: <InboxOutlined />,
    badgeType: "security",
    themeColor: "#D97706",
  },
];

const AppStats = () => {
  const { t } = useTranslation();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="stats-cockpit-section">
      {/* Background Ambient Lights */}
      <div className="stats-ambient-glow glow-top" />
      <div className="stats-ambient-glow glow-bottom" />

      <div className="stats-cockpit-container">
        {/* Top Control Bar: Live Telemetry & Corridors */}
        <div className="cockpit-control-bar">
          <div className="cockpit-telemetry-status">
            <span className="telemetry-pulse-dot">
              <span className="telemetry-radar-ping" />
            </span>
            <span className="telemetry-live-badge">
              {t("viChi.stats.telemetryLive", "LIVE OPERATIONS")}
            </span>
            <span className="telemetry-divider">•</span>
            <span className="telemetry-headline">
              {t("viChi.stats.telemetryHeadline", "HỆ THỐNG THÔNG QUAN CHÍNH NGẠCH VẬN HÀNH 24/7")}
            </span>
          </div>

          <div className="cockpit-corridor-nodes">
            <div className="corridor-node-pill">
              <span className="node-indicator online" />
              <span className="node-name">{t("viChi.stats.nodeBangTuong", "Kho Bằng Tường")}:</span>
              <strong className="node-status">{t("viChi.stats.statusReady", "Sẵn sàng")}</strong>
            </div>
            <div className="corridor-node-pill">
              <span className="node-indicator online" />
              <span className="node-name">{t("viChi.stats.nodeHuuNghi", "Cửa khẩu Hữu Nghị")}:</span>
              <strong className="node-status">{t("viChi.stats.statusSmooth", "Thông suốt")}</strong>
            </div>
            <div className="corridor-node-pill hidden-mobile">
              <span className="node-indicator sync" />
              <span className="node-name">{t("viChi.stats.nodeSync", "Đồng bộ")}:</span>
              <strong className="node-status">{t("viChi.stats.statusRealtime", "Real-time")}</strong>
            </div>
          </div>
        </div>

        {/* Section Headline */}
        <div className="stats-section-intro">
          <div className="stats-badge-pill">
            <RiseOutlined /> {t("viChi.stats.eyebrow", "NĂNG LỰC CUNG ỨNG & THỰC THI THỰC TẾ")}
          </div>
          <h2 className="stats-title-main">
            {t("viChi.stats.title", "Dữ liệu vận hành minh bạch theo thời gian thực")}
          </h2>
          <p className="stats-subtitle-desc">
            {t("viChi.stats.desc", "Toàn bộ lưu lượng hàng hóa, thanh toán nguồn hàng và tiến độ thông quan đều được quản lý tự động hóa trên nền tảng VietGlobal.")}
          </p>
        </div>

        {/* 4 Modern Enterprise Metric Cards */}
        <div className="stats-cards-grid">
          {statsConfig.map((item) => {
            const isHovered = hoveredCard === item.id;
            return (
              <motion.div
                key={item.id}
                className={`stats-enterprise-card ${isHovered ? "active" : ""}`}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{ "--card-accent": item.themeColor }}
              >
                {/* Top Accent Line */}
                <div className="card-top-accent" />

                {/* Card Top: Icon & Growth Badge */}
                <div className="card-head-row">
                  <div className="card-icon-wrapper">
                    {item.icon}
                  </div>
                  <div className={`card-growth-pill ${item.badgeType}`}>
                    <span className="growth-dot" />
                    <span>{t(item.growthKey, item.growthFallback)}</span>
                  </div>
                </div>

                {/* Number Display */}
                <div className="card-metric-value">
                  <CountUp
                    end={item.value}
                    duration={2.2}
                    separator=","
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  <span className="metric-suffix-symbol">{item.suffix}</span>
                </div>

                {/* Card Title & Desc */}
                <h3 className="card-metric-title">
                  {t(item.labelKey)}
                </h3>
                <p className="card-metric-desc">
                  {t(item.descKey, item.descFallback)}
                </p>

                {/* Micro SLA Specification Pill */}
                <div className="card-sla-badge">
                  <ClockCircleFilled className="sla-icon" />
                  <span>{t(item.slaKey, item.slaFallback)}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Live Assurance Deck */}
        <div className="stats-assurance-deck">
          <div className="assurance-deck-card">
            <div className="assurance-icon-box gps">
              <CompassFilled />
            </div>
            <div className="assurance-text-content">
              <h4 className="assurance-title">{t("viChi.stats.gpsTitle", "Theo dõi vị trí Real-time (GPS)")}</h4>
              <p className="assurance-desc">{t("viChi.stats.gpsDesc", "Định vị vệ tinh chính xác lộ trình xe tải và trạng thái kho bãi 24/7")}</p>
            </div>
          </div>

          <div className="assurance-deck-card">
            <div className="assurance-icon-box vat">
              <FileProtectOutlined />
            </div>
            <div className="assurance-text-content">
              <h4 className="assurance-title">{t("viChi.stats.vatTitle", "100% Hóa đơn GTGT & Tờ khai hải quan")}</h4>
              <p className="assurance-desc">{t("viChi.stats.vatDesc", "Hồ sơ pháp lý minh bạch, chứng từ điện tử đầy đủ hợp chuẩn xuất nhập khẩu")}</p>
            </div>
          </div>

          <div className="assurance-deck-card">
            <div className="assurance-icon-box shield">
              <SafetyCertificateFilled />
            </div>
            <div className="assurance-text-content">
              <h4 className="assurance-title">{t("viChi.stats.insuranceTitle", "Bảo hiểm 100% bồi thường toàn diện")}</h4>
              <p className="assurance-desc">{t("viChi.stats.insuranceDesc", "Cam kết bảo hiểm trọn gói giá trị tiền hàng, bồi thường nhanh trong 24 giờ")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStats;

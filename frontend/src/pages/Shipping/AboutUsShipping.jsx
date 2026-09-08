import { useState } from "react";
import { Card, Col, Row, Tabs, Tag, Typography, Space, Divider } from "antd";
import {
  GlobalOutlined,
  ShoppingOutlined,
  HomeOutlined,
  CarOutlined,
  CheckCircleFilled,
  RightOutlined,
  EnvironmentOutlined,
  SafetyOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  BranchesOutlined,
  RocketOutlined,
  ThunderboltOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import "./Logistics.css";
import { useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
const { Title, Text, Paragraph } = Typography;

const COLORS = {
  primary: "#0A2540",
  accent: "#1677FF",
  accentLight: "#E6F4FF",
  gold: "#D4A843",
  surface: "#F8FAFC",
  white: "#FFFFFF",
  textMuted: "#6B7A8D",
  border: "#E2E8F0",
};

const styles = {
  page: {
    fontFamily: "'IBM Plex Sans', 'Be Vietnam Pro', sans-serif",
    background: COLORS.surface,
    minHeight: "100vh",
  },
  hero: {
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, #1a3a5c 60%, #0d3060 100%)`,
    padding: "64px 48px 56px",
    position: "relative",
    overflow: "hidden",
  },
  heroOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(ellipse at 80% 50%, rgba(22,119,255,0.18) 0%, transparent 65%)",
    pointerEvents: "none",
  },
  heroGrid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    pointerEvents: "none",
  },
  badge: {
    background: "rgba(22,119,255,0.2)",
    border: "1px solid rgba(22,119,255,0.4)",
    borderRadius: 20,
    padding: "4px 14px",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    marginBottom: 16,
  },
  sectionTitle: {
    color: COLORS.primary,
    fontWeight: 700,
    letterSpacing: "-0.5px",
    margin: 0,
  },
  tabCard: (active) => ({
    cursor: "pointer",
    borderRadius: 12,
    border: `2px solid ${active ? COLORS.accent : COLORS.border}`,
    background: active ? COLORS.accentLight : COLORS.white,
    padding: "20px 24px",
    transition: "all 0.2s ease",
    boxShadow: active
      ? "0 4px 20px rgba(22,119,255,0.12)"
      : "0 1px 4px rgba(0,0,0,0.04)",
  }),
  routeTag: {
    background: COLORS.accentLight,
    color: COLORS.accent,
    border: `1px solid rgba(22,119,255,0.2)`,
    borderRadius: 6,
    padding: "3px 10px",
    fontSize: 13,
    fontWeight: 500,
  },
  featureItem: {
    display: "flex",
    alignItems: "flex-start",
    gap: 10,
    padding: "10px 0",
    borderBottom: `1px solid ${COLORS.border}`,
  },
  checkIcon: {
    color: COLORS.accent,
    fontSize: 16,
    marginTop: 2,
    flexShrink: 0,
  },
  statCard: {
    background: COLORS.white,
    borderRadius: 12,
    padding: "24px",
    textAlign: "center",
    border: `1px solid ${COLORS.border}`,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  warehouseFeatureCard: {
    background: COLORS.white,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 12,
    padding: "24px",
    height: "100%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
    transition: "box-shadow 0.2s",
  },
  fulfillmentCard: {
    background: COLORS.white,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 14,
    padding: "28px 24px",
    height: "100%",
    boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
  podBadge: {
    width: 46,
    height: 46,
    borderRadius: 12,
    background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 22,
    boxShadow: "0 4px 12px rgba(255,107,107,0.25)",
    flexShrink: 0,
  },
  dropshipBadge: {
    width: 46,
    height: 46,
    borderRadius: 12,
    background: "linear-gradient(135deg, #1677FF 0%, #36CFC9 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 22,
    boxShadow: "0 4px 12px rgba(22,119,255,0.25)",
    flexShrink: 0,
  },
  fulfillmentLinkBanner: {
    marginTop: 24,
    background: `linear-gradient(135deg, ${COLORS.primary} 0%, #0F2F57 100%)`,
    borderRadius: 14,
    padding: "22px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(10,37,64,0.12)",
    transition: "all 0.2s ease",
  },
};

// --- DATA ---

// const logisticsRoutes = [
//   {
//     key: "chau-a",
//     label: "Châu Á",
//     icon: <GlobalOutlined />,
//     description:
//       "Khai thác các tuyến vận chuyển đến các quốc gia trọng điểm tại Châu Á với lịch tàu ổn định.",
//     countries: [
//       "Trung Quốc",
//       "Hàn Quốc",
//       "Nhật Bản",
//       "Singapore",
//       "Thái Lan",
//       "Malaysia",
//       "ASEAN",
//     ],
//     services: [
//       "Vận chuyển đường biển FCL/LCL",
//       "Vận chuyển hàng không (Air Freight)",
//       "Gom hàng (Consolidation)",
//       "Dịch vụ Door to Door",
//       "Hỗ trợ thủ tục hải quan",
//     ],
//   },
//   {
//     key: "noi-a",
//     label: "Nội Á",
//     icon: <EnvironmentOutlined />,
//     description:
//       "Dịch vụ vận chuyển trong khu vực Nội Á với tần suất chuyến cao và thời gian transit ngắn.",
//     countries: [
//       "Vietnam – Trung Quốc",
//       "Vietnam – Thái Lan",
//       "Vietnam – Indonesia",
//       "Vietnam – Philippines",
//       "Vietnam – Malaysia",
//     ],
//     services: [
//       "Tần suất chuyến cao",
//       "Thời gian transit ngắn",
//       "Giá cước cạnh tranh",
//       "Theo dõi hàng hóa realtime",
//       "Hỗ trợ chứng từ đầy đủ",
//     ],
//   },
//   {
//     key: "trung-dong",
//     label: "Trung Đông",
//     icon: <CarOutlined />,
//     description:
//       "Vận chuyển đến các thị trường Trung Đông đang tăng trưởng mạnh với lịch tàu ổn định.",
//     countries: [
//       "UAE (Dubai, Jebel Ali)",
//       "Saudi Arabia",
//       "Qatar",
//       "Kuwait",
//       "Oman",
//       "Bahrain",
//     ],
//     services: [
//       "Lịch tàu ổn định",
//       "Giá cước cạnh tranh",
//       "Hỗ trợ chứng từ nhập khẩu",
//       "Đối tác hãng tàu uy tín",
//       "Tư vấn thị trường",
//     ],
//   },
//   {
//     key: "duong-bien",
//     label: "Đường biển",
//     icon: <ShoppingOutlined />,
//     description:
//       "Tối ưu chi phí cho các lô hàng lớn với mạng lưới đối tác hãng tàu toàn cầu.",
//     countries: [
//       "FCL (Full Container Load)",
//       "LCL (Less than Container Load)",
//       "Hàng dự án",
//       "Hàng quá khổ quá tải",
//       "Door to Door",
//     ],
//     services: [
//       "Mạng lưới hãng tàu toàn cầu",
//       "Lịch trình ổn định, đúng giờ",
//       "Giá cước tốt nhất thị trường",
//       "Hỗ trợ hải quan 24/7",
//       "Tracking hàng hóa trực tuyến",
//     ],
//     isRoute: false,
//   },
// ];

const logisticsRoutes = [
  {
    key: "chau-a",
    icon: <GlobalOutlined />
  },
  {
    key: "noi-a",
    icon: <EnvironmentOutlined />
  },
  {
    key: "trung-dong-nam-a",
    icon: <BranchesOutlined />
  },
  {
    key: "trung-au-my",
    icon: <RocketOutlined />
  },
  {
    key: "trung-dong",
    icon: <CarOutlined />
  },
  {
    key: "duong-bien",
    icon: <ShoppingOutlined />,
    isRoute: false
  }
]

const warehouseServices = [
  {
    icon: <HomeOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    key: "storage"
  },
  {
    icon: <SafetyOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    key: "management"
  },
  {
    icon: <ClockCircleOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    key: "customs"
  },
  {
    icon: <TeamOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    key: "valueAdded"
  }
]

const stats = [
  { value: "introduce.stats.global", label: "introduce.stats.globalDesc" },
  { value: "introduce.stats.scale", label: "introduce.stats.scaleDesc" },
  { value: "introduce.stats.reliable", label: "introduce.stats.reliableDesc" },
  { value: "introduce.stats.support", label: "introduce.stats.supportDesc" },
];

// --- COMPONENTS ---

function RouteTabContent({ route }) {
  const { t } = useTranslation();

  const countries = t(`logistics.routes.${route.key}.countries`, {
    returnObjects: true,
  });

  const services = t(`logistics.routes.${route.key}.services`, {
    returnObjects: true,
  });

  return (
    <Row gutter={[32, 24]} style={{ marginTop: 24 }}>
      <Col xs={24} md={12}>
        <div style={{ marginBottom: 20 }}>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            {t(`logistics.routes.${route.key}.description`)}
          </Text>
        </div>

        <div style={{ marginBottom: 8 }}>
          <Text
            style={{
              fontWeight: 600,
              color: COLORS.primary,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {route.isRoute === false
              ? t("logistics.cargoType")
              : t("logistics.marketRoute")}
          </Text>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
          {countries.map((c, index) => (
            <span key={index} style={styles.routeTag}>
              {c}
            </span>
          ))}
        </div>
      </Col>

      <Col xs={24} md={12}>
        <div
          style={{
            background: COLORS.surface,
            borderRadius: 10,
            padding: "20px 24px",
            border: `1px solid ${COLORS.border}`,
          }}
        >
          <Text
            style={{
              fontWeight: 600,
              color: COLORS.primary,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            {t("logistics.servicesIncluded")}
          </Text>

          <div style={{ marginTop: 12 }}>
            {services.map((s, index) => (
              <div key={index} style={styles.featureItem}>
                <CheckCircleFilled style={styles.checkIcon} />
                <Text style={{ color: COLORS.primary, fontSize: 14 }}>
                  {s}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default function AboutUsShipping() {
  const [activeRoute, setActiveRoute] = useState("chau-a");
  const currentRoute = logisticsRoutes.find((r) => r.key === activeRoute);
  const lang = i18next.language || "en";
  const {t} = useTranslation()
  const navigate = useNavigate();
  const handleContact = () => {
    navigate(`/${lang}/shipping-contact-us`);
  };
  const highlights = t("warehouse.highlights", { returnObjects: true });
  return (
    <div style={styles.page}>
      {/* HERO */}
      <div style={styles.hero}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroGrid} />
        <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
          <div style={styles.badge}>
            <GlobalOutlined style={{ color: "#60A5FA", fontSize: 13 }} />
            <Text style={{ color: "#93C5FD", fontSize: 13, fontWeight: 500 }}>
              {t("introduce.badge")}
            </Text>
          </div>
          <Title
            level={1}
            style={{
              color: "#fff",
              fontWeight: 800,
              fontSize: 42,
              letterSpacing: "-1px",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            {t("links.Services")}
            <span style={{ color: "#60A5FA" }}> Logistics</span>
            <br />&  {t("introduce.text")}
          </Title>
          <Paragraph
            style={{
              color: "#94A3B8",
              fontSize: 17,
              maxWidth: 560,
              margin: "0 0 40px",
            }}
          >
            {t("introduce.description")}
          </Paragraph>
          <Row gutter={[24, 16]}>
            {stats.map((s) => (
              <Col key={s.label} xs={12} sm={6}>
                <div
                  style={{ borderLeft: "3px solid #1677FF", paddingLeft: 16 }}
                >
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: "#fff",
                      lineHeight: 1.1,
                    }}
                  >
                    {t(s.value)}
                  </div>
                  <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 2 }}>
                    {t(s.label)}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "56px 24px" }}>
        {/* LOGISTICS SECTION */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 8 }}>
            <Tag
              color="blue"
              style={{ borderRadius: 20, fontWeight: 600, fontSize: 12 }}
            >
              {t("introduce.shipSer")}
            </Tag>
          </div>
          <Title level={2} style={styles.sectionTitle}>
            {t("introduce.trans")}
          </Title>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            {t("introduce.ChooseTrans")}
          </Text>

          {/* Tab Selector */}
          <Row gutter={[12, 12]} style={{ marginTop: 28 }}>
            {logisticsRoutes.map((route) => (
              <Col xs={12} sm={8} md={4} key={route.key}>
                <div
                  style={styles.tabCard(activeRoute === route.key)}
                  onClick={() => setActiveRoute(route.key)}
                >
                  <div
                    style={{
                      color:
                        activeRoute === route.key
                          ? COLORS.accent
                          : COLORS.textMuted,
                      fontSize: 22,
                      marginBottom: 8,
                    }}
                  >
                    {route.icon}
                  </div>
                  <Text
                    style={{
                      fontWeight: 600,
                      color:
                        activeRoute === route.key
                          ? COLORS.accent
                          : COLORS.primary,
                      fontSize: 14,
                    }}
                  >
                    {t(`logistics.routes.${route.key}.label`)}
                  </Text>
                  <div
                    style={{
                      color: COLORS.accent,
                      marginTop: 6,
                      opacity: activeRoute === route.key ? 1 : 0,
                      transition: "opacity 0.2s",
                    }}
                  >
                    <RightOutlined style={{ fontSize: 11 }} />
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          {/* Tab Content */}
          <div
            style={{
              background: COLORS.white,
              borderRadius: 14,
              border: `1px solid ${COLORS.border}`,
              padding: "28px 32px",
              marginTop: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 4,
              }}
            >
              <span style={{ fontSize: 20, color: COLORS.accent }}>
                {currentRoute.icon}
              </span>
              <Title level={4} style={{ margin: 0, color: COLORS.primary }}>
                {t("introduce.route")} {t(`logistics.routes.${currentRoute.key}.label`)}
              </Title>
            </div>
            <Divider style={{ margin: "16px 0" }} />
            <RouteTabContent route={currentRoute} />
          </div>
        </div>

        {/* FULFILLMENT POD & DROPSHIPPING SECTION */}
        <div style={{ marginBottom: 56 }}>
          <div style={{ marginBottom: 8 }}>
            <Tag
              color="cyan"
              style={{ borderRadius: 20, fontWeight: 600, fontSize: 12 }}
            >
              {t("fulfillmentSection.tag")}
            </Tag>
          </div>
          <Title level={2} style={styles.sectionTitle}>
            {t("fulfillmentSection.title")}
          </Title>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            {t("fulfillmentSection.subtitle")}
          </Text>

          <Row gutter={[20, 20]} style={{ marginTop: 28 }}>
            {/* POD Card */}
            <Col xs={24} md={12}>
              <div style={styles.fulfillmentCard}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <div style={styles.podBadge}>
                      <ThunderboltOutlined />
                    </div>
                    <div>
                      <Title level={4} style={{ margin: 0, color: COLORS.primary, fontSize: 17 }}>
                        {t("fulfillmentSection.pod.title")}
                      </Title>
                      <Tag color="volcano" style={{ marginTop: 4, borderRadius: 10, fontSize: 11 }}>
                        Zero Inventory • On-demand
                      </Tag>
                    </div>
                  </div>
                  <Paragraph style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                    {t("fulfillmentSection.pod.desc")}
                  </Paragraph>
                  <div style={{ marginTop: 12 }}>
                    {(t("fulfillmentSection.pod.items", { returnObjects: true }) || []).map((item, idx) => (
                      <div key={idx} style={styles.featureItem}>
                        <CheckCircleFilled style={{ ...styles.checkIcon, color: "#FF6B6B" }} />
                        <Text style={{ fontSize: 13.5, color: "#334155" }}>{item}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            {/* Dropshipping Card */}
            <Col xs={24} md={12}>
              <div style={styles.fulfillmentCard}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
                    <div style={styles.dropshipBadge}>
                      <ShopOutlined />
                    </div>
                    <div>
                      <Title level={4} style={{ margin: 0, color: COLORS.primary, fontSize: 17 }}>
                        {t("fulfillmentSection.dropship.title")}
                      </Title>
                      <Tag color="blue" style={{ marginTop: 4, borderRadius: 10, fontSize: 11 }}>
                        Multi-platform • Global Delivery
                      </Tag>
                    </div>
                  </div>
                  <Paragraph style={{ color: COLORS.textMuted, fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>
                    {t("fulfillmentSection.dropship.desc")}
                  </Paragraph>
                  <div style={{ marginTop: 12 }}>
                    {(t("fulfillmentSection.dropship.items", { returnObjects: true }) || []).map((item, idx) => (
                      <div key={idx} style={styles.featureItem}>
                        <CheckCircleFilled style={styles.checkIcon} />
                        <Text style={{ fontSize: 13.5, color: "#334155" }}>{item}</Text>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          {/* Banner link to dedicated fulfillment page */}
          <div
            style={styles.fulfillmentLinkBanner}
            onClick={() => navigate(`/${lang}/fulfillment`)}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: "rgba(22,119,255,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#60A5FA",
                  fontSize: 20,
                  flexShrink: 0,
                }}
              >
                <RocketOutlined />
              </div>
              <div>
                <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>
                  {t("fulfillmentSection.exploreFulfillment")}
                </div>
                <div style={{ color: "#94A3B8", fontSize: 13, marginTop: 2 }}>
                  {t("fulfillmentSection.exploreFulfillmentDesc")}
                </div>
              </div>
            </div>
            <div
              style={{
                color: "#60A5FA",
                fontWeight: 600,
                fontSize: 14,
                display: "flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <span>{t("fulfillmentSection.actionBtn")}</span>
              <RightOutlined style={{ fontSize: 12 }} />
            </div>
          </div>
        </div>

        {/* WAREHOUSE SECTION */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <Tag
              color="gold"
              style={{ borderRadius: 20, fontWeight: 600, fontSize: 12 }}
            >
              {t("introduce.text2")}
            </Tag>
          </div>
          <Title level={2} style={styles.sectionTitle}>
            {t("introduce.text")}
          </Title>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            {t("introduce.text2decs")}
          </Text>

          <Row gutter={[20, 20]} style={{ marginTop: 28 }}>
            {warehouseServices.map((ws) => (
              <Col xs={24} sm={12} lg={12} key={ws.key}>
                <div style={styles.warehouseFeatureCard}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        background: COLORS.accentLight,
                        borderRadius: 10,
                        width: 46,
                        height: 46,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {ws.icon}
                    </div>

                    <Text
                      style={{
                        fontWeight: 700,
                        fontSize: 15,
                        color: COLORS.primary,
                      }}
                    >
                      {t(`warehouse.services.${ws.key}.title`)}
                    </Text>
                  </div>

                  <Text
                    style={{
                      color: COLORS.textMuted,
                      fontSize: 13,
                      display: "block",
                      marginBottom: 14,
                    }}
                  >
                    {t(`warehouse.services.${ws.key}.desc`)}
                  </Text>

                  {t(`warehouse.services.${ws.key}.items`, { returnObjects: true }).map(
                    (item, index) => (
                      <div
                        key={index}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                          padding: "5px 0",
                        }}
                      >
                        <CheckCircleFilled
                          style={{ color: COLORS.accent, fontSize: 13 }}
                        />
                        <Text style={{ fontSize: 13, color: COLORS.primary }}>
                          {item}
                        </Text>
                      </div>
                    )
                  )}
                </div>
              </Col>
            ))}
          </Row>

          {/* Bottom Banner */}
          <div
            style={{
              marginTop: 28,
              background: `linear-gradient(135deg, ${COLORS.primary} 0%, #1a3a5c 100%)`,
              borderRadius: 14,
              padding: "28px 36px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <div>
              <Title level={4} style={{ color: "#fff", margin: "0 0 8px" }}>
                {t("warehouse.standards")}
              </Title>
              <Space size={24} wrap>
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <CheckCircleFilled style={{ color: "#60A5FA", fontSize: 14 }} />
                    <Text style={{ color: "#CBD5E1", fontSize: 13 }}>
                      {item}
                    </Text>
                  </div>
                ))}
              </Space>
            </div>
            <div
              onClick={handleContact}
              style={{
                background: "rgba(22,119,255,0.2)",
                border: "1px solid rgba(22,119,255,0.4)",
                borderRadius: 8,
                padding: "10px 22px",
                cursor: "pointer",
              }}
            >
              <Text style={{ color: "#60A5FA", fontWeight: 600, fontSize: 14 }}>
                {t("contact.title")} <RightOutlined />
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

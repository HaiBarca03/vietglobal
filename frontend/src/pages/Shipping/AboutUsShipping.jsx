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
} from "@ant-design/icons";
import "./Logistics.css";
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
};

// --- DATA ---

const logisticsRoutes = [
  {
    key: "chau-a",
    label: "Châu Á",
    icon: <GlobalOutlined />,
    description:
      "Khai thác các tuyến vận chuyển đến các quốc gia trọng điểm tại Châu Á với lịch tàu ổn định.",
    countries: [
      "Trung Quốc",
      "Hàn Quốc",
      "Nhật Bản",
      "Singapore",
      "Thái Lan",
      "Malaysia",
      "ASEAN",
    ],
    services: [
      "Vận chuyển đường biển FCL/LCL",
      "Vận chuyển hàng không (Air Freight)",
      "Gom hàng (Consolidation)",
      "Dịch vụ Door to Door",
      "Hỗ trợ thủ tục hải quan",
    ],
  },
  {
    key: "noi-a",
    label: "Nội Á",
    icon: <EnvironmentOutlined />,
    description:
      "Dịch vụ vận chuyển trong khu vực Nội Á với tần suất chuyến cao và thời gian transit ngắn.",
    countries: [
      "Vietnam – Trung Quốc",
      "Vietnam – Thái Lan",
      "Vietnam – Indonesia",
      "Vietnam – Philippines",
      "Vietnam – Malaysia",
    ],
    services: [
      "Tần suất chuyến cao",
      "Thời gian transit ngắn",
      "Giá cước cạnh tranh",
      "Theo dõi hàng hóa realtime",
      "Hỗ trợ chứng từ đầy đủ",
    ],
  },
  {
    key: "trung-dong",
    label: "Trung Đông",
    icon: <CarOutlined />,
    description:
      "Vận chuyển đến các thị trường Trung Đông đang tăng trưởng mạnh với lịch tàu ổn định.",
    countries: [
      "UAE (Dubai, Jebel Ali)",
      "Saudi Arabia",
      "Qatar",
      "Kuwait",
      "Oman",
      "Bahrain",
    ],
    services: [
      "Lịch tàu ổn định",
      "Giá cước cạnh tranh",
      "Hỗ trợ chứng từ nhập khẩu",
      "Đối tác hãng tàu uy tín",
      "Tư vấn thị trường",
    ],
  },
  {
    key: "duong-bien",
    label: "Đường biển",
    icon: <ShoppingOutlined />,
    description:
      "Tối ưu chi phí cho các lô hàng lớn với mạng lưới đối tác hãng tàu toàn cầu.",
    countries: [
      "FCL (Full Container Load)",
      "LCL (Less than Container Load)",
      "Hàng dự án",
      "Hàng quá khổ quá tải",
      "Door to Door",
    ],
    services: [
      "Mạng lưới hãng tàu toàn cầu",
      "Lịch trình ổn định, đúng giờ",
      "Giá cước tốt nhất thị trường",
      "Hỗ trợ hải quan 24/7",
      "Tracking hàng hóa trực tuyến",
    ],
    isRoute: false,
  },
];

const warehouseServices = [
  {
    icon: <HomeOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    title: "Lưu trữ hàng hóa",
    desc: "Hệ thống kho đạt tiêu chuẩn hải quan, lưu trữ an toàn nhiều loại hàng hóa khác nhau.",
    items: [
      "Hàng nhập khẩu chờ làm thủ tục",
      "Hàng trung chuyển & tái xuất",
      "Hàng chờ phân phối nội địa",
      "Hàng xuất khẩu chờ vận chuyển",
    ],
  },
  {
    icon: <SafetyOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    title: "Quản lý & kiểm soát",
    desc: "Hệ thống quản lý kho hiện đại giúp theo dõi tình trạng hàng hóa mọi lúc, mọi nơi.",
    items: [
      "Quản lý tồn kho tự động",
      "Kiểm đếm & phân loại hàng",
      "Dán nhãn, đóng gói lại",
      "Báo cáo tồn kho định kỳ",
    ],
  },
  {
    icon: (
      <ClockCircleOutlined style={{ fontSize: 24, color: COLORS.accent }} />
    ),
    title: "Thủ tục hải quan",
    desc: "Đội ngũ chuyên viên hỗ trợ đầy đủ các thủ tục hải quan theo đúng quy định.",
    items: [
      "Khai báo hải quan",
      "Chuyển đổi mục đích hàng hóa",
      "Thủ tục nhập khẩu từ kho",
      "Thủ tục tái xuất hàng hóa",
    ],
  },
  {
    icon: <TeamOutlined style={{ fontSize: 24, color: COLORS.accent }} />,
    title: "Dịch vụ giá trị gia tăng",
    desc: "Các dịch vụ hỗ trợ thêm giúp tối ưu toàn bộ chuỗi cung ứng của doanh nghiệp.",
    items: [
      "Phân loại & đóng gói lại (Repacking)",
      "Dán nhãn (Labeling)",
      "Gom hàng và chia hàng",
      "Vận chuyển nội địa & quốc tế",
    ],
  },
];

const stats = [
  { value: "Toàn cầu", label: "Quốc gia kết nối" },
  { value: "Quy mô lớn", label: "Lô hàng mỗi tháng" },
  { value: "Độ tin cậy", label: "Tỷ lệ đúng hạn" },
  { value: "24/7", label: "Hỗ trợ khách hàng" },
];

// --- COMPONENTS ---

function RouteTabContent({ route }) {
  return (
    <Row gutter={[32, 24]} style={{ marginTop: 24 }}>
      <Col xs={24} md={12}>
        <div style={{ marginBottom: 20 }}>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            {route.description}
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
            {route.isRoute === false ? "Loại hàng" : "Tuyến / Thị trường"}
          </Text>
        </div>
        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}
        >
          {route.countries.map((c) => (
            <span key={c} style={styles.routeTag}>
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
            Dịch vụ bao gồm
          </Text>
          <div style={{ marginTop: 12 }}>
            {route.services.map((s) => (
              <div key={s} style={styles.featureItem}>
                <CheckCircleFilled style={styles.checkIcon} />
                <Text style={{ color: COLORS.primary, fontSize: 14 }}>{s}</Text>
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
              Giải pháp logistics toàn diện
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
            Dịch Vụ
            <span style={{ color: "#60A5FA" }}> Logistics</span>
            <br />& Kho Ngoại Quan
          </Title>
          <Paragraph
            style={{
              color: "#94A3B8",
              fontSize: 17,
              maxWidth: 560,
              margin: "0 0 40px",
            }}
          >
            Mạng lưới vận chuyển rộng khắp, đáp ứng nhu cầu xuất nhập khẩu với
            chi phí tối ưu và thời gian nhanh chóng.
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
                    {s.value}
                  </div>
                  <div style={{ fontSize: 13, color: "#94A3B8", marginTop: 2 }}>
                    {s.label}
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
              DỊCH VỤ VẬN CHUYỂN
            </Tag>
          </div>
          <Title level={2} style={styles.sectionTitle}>
            Tuyến vận chuyển & Dịch vụ
          </Title>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            Chọn tuyến vận chuyển phù hợp với nhu cầu của doanh nghiệp bạn
          </Text>

          {/* Tab Selector */}
          <Row gutter={[12, 12]} style={{ marginTop: 28 }}>
            {logisticsRoutes.map((route) => (
              <Col xs={12} sm={6} key={route.key}>
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
                    {route.label}
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
                Tuyến {currentRoute.label}
              </Title>
            </div>
            <Divider style={{ margin: "16px 0" }} />
            <RouteTabContent route={currentRoute} />
          </div>
        </div>

        {/* WAREHOUSE SECTION */}
        <div>
          <div style={{ marginBottom: 8 }}>
            <Tag
              color="gold"
              style={{ borderRadius: 20, fontWeight: 600, fontSize: 12 }}
            >
              DỊCH VỤ KHO
            </Tag>
          </div>
          <Title level={2} style={styles.sectionTitle}>
            Kho Ngoại Quan
          </Title>
          <Text style={{ color: COLORS.textMuted, fontSize: 15 }}>
            Lưu trữ hàng hóa xuất nhập khẩu linh hoạt, chưa cần thực hiện ngay
            nghĩa vụ thuế — tối ưu chi phí, chủ động phân phối.
          </Text>

          <Row gutter={[20, 20]} style={{ marginTop: 28 }}>
            {warehouseServices.map((ws) => (
              <Col xs={24} sm={12} lg={12} key={ws.title}>
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
                      {ws.title}
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
                    {ws.desc}
                  </Text>
                  {ws.items.map((item) => (
                    <div
                      key={item}
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
                  ))}
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
                Tiêu chuẩn dịch vụ kho ngoại quan
              </Title>
              <Space size={24} wrap>
                {[
                  "Kho đạt tiêu chuẩn hải quan",
                  "An ninh & giám sát 24/7",
                  "Đội ngũ giàu kinh nghiệm",
                ].map((t) => (
                  <div
                    key={t}
                    style={{ display: "flex", alignItems: "center", gap: 6 }}
                  >
                    <CheckCircleFilled
                      style={{ color: "#60A5FA", fontSize: 14 }}
                    />
                    <Text style={{ color: "#CBD5E1", fontSize: 13 }}>{t}</Text>
                  </div>
                ))}
              </Space>
            </div>
            <div
              style={{
                background: "rgba(22,119,255,0.2)",
                border: "1px solid rgba(22,119,255,0.4)",
                borderRadius: 8,
                padding: "10px 22px",
                cursor: "pointer",
              }}
            >
              <Text style={{ color: "#60A5FA", fontWeight: 600, fontSize: 14 }}>
                Liên hệ tư vấn <RightOutlined />
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

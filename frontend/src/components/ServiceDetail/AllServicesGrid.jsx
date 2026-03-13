import { Row, Col, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import i18next, { t } from "i18next";

const { Title, Paragraph } = Typography;

const TEAL = "#00B5B8";
const DARK = "#1a1a2e";
const lang = i18next.language || "en";
const ALL_SERVICES = [
  {
    title: "services.seaFreight.title",
    desc: "services.seaFreight.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-1920x600.jpg",
    link: `/${lang}/service/sea-freight`,
  },
  {
    title: "services.truckingDelivery.title",
    desc: "services.truckingDelivery.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/Trucking-Delivery-1920x600.jpeg",
    link: `/${lang}/service/trucking-delivery`,
  },
  {
    title: "services.airFreight.title",
    desc: "services.airFreight.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-Air-Freight-Benefits-1920x600.jpg",
    link: `/${lang}/service/air-freight`,
  },
  {
    title: "services.customsClearance.title",
    desc: "services.customsClearance.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-customs-clearance-service-1-1920x600.jpg",
    link: `/${lang}/service/customs-clearance`,
  },
];

export default function AllServicesGrid() {
  const lang = i18next.language || "en";
  return (
    <div style={{ padding: "0 0 40px" }}>
      {/* Tiêu đề ALL SERVICES */}
      <div
        style={{
          background: TEAL,
          color: "#fff",
          padding: "16px 24px",
          display: "inline-block",
          marginBottom: 32,
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: 24,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {t("servicePage.sidebar.all")}
      </div>

      <Row gutter={[24, 32]}>
        {ALL_SERVICES.map((service, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <div
              style={{
                position: "relative",
                height: 380,
                overflow: "hidden",
                borderRadius: 8,
                boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                cursor: "pointer",
                background: "#000",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px)";
                e.currentTarget.style.boxShadow =
                  "0 16px 40px rgba(0,181,184,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.12)";
              }}
              onClick={() => (window.location.href = service.link)}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.85,
                  transition: "transform 0.6s ease, opacity 0.6s ease",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75) 30%, transparent 70%)",
                }}
              />

              {/* Nội dung text */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "32px 24px 24px",
                  color: "#fff",
                }}
              >
                <Title
                  level={4}
                  style={{
                    color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    margin: "0 0 12px 0",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}
                >
                  {t(service.title)}
                </Title>

                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 14,
                    lineHeight: 1.6,
                    margin: "0 0 20px 0",
                    maxHeight: 90,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 5,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t(service.desc)}
                </Paragraph>

                <Button
                  type="link"
                  style={{
                    color: TEAL,
                    fontWeight: 700,
                    padding: 0,
                    height: "auto",
                    fontSize: 14,
                  }}
                  icon={<ArrowRightOutlined />}
                >
                  {t("readmore")}
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

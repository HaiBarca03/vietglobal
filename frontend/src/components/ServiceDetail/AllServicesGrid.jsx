import { Row, Col, Typography, Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import i18next, { t } from "i18next";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

const PRIMARY = "#1464C4";
const PRIMARY_HOVER = "#0F52A3";
const NAVY = "#0A2540";

export default function AllServicesGrid() {
  const navigate = useNavigate();
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

  return (
    <div style={{ padding: "0 0 40px" }}>
      {/* Tiêu đề ALL SERVICES */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, ${PRIMARY} 100%)`,
          color: "#fff",
          padding: "12px 24px",
          display: "inline-block",
          marginBottom: 32,
          borderRadius: 8,
          boxShadow: "0 4px 16px rgba(20, 100, 196, 0.2)",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: 22,
          textTransform: "uppercase",
          letterSpacing: 1,
        }}
      >
        {t("servicePage.sidebar.all")}
      </motion.div>

      <Row gutter={[24, 32]}>
        {ALL_SERVICES.map((service, index) => (
          <Col xs={24} sm={12} md={12} lg={6} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              style={{
                position: "relative",
                height: 380,
                overflow: "hidden",
                borderRadius: 12,
                boxShadow: "0 6px 20px rgba(10,37,64,0.08)",
                cursor: "pointer",
                background: "#0A2540",
                border: "1.5px solid #E2E8F0",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = PRIMARY;
                e.currentTarget.style.boxShadow =
                  "0 18px 40px rgba(20, 100, 196, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#E2E8F0";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(10,37,64,0.08)";
              }}
              onClick={() => navigate(service.link)}
            >
              <img
                src={service.image}
                alt={t(service.title)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  opacity: 0.8,
                  transition: "transform 0.6s ease, opacity 0.6s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.08)";
                  e.currentTarget.style.opacity = "0.95";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.opacity = "0.8";
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(10,37,64,0.9) 20%, rgba(10,37,64,0.4) 60%, transparent 100%)",
                }}
              />

              {/* Nội dung text */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "28px 20px 20px",
                  color: "#fff",
                }}
              >
                <Title
                  level={4}
                  style={{
                    color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 800,
                    fontSize: 21,
                    margin: "0 0 10px 0",
                    textTransform: "uppercase",
                    letterSpacing: 0.8,
                  }}
                >
                  {t(service.title)}
                </Title>

                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    margin: "0 0 16px 0",
                    maxHeight: 80,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {t(service.desc)}
                </Paragraph>

                <Button
                  type="link"
                  style={{
                    color: "#93C5FD",
                    fontWeight: 700,
                    padding: 0,
                    height: "auto",
                    fontSize: 13.5,
                  }}
                  icon={<ArrowRightOutlined />}
                >
                  {t("readmore")}
                </Button>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { motion } from "framer-motion";
import {
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  CustomerServiceOutlined,
  CompassOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { Title, Paragraph, Text } = Typography;

const PRIMARY = "#1464C4";
const NAVY = "#0A2540";
const SKY = "#E6F4FF";

export default function ServiceContent({
  description,
  image,
  imageAlt = "service",
}) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "vi";
  const navigate = useNavigate();

  const features = [
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: 20, color: PRIMARY }} />,
      title: lang === "vi" ? "An toàn tuyệt đối" : "Maximum Safety",
      desc: lang === "vi" ? "Bảo hiểm hàng hóa toàn diện 100%" : "100% comprehensive cargo insurance",
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: 20, color: PRIMARY }} />,
      title: lang === "vi" ? "Tối ưu tiến độ" : "On-time Delivery",
      desc: lang === "vi" ? "Lộ trình chính xác, cam kết thời gian" : "Accurate schedule, strict SLA compliance",
    },
    {
      icon: <CompassOutlined style={{ fontSize: 20, color: PRIMARY }} />,
      title: lang === "vi" ? "Định vị 24/7" : "24/7 Live Tracking",
      desc: lang === "vi" ? "Cập nhật trạng thái từng chặng vận chuyển" : "Real-time updates along each transit leg",
    },
    {
      icon: <CustomerServiceOutlined style={{ fontSize: 20, color: PRIMARY }} />,
      title: lang === "vi" ? "Chuyên viên tận tâm" : "Dedicated Support",
      desc: lang === "vi" ? "Đội ngũ chuyên gia logistics hỗ trợ liên tục" : "Logistics experts ready anytime",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
      {/* Top Section: Text & Hero Image */}
      <Row gutter={[40, 32]} align="middle">
        {/* Text */}
        <Col xs={24} lg={12}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: SKY,
                color: PRIMARY,
                fontWeight: 700,
                fontSize: 12,
                padding: "6px 14px",
                borderRadius: 20,
                letterSpacing: 0.8,
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              <CheckCircleFilled style={{ color: PRIMARY }} />
              {lang === "vi" ? "Giải Pháp Doanh Nghiệp" : "Enterprise Solution"}
            </div>

            <div
              style={{
                color: "#334155",
                fontSize: 15.5,
                lineHeight: 1.85,
                fontFamily: "'Barlow', sans-serif",
              }}
            >
              {description}
            </div>
          </motion.div>
        </Col>

        {/* Image Card */}
        <Col xs={24} lg={12}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: 16,
              boxShadow: "0 16px 36px rgba(10, 37, 64, 0.1)",
              border: "1px solid #E2E8F0",
            }}
          >
            <img
              src={image}
              alt={imageAlt}
              style={{
                width: "100%",
                height: 320,
                objectFit: "cover",
                display: "block",
                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />

            {/* Bottom floating badge */}
            <div
              style={{
                position: "absolute",
                bottom: 14,
                left: 14,
                right: 14,
                background: "rgba(10, 37, 64, 0.85)",
                backdropFilter: "blur(8px)",
                padding: "10px 16px",
                borderRadius: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#FFFFFF",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: 0.5 }}>
                VIETGLOBAL LOGISTICS
              </span>
              <span style={{ fontSize: 12, color: "#38BDF8", fontWeight: 600 }}>
                {lang === "vi" ? "Tiêu chuẩn quốc tế" : "Global Standard"}
              </span>
            </div>
          </motion.div>
        </Col>
      </Row>

      {/* Feature Highlights Grid */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Row gutter={[20, 20]}>
          {features.map((f, i) => (
            <Col xs={24} sm={12} key={i}>
              <div
                style={{
                  background: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: 12,
                  padding: "18px 20px",
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 14,
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#FFFFFF";
                  e.currentTarget.style.borderColor = PRIMARY;
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(20, 100, 196, 0.08)";
                  e.currentTarget.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#F8FAFC";
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 10,
                    background: SKY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 14.5,
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: 4,
                    }}
                  >
                    {f.title}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#64748B",
                      lineHeight: 1.5,
                    }}
                  >
                    {f.desc}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </motion.div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          background: `linear-gradient(135deg, ${NAVY} 0%, #0F3A66 60%, ${PRIMARY} 100%)`,
          borderRadius: 16,
          padding: "32px 36px",
          color: "#FFFFFF",
          boxShadow: "0 12px 30px rgba(10, 37, 64, 0.16)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        <div style={{ maxWidth: 520 }}>
          <div
            style={{
              fontSize: 20,
              fontWeight: 800,
              fontFamily: "'Barlow Condensed', sans-serif",
              letterSpacing: 0.8,
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            {lang === "vi"
              ? "Cần tư vấn & nhận báo giá tốt nhất?"
              : "Need Consultation & The Best Quote?"}
          </div>
          <div style={{ fontSize: 14, color: "#93C5FD", lineHeight: 1.6 }}>
            {lang === "vi"
              ? "Chuyên gia logistics của VietGlobal sẵn sàng tính toán lộ trình và tối ưu chi phí vận tải cho doanh nghiệp của bạn."
              : "VietGlobal logistics experts are ready to calculate optimal routes and reduce transport costs for your business."}
          </div>
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Button
            type="primary"
            size="large"
            icon={<ArrowRightOutlined />}
            onClick={() => navigate(`/${lang}/shipping-contact-us`)}
            style={{
              background: PRIMARY,
              borderColor: PRIMARY,
              fontWeight: 700,
              fontSize: 14,
              height: 46,
              padding: "0 24px",
              borderRadius: 8,
              boxShadow: "0 4px 14px rgba(20, 100, 196, 0.4)",
            }}
          >
            {lang === "vi" ? "Yêu Cầu Báo Giá" : "Get Free Quote"}
          </Button>

          <Button
            size="large"
            icon={<PhoneOutlined />}
            href="tel:0346779622"
            style={{
              background: "rgba(255, 255, 255, 0.12)",
              borderColor: "rgba(255, 255, 255, 0.25)",
              color: "#FFFFFF",
              fontWeight: 600,
              fontSize: 14,
              height: 46,
              padding: "0 20px",
              borderRadius: 8,
            }}
          >
            0346 779 622
          </Button>
        </div>
      </motion.div>
    </div>
  );
}


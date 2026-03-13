import { Row, Col, Typography } from "antd";

const { Paragraph } = Typography;

/**
 * ServiceContent — nội dung chính: text bên trái, ảnh bên phải
 * Props:
 *   description: string
 *   image:       string  — URL ảnh
 *   imageAlt:    string
 */
export default function ServiceContent({
  description,
  image,
  imageAlt = "service",
}) {
  return (
    <Row gutter={48} align="top">
      {/* Text */}
      <Col xs={24} md={12}>
        <Paragraph
          style={{
            color: "#666",
            fontSize: 14.5,
            lineHeight: 1.85,
            fontFamily: "'Barlow', sans-serif",
            marginBottom: 0,
          }}
        >
          {description}
        </Paragraph>
      </Col>

      {/* Image */}
      <Col xs={24} md={12}>
        <div
          style={{
            overflow: "hidden",
            borderRadius: 2,
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={image}
            alt={imageAlt}
            style={{
              width: "100%",
              height: 260,
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.04)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          />
        </div>
      </Col>
    </Row>
  );
}

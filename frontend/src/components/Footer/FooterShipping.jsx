import React from "react";
import { Typography } from "antd";

const { Title, Paragraph } = Typography;

const TEAL = "#00B5B8";

const FooterShipping = () => {
  return (
  <div
    style={{
      background: "#0a1f3a", // dark blue như ảnh, bạn có thể chỉnh #001f3f hoặc #0d2b4e
      color: "#fff",
      padding: "60px 40px 40px",
      position: "relative",
      overflow: "hidden",
      borderTopLeftRadius: 80, // bo góc trên trái lớn như curve trong ảnh
      borderTopRightRadius: 80,
    }}
  >
    {/* Curve overlay nếu muốn giống hơn (optional) */}
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 100,
        background: "linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)",
        pointerEvents: "none",
      }}
    />

    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Title
        level={3}
        style={{
          color: TEAL, // hoặc "#00d4ff" cho sáng hơn
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: 32,
          textTransform: "uppercase",
          letterSpacing: 2,
          marginBottom: 32,
        }}
      >
        TP SHIPPING COMPANY LIMITED.
      </Title>

      <Paragraph
        style={{
          color: "#d0e8ff",
          fontSize: 16,
          lineHeight: 1.8,
          marginBottom: 16,
        }}
      >
        Add: Office 5.48, Floor 5, Rivergate Building, 151-155 Ben Van Don Str, Ward 6, District 4, HCM City, Vietnam
      </Paragraph>

      <Paragraph
        style={{
          color: "#d0e8ff",
          fontSize: 16,
          lineHeight: 1.8,
          marginBottom: 8,
        }}
      >
        Tel: +84 (0) 28 7302205 | H/P: (+84) 907 844 843
      </Paragraph>

      <Paragraph
        style={{
          color: "#d0e8ff",
          fontSize: 16,
          lineHeight: 1.8,
          marginBottom: 8,
        }}
      >
        Mrs Christina Quynh (Zalo/WhatsApp/Viber)
      </Paragraph>

      <Paragraph
        style={{
          color: "#d0e8ff",
          fontSize: 16,
          lineHeight: 1.8,
          marginBottom: 8,
        }}
      >
        Skype: thanhquynh9 | Email: christina.quynh@tpshipping.com.vn
      </Paragraph>

      <Paragraph
        style={{
          color: "#d0e8ff",
          fontSize: 16,
          lineHeight: 1.8,
          marginBottom: 48,
        }}
      >
        Website: <a href="https://www.tpshipping.com.vn" style={{ color: TEAL, textDecoration: "none" }}>www.tpshipping.com.vn</a>
      </Paragraph>

      {/* Bottom bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: 24,
          fontSize: 14,
          color: "#a0c0ff",
          display: "flex",
          justifyContent: "center",
          gap: 40,
          flexWrap: "wrap",
        }}
      >
        <div>Designed By Maytech</div>
        <div>Copyright © 2025 TP SHIPPING. All rights reserved.</div> {/* cập nhật năm nếu cần */}
      </div>
    </div>
  </div>
  )
}

export default FooterShipping

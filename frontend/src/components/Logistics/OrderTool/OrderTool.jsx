import React from "react";
import { Button, Row, Col, Typography, Tag } from "antd";
import {
  ChromeFilled,
  ThunderboltFilled,
  CheckCircleFilled,
  TranslationOutlined,
  SafetyCertificateFilled,
  DownloadOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./OrderTool.css";

const { Title, Text, Paragraph } = Typography;

const OrderTool = () => {
  const { t } = useTranslation();

  return (
    <section className="tool-section-wrapper">
      <div className="tool-container">
        <Row gutter={[48, 48]} align="middle">
          {/* Left Column: Modern Tech Extension Mockup */}
          <Col xs={24} lg={12} className="tool-preview-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="extension-mockup-card"
            >
              {/* Browser Window Header */}
              <div className="browser-window-header">
                <div className="browser-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <div className="browser-address-bar">
                  <span className="secure-badge">🔒 1688.com/offer/782941.html</span>
                </div>
                <div className="extension-badge-active">
                  <span className="ext-icon">VG</span>
                  <span className="ext-dot" />
                </div>
              </div>

              {/* Product Page Preview with Overlay Extension Card */}
              <div className="mockup-content-body">
                <div className="mock-product-row">
                  <div className="mock-product-thumb">
                    <span className="mock-badge">1688 Xưởng</span>
                  </div>
                  <div className="mock-product-info">
                    <div className="mock-title">Smart Tech Cargo Jacket • Vải chống nước 2 lớp</div>
                    <div className="mock-pricing">
                      <span className="yuan-price">¥ 128.00</span>
                      <span className="arrow-convert">➔</span>
                      <span className="vnd-price">473.600 đ</span>
                    </div>
                  </div>
                </div>

                {/* Floating Extension Action Box */}
                <div className="extension-action-box">
                  <div className="ext-box-header">
                    <div className="ext-brand">
                      <ThunderboltFilled style={{ color: "#1464C4" }} />
                      <span>VietGlobal Order Assistant</span>
                    </div>
                    <Tag color="blue" style={{ borderRadius: 6, margin: 0, fontSize: 11 }}>
                      Tỷ giá: 1¥ = 3,700đ
                    </Tag>
                  </div>

                  <div className="ext-specs-row">
                    <div className="spec-pill">Tự động dịch CN ➔ VN</div>
                    <div className="spec-pill">Cân nặng dự kiến: 0.45 kg</div>
                    <div className="spec-pill">Phí ship nội địa: ¥ 0.00</div>
                  </div>

                  <div className="ext-action-btn">
                    <ShoppingCartOutlined />
                    <span>Thêm vào Giỏ hàng VietGlobal (1-Click)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </Col>

          {/* Right Column: Value Proposition & Download */}
          <Col xs={24} lg={12} className="tool-content-col">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="tool-eyebrow">
                <ThunderboltFilled style={{ color: "#1464C4" }} />
                <span>{t("viChi.orderTool")}</span>
              </div>

              <h2 className="tool-main-title">
                {t("viChi.orderBrowser")}
              </h2>

              <p className="tool-desc">
                {t("viChi.orderToolDesc")}
              </p>

              {/* Bullet Features */}
              <div className="tool-feature-list">
                <div className="tool-feature-item">
                  <CheckCircleFilled className="tool-check" />
                  <span>{t("viChi.featureFast")}</span>
                </div>
                <div className="tool-feature-item">
                  <SafetyCertificateFilled className="tool-check" />
                  <span>{t("viChi.featureSecure")}</span>
                </div>
                <div className="tool-feature-item">
                  <TranslationOutlined className="tool-check" />
                  <span>{t("viChi.featureSupport")}</span>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="tool-button-group">
                <Button
                  type="primary"
                  size="large"
                  icon={<ChromeFilled />}
                  className="btn-install-chrome"
                  onClick={() => window.open("https://chromewebstore.google.com", "_blank")}
                >
                  {t("viChi.installExtension")}
                </Button>
                <div className="tool-support-chips">
                  <span>Hỗ trợ: Chrome, Cốc Cốc, Edge, Brave</span>
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default OrderTool;

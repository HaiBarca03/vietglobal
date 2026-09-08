import { useState, useEffect, useRef } from "react";
import { Button, Card, Carousel, Typography, Row, Col, Space } from "antd";
import { motion } from "framer-motion";
import {
  ArrowRightOutlined,
  LeftOutlined,
  RightOutlined,
  GlobalOutlined,
  CarOutlined,
  SendOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import i18next, { t } from "i18next";

const { Title, Paragraph, Text } = Typography;

const PRIMARY = "#1464C4";
const PRIMARY_HOVER = "#0F52A3";
const NAVY = "#0A2540";
const SKY = "#E6F4FF";

const services = [
  {
    icon: <GlobalOutlined style={{ fontSize: 26, color: PRIMARY }} />,
    title: "services.seaFreight.title",
    link: "sea-freight",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-1920x600.jpg",
    desc: "services.seaFreight.desc",
  },
  {
    icon: <CarOutlined style={{ fontSize: 26, color: PRIMARY }} />,
    title: "services.truckingDelivery.title",
    link: "trucking-delivery",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/Trucking-Delivery-1920x600.jpeg",
    desc: "services.truckingDelivery.desc",
  },
  {
    icon: <SendOutlined style={{ fontSize: 26, color: PRIMARY }} />,
    title: "services.airFreight.title",
    link: "air-freight",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-Air-Freight-Benefits-1920x600.jpg",
    desc: "services.airFreight.desc",
  },
  {
    icon: <AuditOutlined style={{ fontSize: 26, color: PRIMARY }} />,
    title: "services.customsClearance.title",
    link: "customs-clearance",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-customs-clearance-service-1-1920x600.jpg",
    desc: "services.customsClearance.desc",
  },
];

const partners = [
  {
    name: "KMTC",
    color: "#003082",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-KMTC_nfhqpv.png",
  },
  {
    name: "SEALAND",
    color: "#002b5c",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850081/logo-sealand_ydjl0u.png",
  },
  {
    name: "SITC",
    color: "#0066cc",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850081/logo-sealand_ydjl0u.png",
  },
  {
    name: "WAN HAI LINES",
    color: "#1a1a1a",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850100/Wan_Hai_logo_tglxvu.png",
  },
  {
    name: "HAMBURG SÜD",
    color: "#cc0000",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_hamburg-sud_ngs7b4.png",
  },
  {
    name: "HEUNG-A",
    color: "#006633",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_heung-a_ruw1ff.png",
  },
  {
    name: "EVERGREEN",
    color: "#007A4E",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/Evergreen_Logo_leeecu.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850100/oocl-logo_tmaylg.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850088/maersk-line-vector-logo_gsagni.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850082/logo-SKR_qpdsv6.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850080/logo-rcl_nim1cn.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-pil_ke6ofj.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-cnc_snfad9.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_ZIM_ojvcv3.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_Hapag-Lloyd_iakcdw.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo_TS_gokjfv.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_MSC_txg3gu.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850075/logo-cosco_s0vgqq.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/CMA-CGM_Shipping_drdn67.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_hmm_eo5e1e.png",
  },
  {
    name: "COSCO",
    color: "#003087",
    url: "https://res.cloudinary.com/demwoy6ku/image/upload/v1772850074/logo_apl_c8ilur.png",
  },
];

export default function ShippingHome() {
  const [partnerIndex, setPartnerIndex] = useState(0);
  const visibleCount = 6;
  const maxIndex = partners.length - visibleCount;
  const carouselRef = useRef();
  const navigate = useNavigate();
  const lang = i18next.language || "en";
  const handleClick = (slug) => {
    console.log("Navigating to service with slug:", slug);
    const path = `/${lang}/service/${slug}`;
    console.log("Navigating to:", path);
    navigate(path);
  };

  const handleClickContactUs = () => {
    const path = `/${lang}/shipping-contact-us`;
    console.log("Navigating to:", path);
    navigate(path);
  };

  const prevPartner = () => setPartnerIndex((i) => Math.max(0, i - 1));
  const nextPartner = () => setPartnerIndex((i) => Math.min(maxIndex, i + 1));

  useEffect(() => {
    const interval = setInterval(() => {
      setPartnerIndex((prev) => {
        if (prev >= maxIndex) {
          return 0; // quay lại đầu
        }
        return prev + 1;
      });
    }, 2500); // 3 giây chạy 1 lần

    return () => clearInterval(interval);
  }, [maxIndex]);

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  return (
    <div
      style={{
        fontFamily: "'Barlow', sans-serif",
        background: "#f7f7f7",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 520,
          overflow: "hidden",
        }}
      >
        <Carousel autoplay ref={carouselRef} effect="fade">
          {services.map((svc, idx) => (
            <div key={idx}>
              <div
                style={{
                  height: 550,
                  background: `linear-gradient(to right, rgba(10,37,64,0.85) 0%, rgba(10,37,64,0.4) 60%, rgba(10,37,64,0.2) 100%), url(${svc.img}) center/cover no-repeat`,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 80,
                  paddingRight: 40,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ maxWidth: 620, color: "#fff" }}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      background: "rgba(20, 100, 196, 0.25)",
                      border: "1px solid rgba(255, 255, 255, 0.25)",
                      borderRadius: 20,
                      padding: "4px 14px",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.05em",
                      color: "#93C5FD",
                      marginBottom: 16,
                    }}
                  >
                    <span>VIETGLOBAL LOGISTICS SOLUTION</span>
                  </div>

                  <Title
                    level={1}
                    style={{
                      color: "#fff",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: 54,
                      margin: 0,
                      lineHeight: 1.1,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                      textShadow: "0 4px 16px rgba(0,0,0,0.5)",
                    }}
                  >
                    {t(svc.title)}
                  </Title>

                  <Paragraph
                    style={{
                      color: "rgba(255,255,255,0.9)",
                      fontSize: 16,
                      margin: "18px 0 28px 0",
                      lineHeight: 1.7,
                      maxWidth: 540,
                    }}
                  >
                    {t(svc.desc)}
                  </Paragraph>

                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      onClick={() => handleClickContactUs()}
                      type="primary"
                      size="large"
                      style={{
                        background: PRIMARY,
                        borderColor: PRIMARY,
                        borderRadius: 8,
                        height: 50,
                        fontSize: 15,
                        fontWeight: 700,
                        padding: "0 36px",
                        boxShadow: "0 8px 24px rgba(20, 100, 196, 0.4)",
                      }}
                      icon={<ArrowRightOutlined />}
                    >
                      {t("contact.title")}
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          ))}
        </Carousel>

        {/* Arrow buttons */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: 60,
            display: "flex",
            gap: 12,
            zIndex: 10,
          }}
        >
          <button
            onClick={() => carouselRef.current.prev()}
            style={{
              background: "rgba(10, 37, 64, 0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              width: 44,
              height: 44,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 20,
              backdropFilter: "blur(6px)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = PRIMARY;
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(10, 37, 64, 0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ‹
          </button>
          <button
            onClick={() => carouselRef.current.next()}
            style={{
              background: "rgba(10, 37, 64, 0.5)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#fff",
              width: 44,
              height: 44,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 20,
              backdropFilter: "blur(6px)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = PRIMARY;
              e.currentTarget.style.transform = "scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(10, 37, 64, 0.5)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            ›
          </button>
        </div>
      </div>

      {/* 4 Overlapping Service Cards */}
      <div
        style={{
          padding: "40px 60px 60px",
          marginTop: -120,
          position: "relative",
          zIndex: 10,
        }}
      >
        <Row gutter={[24, 24]}>
          {services.map((svc, idx) => (
            <Col xs={24} sm={12} md={6} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                onClick={() => handleClick(svc.link)}
                style={{
                  cursor: "pointer",
                  height: "100%",
                  background: "#fff",
                  borderRadius: 14,
                  overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 6px 20px rgba(10, 37, 64, 0.06)",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = PRIMARY;
                  e.currentTarget.style.boxShadow = "0 16px 36px rgba(20, 100, 196, 0.14)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#E2E8F0";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(10, 37, 64, 0.06)";
                }}
              >
                <div
                  style={{
                    height: 180,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <img
                    src={svc.img}
                    alt={svc.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(10,37,64,0.4) 0%, transparent 60%)",
                    }}
                  />
                </div>
                <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 10,
                        background: SKY,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid #BFDBFE",
                      }}
                    >
                      {svc.icon}
                    </div>
                    <Title
                      level={5}
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: 19,
                        color: NAVY,
                        textTransform: "uppercase",
                        letterSpacing: 0.8,
                        margin: 0,
                      }}
                    >
                      {t(svc.title)}
                    </Title>
                  </div>

                  <Paragraph
                    style={{
                      color: "#64748B",
                      fontSize: 13.5,
                      lineHeight: 1.6,
                      flex: 1,
                      margin: "0 0 16px 0",
                    }}
                  >
                    {t(svc.desc)}
                  </Paragraph>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 13,
                      fontWeight: 700,
                      color: PRIMARY,
                      marginTop: "auto",
                    }}
                  >
                    <span>{t("common.viewDetails", "Xem chi tiết")}</span>
                    <ArrowRightOutlined style={{ fontSize: 11 }} />
                  </div>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>

      {/* Partners Section */}
      <div
        style={{
          background: "#fff",
          padding: "60px 60px 80px",
          borderTop: "1px solid #E2E8F0",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Title
            level={2}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 34,
              color: NAVY,
              textTransform: "uppercase",
              letterSpacing: 2,
              margin: "0 0 8px 0",
              position: "relative",
              display: "inline-block",
            }}
          >
            {t("partners")}
            <div
              style={{
                position: "absolute",
                bottom: -10,
                left: "50%",
                transform: "translateX(-50%)",
                width: 140,
                height: 3.5,
                background: `linear-gradient(90deg, ${PRIMARY}, #38BDF8)`,
                borderRadius: 9999,
              }}
            />
          </Title>
        </div>

        {/* Carousel container */}
        <div
          style={{
            position: "relative",
            maxWidth: 1200,
            margin: "0 auto",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Prev button */}
            <button
              onClick={prevPartner}
              disabled={partnerIndex === 0}
              style={{
                background: "none",
                border: "none",
                fontSize: 36,
                color: partnerIndex === 0 ? "#ddd" : PRIMARY,
                cursor: partnerIndex === 0 ? "default" : "pointer",
                padding: "0 12px",
                lineHeight: 1,
                transition: "transform 0.2s ease",
              }}
            >
              ‹
            </button>

            {/* Partners slider */}
            <div
              style={{
                flex: 1,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 24,
                  transform: `translateX(-${partnerIndex * 20.833}%)`,
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {partners.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "0 0 auto",
                      width: "calc(100% / 6)",
                      minWidth: 160,
                      padding: "0 12px",
                      boxSizing: "border-box",
                    }}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      style={{
                        background: "#fff",
                        border: "1.5px solid #E2E8F0",
                        borderRadius: 10,
                        padding: "20px 0",
                        height: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "border-color 0.25s, box-shadow 0.25s",
                        boxShadow: "0 2px 8px rgba(10,37,64,0.04)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = PRIMARY;
                        e.currentTarget.style.boxShadow =
                          "0 10px 24px rgba(20, 100, 196, 0.12)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#E2E8F0";
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(10,37,64,0.04)";
                      }}
                    >
                      <img
                        src={p.url}
                        alt={p.name}
                        style={{
                          maxWidth: "80%",
                          maxHeight: "80%",
                          objectFit: "contain",
                        }}
                      />
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              onClick={nextPartner}
              disabled={partnerIndex >= maxIndex}
              style={{
                background: "none",
                border: "none",
                fontSize: 36,
                color: partnerIndex >= maxIndex ? "#ddd" : PRIMARY,
                cursor: partnerIndex >= maxIndex ? "default" : "pointer",
                padding: "0 12px",
                lineHeight: 1,
                transition: "transform 0.2s ease",
              }}
            >
              ›
            </button>
          </div>

          {/* Dots indicator */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 8,
              marginTop: 32,
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setPartnerIndex(i)}
                style={{
                  width: i === partnerIndex ? 24 : 8,
                  height: 8,
                  borderRadius: 9999,
                  background: i === partnerIndex ? PRIMARY : "#CBD5E1",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

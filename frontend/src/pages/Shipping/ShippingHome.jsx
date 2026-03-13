import { useState, useEffect, useRef } from "react";
import { Button, Card, Carousel, Typography, Row, Col, Space } from "antd";
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

const TEAL = "#00B5B8";
const DARK = "#1a1a2e";

const services = [
  {
    icon: <GlobalOutlined style={{ fontSize: 32, color: TEAL }} />,
    title: "services.seaFreight.title",
    link: "sea-freight",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-1920x600.jpg",
    desc: "services.seaFreight.desc",
  },
  {
    icon: <CarOutlined style={{ fontSize: 32, color: TEAL }} />,
    title: "services.truckingDelivery.title",
    link: "trucking-delivery",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/Trucking-Delivery-1920x600.jpeg",
    desc: "services.truckingDelivery.desc",
  },
  {
    icon: <SendOutlined style={{ fontSize: 32, color: TEAL }} />,
    title: "services.airFreight.title",
    link: "air-freight",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-Air-Freight-Benefits-1920x600.jpg",
    desc: "services.airFreight.desc",
  },
  {
    icon: <AuditOutlined style={{ fontSize: 32, color: TEAL }} />,
    title: "services.customsClearance.title",
    link: "customs-clearance",
    img: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-customs-clearance-service-1-1920x600.jpg",
    desc: "services.customsClearance.desc",
  },
];

console.log("Services data:", services);
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
        <Carousel autoplay ref={carouselRef}>
          {services.map((svc, idx) => (
            <div key={idx}>
              <div
                style={{
                  height: 550,
                  background: `url(${svc.img}) center/cover no-repeat`,
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: 80,
                  paddingRight: 40,
                }}
              >
                <div style={{ maxWidth: 580, color: "#fff" }}>
                  <Title
                    level={1}
                    style={{
                      color: "#fff",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: 56,
                      margin: 0,
                      lineHeight: 1.05,
                      textTransform: "uppercase",
                      letterSpacing: 2,
                      textShadow: "0 4px 12px rgba(0,0,0,0.7)",
                    }}
                  >
                    {t(svc.title)}
                  </Title>

                  <Paragraph
                    style={{
                      color: "rgba(255,255,255,0.95)",
                      fontSize: 17,
                      margin: "20px 0 32px 0",
                      lineHeight: 1.7,
                      maxWidth: 520,
                    }}
                  >
                    {t(svc.desc)}
                  </Paragraph>

                  <Button
                    onClick={() => handleClickContactUs()}
                    type="primary"
                    size="large"
                    style={{
                      background: TEAL,
                      border: "none",
                      borderRadius: 0,
                      height: 52,
                      fontSize: 16,
                      padding: "0 40px",
                    }}
                    icon={<ArrowRightOutlined />}
                  >
                    {t("contact.title")}
                  </Button>
                </div>
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
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "#fff",
              width: 44,
              height: 44,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 20,
              backdropFilter: "blur(4px)",
            }}
          >
            ‹
          </button>
          <button
            onClick={() => carouselRef.current.next()}
            style={{
              background: "rgba(255,255,255,0.2)",
              border: "none",
              color: "#fff",
              width: 44,
              height: 44,
              borderRadius: "50%",
              cursor: "pointer",
              fontSize: 20,
              backdropFilter: "blur(4px)",
            }}
          >
            ›
          </button>
        </div>
      </div>

      <div
        style={{
          padding: "40px 60px 60px",
          marginTop: -120,
          position: "relative",
          zIndex: 10,
          boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
          borderRadius: "0 0 12px 12px",
        }}
      >
        <Row gutter={[24, 24]}>
          {services.map((svc, idx) => (
            <Col xs={24} sm={12} md={6} key={idx}>
              <div
                onClick={() => handleClick(svc.link)}
                style={{
                  cursor: "pointer",
                  height: "100%",
                  background: "#fff",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow =
                    "0 12px 40px rgba(0,181,184,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.06)";
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
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div style={{ padding: "24px 20px" }}>
                  <Space align="center" style={{ marginBottom: 12 }}>
                    {svc.icon}
                    <Title
                      level={5}
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: 20,
                        color: DARK,
                        textTransform: "uppercase",
                        letterSpacing: 1,
                        margin: 0,
                      }}
                    >
                      {t(svc.title)}
                    </Title>
                  </Space>
                  <Paragraph
                    style={{
                      color: "#555",
                      fontSize: 14,
                      lineHeight: 1.6,
                    }}
                  >
                    {t(svc.desc)}
                  </Paragraph>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div
        style={{
          background: "#fff",
          padding: "60px 60px 80px",
          // borderTop: "1px solid #eee",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <Title
            level={2}
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: 36,
              color: DARK,
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
                bottom: -12,
                left: "50%",
                transform: "translateX(-50%)",
                width: 180,
                height: 3,
                background: TEAL,
                borderRadius: 2,
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
                color: partnerIndex === 0 ? "#ddd" : "#999",
                cursor: partnerIndex === 0 ? "default" : "pointer",
                padding: "0 12px",
                lineHeight: 1,
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
                  gap: 24, // khoảng cách giữa các card
                  transform: `translateX(-${partnerIndex * 20.833}%)`, // giả sử 6 items visible, điều chỉnh nếu thay đổi visibleCount
                  transition: "transform 0.5s ease",
                  // width: `${(partners.length / visibleCount) * 100}%`, // để slide mượt
                }}
              >
                {partners.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      flex: "0 0 auto",
                      width: "calc(100% / 6)", // hiển thị 6 items (như ảnh), responsive nếu cần
                      minWidth: 160,
                      padding: "0 12px",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        border: "1px solid #e0e0e0",
                        borderRadius: 8,
                        padding: "20px 0",
                        height: 100,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "box-shadow 0.3s, transform 0.3s",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 8px 24px rgba(0,181,184,0.15)";
                        e.currentTarget.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow =
                          "0 2px 8px rgba(0,0,0,0.04)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <img
                        src={p.url}
                        alt={p.name}
                        style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "contain",
                        }}
                      />
                    </div>
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
                color: partnerIndex >= maxIndex ? "#ddd" : "#999",
                cursor: partnerIndex >= maxIndex ? "default" : "pointer",
                padding: "0 12px",
                lineHeight: 1,
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
              gap: 10,
              marginTop: 32,
            }}
          >
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <div
                key={i}
                onClick={() => setPartnerIndex(i)}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: i === partnerIndex ? TEAL : "#d0d0d0",
                  cursor: "pointer",
                  transition: "background 0.3s, transform 0.3s",
                  transform: i === partnerIndex ? "scale(1.3)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

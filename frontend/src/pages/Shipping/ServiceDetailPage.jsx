import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import PageHeader from "../../components/ServiceDetail/PageHeader";
import PageBreadcrumb from "../../components/ServiceDetail/PageBreadcrumb";
import ServiceSidebar from "../../components/ServiceDetail/ServiceSidebar";
import ServiceContent from "../../components/ServiceDetail/ServiceContent";
import { useParams } from "react-router-dom";
import AllServicesGrid from "../../components/ServiceDetail/AllServicesGrid";
import { t } from "i18next";

// const SIDEBAR_ITEMS = [
//   { key: "all-services", label: "Tất cả dịch vụ" },
//   { key: "trucking-delivery", label: "Vận chuyển bằng xe tải" },
//   { key: "customs-clearance", label: "Thông quan hải quan" },
//   { key: "air-freight", label: "Vận chuyển đường hàng không" },
//   { key: "sea-freight", label: "Vận chuyển đường biển" },
// ];

const SERVICE_DATA = [
  {
    slug: "all-services",
    title: "servicePage.allServices.title",
    description: "servicePage.allServices.desc",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
  {
    slug: "trucking-delivery",
    title: "servicePage.trucking.title",
    description: "servicePage.trucking.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/Trucking-Delivery-1920x600.jpeg",
  },
  {
    slug: "customs-clearance",
    title: "servicePage.customs.title",
    description: "servicePage.customs.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-customs-clearance-service-1-1920x600.jpg",
  },
  {
    slug: "air-freight",
    title: "servicePage.air.title",
    description: "servicePage.air.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-Air-Freight-Benefits-1920x600.jpg",
  },
  {
    slug: "sea-freight",
    title: "servicePage.sea.title",
    description: "servicePage.sea.desc",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-1920x600.jpg",
  },
];

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const BREADCRUMB_BASE = [
    { label: "VietGlobal", href: "/" },
    { label: t("servicePage.breadcrumb.services"), href: "#" },
  ];
  const SIDEBAR_ITEMS = [
    { key: "all-services", label: t("servicePage.sidebar.all") },
    { key: "trucking-delivery", label: t("servicePage.sidebar.trucking") },
    { key: "customs-clearance", label: t("servicePage.sidebar.customs") },
    { key: "air-freight", label: t("servicePage.sidebar.air") },
    { key: "sea-freight", label: t("servicePage.sidebar.sea") },
  ];

  const current = SERVICE_DATA.find((s) => s.slug === slug) || SERVICE_DATA[0];

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const breadcrumbs = [
    ...BREADCRUMB_BASE,
    { label: t(current.title), active: true },
  ];

  return (
    <div
      style={{
        fontFamily: "'Barlow', sans-serif",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
      <PageHeader title={t(current.title)} />

      <PageBreadcrumb items={breadcrumbs} />

      <div style={{ padding: "48px 80px 80px" }}>
        <Row gutter={40}>
          <Col xs={24} md={7} lg={6}>
            <ServiceSidebar items={SIDEBAR_ITEMS} />
          </Col>

          <Col xs={24} md={17} lg={18}>
            {slug === "all-services" ? (
              <AllServicesGrid />
            ) : (
              <ServiceContent
                description={
                  <div
                    style={{
                      whiteSpace: "pre-line",
                      lineHeight: "1.8",
                      fontSize: "16px",
                      color: "#555",
                    }}
                  >
                    {t(current.description)}
                  </div>
                }
                image={current.image}
                imageAlt={t(current.title)}
              />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import PageHeader from "../../components/ServiceDetail/PageHeader";
import PageBreadcrumb from "../../components/ServiceDetail/PageBreadcrumb";
import ServiceSidebar from "../../components/ServiceDetail/ServiceSidebar";
import ServiceContent from "../../components/ServiceDetail/ServiceContent";
import { useParams } from "react-router-dom";
import AllServicesGrid from "../../components/ServiceDetail/AllServicesGrid";

const SIDEBAR_ITEMS = [
  { key: "all-services", label: "All Services" },
  { key: "trucking-delivery", label: "Trucking Delivery" },
  { key: "customs-clearance", label: "Customs Clearance Service" },
  { key: "air-freight", label: "Air Freight Service" },
  { key: "sea-freight", label: "Sea Freight" },
];

const SERVICE_DATA = [
  {
    slug: "all-services",
    title: "All Services",
    description:
      "We provide a full range of logistics services tailored to meet your business needs. From sea freight and air freight to trucking delivery and customs clearance...",
    image: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
  {
    slug: "trucking-delivery",
    title: "Trucking Delivery",
    description:
      "Contact us for shipping manual & handling tariff for specific shows that you are requested for Using our own operation team, trucks and forklifts we work around the clock to ensure cargo delivered on time and in good condition for your fairs & events",
    image: "https://tpshipping.com.vn/wp-content/uploads/2021/06/Trucking-Delivery-1920x600.jpeg",
  },
  {
    slug: "customs-clearance",
    title: "Customs Clearance Service",
    description:
      "We ensure that our fleet of trucks are always well maintained, and have the best and the most updated fleet of trucks in service to ensure that it is capable of delivering high value, and oversized deliverables, efficiently and effectively, without causing any kind of loss, which is generally the case seen with many outsourced trucking service providers.",
    image: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-customs-clearance-service-1-1920x600.jpg",
  },
  {
    slug: "air-freight",
    title: "Air Freight Service",
    description:
      "Contact us today for cargo survey, cost estimation and packing solution for your next shipment We offer custom made wooden cases, crates, pallets and vacuum packing to suit any of your industrial packing requirement.",
    image: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-Air-Freight-Benefits-1920x600.jpg",
  },
  {
    slug: "sea-freight",
    title: "Sea Freight",
    description:
      "Our sea freight services are regularly audited and analyzed to ensure that it meets the contemporary business models, and any and all upgrades are made to ensure our services continue to help our clients meet their logistic requirements efficiently. Our logistics team have years of experience in this business and can handle long term and large scale assignments with utter professionalism, and our customer service helps the clients to stay in the loop throughout the process, whenever they require any assistance. Consult with our experts today for your logistics, warehousing and distribution services requirements, and allow us to make a positive difference in your business.",
    image: "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-1920x600.jpg",
  },
];

const BREADCRUMB_BASE = [
  { label: "VietGlobal", href: "/" },
  { label: "Services", href: "#" },
];

export default function ServiceDetailPage() {
  const { slug } = useParams();

  const current =
    SERVICE_DATA.find((s) => s.slug === slug) || SERVICE_DATA[0];

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const breadcrumbs = [
    ...BREADCRUMB_BASE,
    { label: current.title, active: true },
  ];

  return (
    <div style={{ fontFamily: "'Barlow', sans-serif", minHeight: "100vh", background: "#fff" }}>
      
      <PageHeader title={current.title} />

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
                description={current.description}
                image={current.image}
                imageAlt={current.title}
                />
            )}
          </Col>

        </Row>
      </div>
    </div>
  );
}
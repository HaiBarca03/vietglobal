import { useState, useEffect } from "react";
import { Row, Col } from "antd";
import PageHeader from "../../components/ServiceDetail/PageHeader";
import PageBreadcrumb from "../../components/ServiceDetail/PageBreadcrumb";
import ServiceSidebar from "../../components/ServiceDetail/ServiceSidebar";
import ServiceContent from "../../components/ServiceDetail/ServiceContent";
import { useParams } from "react-router-dom";
import AllServicesGrid from "../../components/ServiceDetail/AllServicesGrid";

const SIDEBAR_ITEMS = [
  { key: "all-services", label: "Tất cả dịch vụ" },
  { key: "trucking-delivery", label: "Vận chuyển bằng xe tải" },
  { key: "customs-clearance", label: "Thông quan hải quan" },
  { key: "air-freight", label: "Vận chuyển đường hàng không" },
  { key: "sea-freight", label: "Vận chuyển đường biển" },
];

const SERVICE_DATA = [
  {
    slug: "all-services",
    title: "Tất cả dịch vụ",
    description:
      "Chúng tôi cung cấp đầy đủ các dịch vụ logistics nhằm đáp ứng nhu cầu kinh doanh của bạn. Từ vận chuyển đường biển, vận chuyển đường hàng không đến vận chuyển bằng xe tải và dịch vụ thông quan hải quan...",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&q=80",
  },
  {
    slug: "trucking-delivery",
    title: "Vận chuyển bằng xe tải",
    description: `Liên hệ với chúng tôi để nhận hướng dẫn vận chuyển và biểu phí xử lý cho các dịch vụ cụ thể mà bạn yêu cầu. Đội ngũ của chúng tôi sẽ cung cấp hướng dẫn rõ ràng và thông tin chi tiết để đảm bảo hàng hóa của bạn được chuẩn bị và vận chuyển đúng theo các tiêu chuẩn cần thiết.

    Với đội ngũ vận hành riêng, xe tải và xe nâng, chúng tôi làm việc 24/7 để đảm bảo hàng hóa được giao đúng thời gian và trong tình trạng tốt nhất cho các hội chợ và sự kiện của bạn. Đội ngũ nhân viên giàu kinh nghiệm của chúng tôi quản lý cẩn thận từng giai đoạn của quá trình vận chuyển, bao gồm bốc xếp, cố định và dỡ hàng nhằm đảm bảo an toàn và hiệu quả.

    Thông qua việc lập kế hoạch cẩn thận, tối ưu tuyến đường và giám sát liên tục, chúng tôi có thể cung cấp lịch giao hàng linh hoạt và dịch vụ đáng tin cậy. Mục tiêu của chúng tôi là đảm bảo mọi lô hàng đến nơi an toàn, đúng thời gian và sẵn sàng cho sự kiện hoặc hoạt động kinh doanh của bạn.`,
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/Trucking-Delivery-1920x600.jpeg",
  },
  {
    slug: "customs-clearance",
    title: "Thông quan hải quan",
    description:
      "Chúng tôi đảm bảo đội xe luôn được bảo dưỡng tốt và cập nhật hiện đại để có thể vận chuyển các loại hàng hóa có giá trị cao hoặc kích thước lớn một cách hiệu quả và an toàn. Điều này giúp hạn chế rủi ro mất mát, vốn thường xảy ra với nhiều đơn vị vận chuyển thuê ngoài.",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-customs-clearance-service-1-1920x600.jpg",
  },
  {
    slug: "air-freight",
    title: "Vận chuyển đường hàng không",
    description: `  Liên hệ với chúng tôi ngay hôm nay để được khảo sát hàng hóa, ước tính chi phí và tư vấn giải pháp vận chuyển đường hàng không phù hợp cho lô hàng tiếp theo của bạn. Đội ngũ chuyên gia của chúng tôi sẽ hỗ trợ đánh giá đặc điểm hàng hóa, yêu cầu về thời gian giao nhận cũng như các điều kiện bảo quản trong quá trình vận chuyển để đưa ra phương án tối ưu nhất.
      
    Chúng tôi cung cấp các giải pháp đóng gói chuyên nghiệp như thùng gỗ, kiện gỗ, pallet và dịch vụ đóng gói hút chân không theo yêu cầu, đặc biệt phù hợp với các loại hàng hóa công nghiệp, máy móc hoặc hàng hóa có giá trị cao. Tất cả các quy trình đóng gói đều được thực hiện cẩn thận nhằm đảm bảo hàng hóa được bảo vệ tối đa và đáp ứng các tiêu chuẩn vận chuyển quốc tế trong ngành hàng không.
      
    Với mạng lưới đối tác hàng không rộng khắp và kinh nghiệm trong lĩnh vực logistics, chúng tôi cam kết mang đến dịch vụ vận chuyển nhanh chóng, an toàn và đáng tin cậy, giúp hàng hóa của bạn đến đúng nơi, đúng thời gian và trong tình trạng tốt nhất.`,
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-Air-Freight-Benefits-1920x600.jpg",
  },
  {
    slug: "sea-freight",
    title: "Vận chuyển đường biển",
    description:
      "Dịch vụ vận chuyển đường biển của chúng tôi được kiểm tra và phân tích thường xuyên để đảm bảo phù hợp với các mô hình kinh doanh hiện đại. Mọi cải tiến cần thiết đều được thực hiện nhằm giúp khách hàng đáp ứng nhu cầu logistics một cách hiệu quả. Đội ngũ logistics của chúng tôi có nhiều năm kinh nghiệm và có thể xử lý các dự án dài hạn hoặc quy mô lớn với tính chuyên nghiệp cao. Đồng thời, bộ phận chăm sóc khách hàng luôn hỗ trợ để khách hàng có thể cập nhật thông tin trong suốt quá trình vận chuyển khi cần thiết. Hãy liên hệ với các chuyên gia của chúng tôi ngay hôm nay cho nhu cầu logistics, kho bãi và phân phối của bạn để chúng tôi có thể mang lại sự khác biệt tích cực cho doanh nghiệp của bạn.",
    image:
      "https://tpshipping.com.vn/wp-content/uploads/2021/06/banner-1920x600.jpg",
  },
];

const BREADCRUMB_BASE = [
  { label: "VietGlobal", href: "/" },
  { label: "Dịch Vụ", href: "#" },
];

export default function ServiceDetailPage() {
  const { slug } = useParams();

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
    { label: current.title, active: true },
  ];

  return (
    <div
      style={{
        fontFamily: "'Barlow', sans-serif",
        minHeight: "100vh",
        background: "#fff",
      }}
    >
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
                description={
                  <div
                    style={{
                      whiteSpace: "pre-line",
                      lineHeight: "1.8",
                      fontSize: "16px",
                      color: "#555",
                    }}
                  >
                    {current.description}
                  </div>
                }
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

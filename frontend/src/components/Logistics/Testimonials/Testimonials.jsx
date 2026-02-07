import React from 'react';
import { Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';

const { Title, Text, Paragraph} = Typography;

const testimonialData = [
  {
    id: 1,
    content: "Dịch vụ ký gửi hàng hóa của VietGlobal Logistics rất đáng tin cậy. Mình đã gửi nhiều cont hàng qua VietGlobal và ít khi gặp các vấn đề phát sinh. Nhân viên luôn hỗ trợ và tư vấn một cách chuyên nghiệp.",
    name: "Mr. Thanh Tú",
    position: "Business Ngành Hàng Thể Thao",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    content: "Nhân viên của VietGlobal Logistics luôn thân thiện và vận chuyển luôn suôn sẻ. Đặc biệt, mình cảm thấy quy trình xử lý của họ rất nhanh gọn, giúp mình tiết kiệm rất nhiều thời gian.",
    name: "Mrs. Nhật Hạ",
    position: "Business Ngành Hàng Linh Kiện Điện Tử",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    content: "Tôi đánh giá cao sự minh bạch về giá cả và lộ trình hàng hóa tại VietGlobal. Đây là đơn vị nhập hàng Trung Quốc chính ngạch tốt nhất mà tôi từng hợp tác.",
    name: "Mr. Hoàng Nam",
    position: "Chủ chuỗi cửa hàng gia dụng",
    avatar: "https://i.pravatar.cc/150?u=3"
  },
  {
    id: 4,
    content: "VietGlobal Logistics hỗ trợ mình rất tốt trong các đơn hàng số lượng lớn. Hàng về đúng tiến độ, đóng gói cẩn thận và có thông báo trạng thái liên tục.",
    name: "Ms. Thuỳ Linh",
    position: "Kinh doanh mỹ phẩm nhập khẩu",
    avatar: "https://i.pravatar.cc/150?u=4"
  },
  {
    id: 5,
    content: "Điểm mình thích nhất ở VietGlobal là sự rõ ràng trong hợp đồng và chi phí. Không phát sinh thêm các khoản ngoài dự kiến, rất phù hợp để hợp tác lâu dài.",
    name: "Mr. Đức Mạnh",
    position: "CEO Công ty Thương mại Điện tử",
    avatar: "https://i.pravatar.cc/150?u=5"
  },
  {
    id: 6,
    content: "Từ khi sử dụng dịch vụ của VietGlobal Logistics, việc nhập hàng Trung Quốc của bên mình trở nên dễ dàng hơn rất nhiều. Đội ngũ support phản hồi nhanh và xử lý rất có tâm.",
    name: "Mrs. Kim Anh",
    position: "Chủ shop kinh doanh online",
    avatar: "https://i.pravatar.cc/150?u=6"
  }
];


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="testimonials-header"
        >
          <Title level={2} className="main-header-title">
            <span className="highlight-red">Khách hàng nói gì về</span> VietGlobal Logistics
          </Title>
          <div className="red-line"></div>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 5000 }}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            1024: { slidesPerView: 1.5, spaceBetween: 50 }
          }}
          className="mySwiper"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card">
                <div className="quote-content">
                  <div className="vertical-line"></div>
                  <Paragraph className="comment-text">
                    {item.content}
                  </Paragraph>
                </div>
                <div className="user-info">
                  <img src={item.avatar} alt={item.name} className="user-avatar" />
                  <div className="user-meta">
                    <Text className="user-name">{item.name}</Text>
                    <Text className="user-pos">{item.position}</Text>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
import React from 'react';
import { Typography, Button } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import { CheckCircleFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './HomeBannerSlider.css';

const { Title, Text } = Typography;

const slideData = [
  {
    id: 1,
    subTitle: "ĐỐI TÁC CHIẾN LƯỢC CUNG CẤP GIẢI PHÁP NHẬP HÀNG",
    mainTitle: "CHÍNH NGẠCH TRUNG - VIỆT",
    desc: "CHO NHÀ BÁN HÀNG NHẬP KHẨU",
    truckImg: "https://i.imgur.com/E6R9V3X.png", // Thay bằng link ảnh xe tải thực tế của bạn
    features: [
      "HỖ TRỢ TÌM NGUỒN VÀ DEAL GIÁ TẬN XƯỞNG - TỐI ƯU CHI PHÍ",
      "HÀNG VỀ TỪ 3-7 NGÀY SAU XẾP XE",
      "GHÉP CONT CHÍNH NGẠCH ĐƯỜNG BIỂN - BỘ CHỈ TỪ 50KG",
      "KHO CHÍNH CHỦ 3 MIỀN (HÀ NỘI - ĐÀ NẴNG - HỒ CHÍ MINH)",
      "CƯỚC CHỈ TỪ 5K/KG - 1 TRIỆU/KHỐI",
      "CUNG CẤP ĐẦY ĐỦ HÓA ĐƠN CHỨNG TỪ (VAT, CO, TỜ KHAI)",
      "ĐỀN BÙ 100% NẾU THẤT LẠC HÀNG HÓA",
      "MIỄN PHÍ GIAO HÀNG NỘI THÀNH"
    ]
  },
  // Bạn có thể thêm 2-3 slide tương tự ở đây
  {
    id: 2,
    subTitle: "GIẢI PHÁP LOGISTCS TOÀN DIỆN",
    mainTitle: "VẬN CHUYỂN NHANH CHÓNG",
    desc: "AN TÂM TRÊN MỌI NẺO ĐƯỜNG",
    truckImg: "https://i.imgur.com/E6R9V3X.png",
    features: ["Bảo hiểm hàng hóa", "Theo dõi đơn hàng 24/7", "Hệ thống kho bãi hiện đại"]
  }
];

const HomeBannerSlider = () => {
  return (
    <div className="home-banner-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        className="main-banner-swiper"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-inner">
              <div className="overlay-bg"></div>
              <div className="banner-container">
                <Row align="middle" gutter={[32, 32]}>
                  <Col xs={24} lg={14}>
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <Text className="sub-title-top">{slide.subTitle}</Text>
                      <Title level={1} className="main-title-yellow">
                        {slide.mainTitle}
                      </Title>
                      <Title level={2} className="desc-white">
                        {slide.desc}
                      </Title>

                      <div className="feature-list">
                        {slide.features.map((feat, idx) => (
                          <div key={idx} className="feature-item">
                            <CheckCircleFilled className="check-icon" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </Col>

                  <Col xs={24} lg={10} className="truck-col">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8, x: 100 }}
                      whileInView={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 1, type: "spring" }}
                      src={slide.truckImg}
                      alt="VietGlobal Truck"
                      className="truck-image"
                    />
                  </Col>
                </Row>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation Buttons */}
        <div className="custom-prev"><LeftOutlined /></div>
        <div className="custom-next"><RightOutlined /></div>
      </Swiper>
    </div>
  );
};

// Layout Antd Row/Col cần import thêm
import { Row, Col } from 'antd';

export default HomeBannerSlider;
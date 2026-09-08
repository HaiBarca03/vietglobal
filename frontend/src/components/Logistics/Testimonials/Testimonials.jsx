import React from 'react';
import { Typography } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';
import { MessageFilled, StarFilled, LeftOutlined, RightOutlined } from '@ant-design/icons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Testimonials.css';
import { useTranslation } from 'react-i18next';

const { Title, Paragraph } = Typography;

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = t("viChi.testimonials", { returnObjects: true }) || [];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* Header */}
        <div className="testimonials-header-box">
          <div className="testimonials-eyebrow">
            <MessageFilled style={{ color: "#1464C4" }} />
            <span>{t("viChi.testimonialsSection.eyebrow", `${t("viChi.saidMe")} VietGlobal`)}</span>
          </div>
          <h2 className="testimonials-title">
            {t("viChi.testimonialsSection.title", "Khách Hàng Nói Gì Về Chúng Tôi")}
          </h2>
          <p className="testimonials-sub">
            {t("viChi.testimonialsSection.sub", "Lắng nghe đánh giá thực tế từ các nhà bán hàng và doanh nghiệp nhập khẩu chính ngạch.")}
          </p>
        </div>

        {/* Swiper Slider */}
        <div className="testimonials-swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: '.testi-next-btn',
              prevEl: '.testi-prev-btn',
            }}
            breakpoints={{
              768: { slidesPerView: 2, spaceBetween: 24 },
              1200: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="testi-swiper"
          >
            {Array.isArray(testimonials) && testimonials.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="testi-card">
                  {/* Rating Stars */}
                  <div className="testi-stars">
                    {[...Array(5)].map((_, sIdx) => (
                      <StarFilled key={sIdx} style={{ color: "#F59E0B", fontSize: 13 }} />
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="testi-content">
                    "{item.content}"
                  </p>

                  <div className="testi-divider" />

                  {/* Author */}
                  <div className="testi-author">
                    <img
                      src={item.avatar || `https://i.pravatar.cc/150?u=${idx + 1}`}
                      alt={item.name}
                      className="testi-avatar"
                    />
                    <div>
                      <div className="testi-name">{item.name}</div>
                      <div className="testi-position">{item.position}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* External Navigation Arrows */}
          <div className="testi-controls">
            <button className="testi-nav-btn testi-prev-btn" aria-label="Previous">
              <LeftOutlined />
            </button>
            <button className="testi-nav-btn testi-next-btn" aria-label="Next">
              <RightOutlined />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
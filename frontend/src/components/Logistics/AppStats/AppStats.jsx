import React from 'react';
import { Row, Col, Typography, Statistic } from 'antd';
import { motion } from 'framer-motion';
import CountUp from 'react-countup'; 
import './AppStats.css';

const { Title, Text } = Typography;

const statsData = [
  { id: 1, value: 20394, suffix: '+', label: 'Đơn thanh toán hộ', color: '#ff7a18' },
  { id: 2, value: 4982, suffix: '+', label: 'Dịch vụ đổi tệ', color: '#ff7a18' },
  { id: 3, value: 2459, suffix: '+', label: 'Đơn hàng mỗi ngày', color: '#ff7a18' },
  { id: 4, value: 19852, suffix: '+', label: 'Đơn ký gửi', color: '#ff7a18' },
];

const AppStats = () => {
  return (
    <div className="stats-section">
      {/* Tiêu đề chính */}
      <div className="stats-header">
        <div className="line-decoration left"></div>
        <Title level={2} className="stats-main-title">Chúng tôi đã hoạt động</Title>
        <div className="line-decoration right"></div>
      </div>

      <div className="stats-content-wrapper">
        <Row align="middle" justify="center" gutter={[40, 40]}>
          {/* Cột trái: 2 thông số */}
          <Col xs={24} lg={7} className="stats-column left-side">
            {statsData.slice(0, 2).map((item) => (
              <motion.div 
                key={item.id} 
                className="stat-item"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.id * 0.2 }}
              >
                <div className="stat-number">
                  <CountUp end={item.value} duration={3} separator="," />
                  <span>{item.suffix}</span>
                </div>
                <Text className="stat-label">{item.label}</Text>
              </motion.div>
            ))}
          </Col>

          {/* Cột giữa: Hình ảnh 3D Box */}
          <Col xs={24} lg={10} className="stats-image-col">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="box-3d-container"
            >
              <img 
                src="https://babashaverdi.ir/wpml/wp-content/uploads/2024/08/delivery_service_6-1.png" 
                alt="Logistics Boxes" 
                className="main-boxes-img"
              />
            </motion.div>
          </Col>

          {/* Cột phải: 2 thông số */}
          <Col xs={24} lg={7} className="stats-column right-side" style={{padding: 0}}>
            {statsData.slice(2, 4).map((item) => (
              <motion.div 
                key={item.id} 
                className="stat-item"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: item.id * 0.2 }}
              >
                <div className="stat-number">
                  <CountUp end={item.value} duration={3} separator="," />
                  <span>{item.suffix}</span>
                </div>
                <Text className="stat-label">{item.label}</Text>
              </motion.div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AppStats;
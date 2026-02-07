import React from 'react';
import { Button, Row, Col, Typography } from 'antd';
import { ChromeFilled } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './OrderTool.css';

const { Title, Text } = Typography;

const OrderTool = () => {
  // Các biến thể animation cho các vật thể bay
  const floatVariants = (delay) => ({
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }
  });

  return (
    <div className="tool-section-wrapper">
      <Row gutter={[32, 32]} align="middle" className="tool-container">
        
        {/* Bên trái: Hình ảnh minh họa 3D */}
        <Col xs={24} md={12} className="image-stack-col">
          <div className="image-relative-container">
            {/* Laptop chính */}
            <motion.img 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              src="https://img.freepik.com/free-vector/isometric-laptop-with-business-chart-magnifying-glass_1262-16544.jpg" // Thay bằng link ảnh laptop của bạn
              alt="Laptop Order" 
              className="main-laptop"
            />

            {/* Các vật thể bay xung quanh (Icon 3D) */}
            <motion.div className="floating-item box-1" variants={floatVariants(0)} animate="animate">
               <img src="https://cdn-icons-png.flaticon.com/512/679/679821.png" alt="box" width="60" />
            </motion.div>
            
            <motion.div className="floating-item coin-1" variants={floatVariants(0.5)} animate="animate">
               <img src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" alt="coin" width="80" />
            </motion.div>

            <motion.div className="floating-item heart-icon" variants={floatVariants(1)} animate="animate">
               <div className="glass-card">❤️</div>
            </motion.div>

            <motion.div className="floating-item cloud" variants={floatVariants(1.5)} animate="animate">
               ☁️
            </motion.div>
          </div>
        </Col>

        {/* Bên phải: Nội dung văn bản */}
        <Col xs={24} md={12} className="content-col">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title level={1} className="tool-title">
              Công cụ đặt hàng
            </Title>
            <Text className="tool-subtitle">
              Đặt hàng trên trình duyệt
            </Text>
            
            <div className="button-group">
              <Button 
                type="primary" 
                size="large" 
                icon={<ChromeFilled />} 
                className="btn-chrome"
              >
                Chrome
              </Button>
              
              <Button 
                size="large" 
                className="btn-coccoc"
                icon={<img src="https://coccoc.com/favicon.ico" width="20" style={{marginRight: 8}} alt="coccoc" />}
              >
                CỐC CỐC
              </Button>
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default OrderTool;
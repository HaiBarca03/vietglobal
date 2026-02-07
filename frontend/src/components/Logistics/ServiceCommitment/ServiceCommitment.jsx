import React from 'react';
import { Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import { 
  DollarCircleOutlined, 
  CustomerServiceOutlined, 
  CalendarOutlined 
} from '@ant-design/icons';
import './ServiceCommitment.css';

const { Title, Paragraph } = Typography;

const commitments = [
  {
    id: 1,
    title: "CAM KẾT BỒI THƯỜNG",
    content: "Cam kết bồi thường 100% giá trị tiền hàng & phí mua hàng nếu Lê Phương Logistics đặt hàng sai hoặc đặt thiếu sản phẩm...",
    icon: <DollarCircleOutlined />,
    number: "1",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    iconColor: "#e0f7fa"
  },
  {
    id: 2,
    title: "CAM KẾT HỖ TRỢ",
    content: "Đội ngũ nhân viên của chúng tôi sẽ hỗ trợ mọi vấn đề của Quý khách 24/7",
    icon: <CustomerServiceOutlined />,
    number: "2",
    gradient: "linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)",
    iconColor: "#e3f2fd"
  },
  {
    id: 3,
    title: "CAM KẾT THỜI GIAN",
    content: "Chúng tôi cam kết thời gian hàng về ổn định, nhanh từ 3-7 ngày",
    icon: <CalendarOutlined />,
    number: "3",
    gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
    iconColor: "#fff3e0"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }),
  hover: { 
    y: -15, 
    scale: 1.06, 
    boxShadow: "0 25px 60px rgba(0,0,0,0.18)",
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const iconVariants = {
  rest: { rotate: 0, scale: 1 },
  hover: { 
    rotate: 360, 
    scale: 1.25,
    transition: { duration: 0.7, ease: "easeInOut" }
  }
};

const ServiceCommitment = () => {
  return (
    <div className="commitment-section">
      <div className="container">
        {/* Header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="stats-header"
        >
          <div className="line-decoration left"></div>
          <Title level={2} className="stats-main-title">
            Cam kết dịch vụ đặt hàng
          </Title>
          <div className="line-decoration right"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          viewport={{ once: true }}
        >
          <Paragraph className="commitment-desc">
            Chúng tôi quan niệm rằng, chất lượng và dịch vụ là người bạn đồng hành của Lê Phương Logistics. 
            Vì vậy, trong suốt hành trình 4 năm, chúng tôi luôn nỗ lực cải tiến chất lượng và dịch vụ 
            đem đến sự hài lòng tối đa cho quý khách hàng.
          </Paragraph>
        </motion.div>

        {/* Cards */}
        <div className="cards-wrapper">
          {/* Decorative connecting lines (now animated) */}
          <svg className="svg-connector" width="100%" height="320" viewBox="0 0 1200 320" fill="none">
            <motion.path
              d="M 380 160 Q 500 80, 600 160 T 820 160"
              stroke="#ffffff"
              strokeWidth="3"
              strokeDasharray="8 6"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.7 }}
              transition={{ duration: 1.8, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>

          <Row gutter={[32, 64]} justify="center">
            {commitments.map((item, index) => (
              <Col xs={24} md={8} key={item.id}>
                <motion.div
                  className="commitment-card"
                  style={{ background: item.gradient }}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, margin: "-80px" }}
                >
                  <div className="card-number-bg">{item.number}</div>

                  <motion.div 
                    className="icon-wrapper"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                  >
                    {React.cloneElement(item.icon, { 
                      style: { fontSize: 64, color: item.iconColor } 
                    })}
                  </motion.div>

                  <Title level={4} className="card-title">{item.title}</Title>
                  <Paragraph className="card-content">{item.content}</Paragraph>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ServiceCommitment;
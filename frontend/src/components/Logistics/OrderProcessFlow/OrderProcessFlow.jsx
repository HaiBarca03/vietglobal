// src/components/OrderProcessFlow.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileTextOutlined, 
  GiftOutlined, 
  CarOutlined, 
  HomeOutlined, 
  GlobalOutlined, 
  CheckCircleOutlined, 
  ShopOutlined 
} from '@ant-design/icons';
import './OrderProcessFlow.css';

const steps = [
  { id: 1, title: "Đặt hàng", icon: <FileTextOutlined />, color: '#00d2ff' },
  { id: 2, title: "Đóng gói hàng hóa", icon: <GiftOutlined />, color: '#00bcff' },
  { id: 3, title: "Vận chuyển nội địa", icon: <CarOutlined />, color: '#00a6ff' },
  { id: 4, title: "Kho Trung Quốc", icon: <HomeOutlined />, color: '#0090ff' },
  { id: 5, title: "Vận chuyển Việt Nam", icon: <GlobalOutlined />, color: '#007aff' },
  { id: 6, title: "Thông quan", icon: <CheckCircleOutlined />, color: '#0064ff' },
  { id: 7, title: "Kho Việt Nam", icon: <ShopOutlined />, color: '#004eff' },
  { id: 8, title: "Vận chuyển nội địa", icon: <CarOutlined />, color: '#0038ff' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    }
  }
};

const itemVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.85 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    }
  },
  hover: {
    scale: 1.08,
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.16)",
    transition: { duration: 0.3 }
  }
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      delay: 0.4
    }
  }
};

export default function OrderProcessFlow() {
  return (
    <div className="process-container">
      {/* Thêm các bong bóng trang trí bay lơ lửng */}
      <div className="decor-bubbles">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="bubble"
            animate={{
              y: [0, -40, 0],
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="main-title"
      >
        Quy trình đặt hàng
      </motion.h1>

      <div className="flow-wrapper">
        <svg className="connecting-lines" preserveAspectRatio="none" viewBox="0 0 1200 400">
           {/* Giữ nguyên các path SVG của bạn nhưng đổi màu sang trắng trong suốt */}
           <motion.path
            d="M 100 200 Q 300 50, 500 200 Q 700 350, 900 200 Q 1100 50, 1300 200"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <motion.div
          className="steps-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              className="step-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, 0], // Xoay nhẹ khi hover
                y: -15 
              }}
              // Animation tự động nhấp nhô (Floating)
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: step.id * 0.2
                }
              }}
              style={{ '--step-color': step.color }}
            >
              <div className="step-number">{step.id}</div>
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
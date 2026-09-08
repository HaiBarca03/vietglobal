import { Typography } from "antd";
import { motion } from "framer-motion";

const { Title } = Typography;

export default function PageHeader({ title }) {
  return (
    <div
      style={{
        background: "linear-gradient(135deg, #0A2540 0%, #0F3A66 60%, #1464C4 100%)",
        padding: "48px 80px 42px",
        position: "relative",
        overflow: "hidden",
        boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.1)",
      }}
    >
      {/* Ambient background decoration */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: "10%",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(20,100,196,0.3) 0%, transparent 70%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 20,
            padding: "3px 12px",
            fontSize: 11.5,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#93C5FD",
            marginBottom: 12,
          }}
        >
          <span>VIETGLOBAL • DỊCH VỤ VẬN TẢI</span>
        </div>

        <Title
          level={1}
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 800,
            fontSize: 40,
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: 1.2,
            margin: 0,
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
          }}
        >
          {title}
        </Title>
      </motion.div>
    </div>
  );
}
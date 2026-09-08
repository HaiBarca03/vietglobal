import { Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import i18next from "i18next";
import { useNavigate, useParams } from "react-router-dom";

const { Text } = Typography;

const PRIMARY = "#1464C4";
const NAVY = "#0A2540";

export default function ServiceSidebar({ items = [], activeKey }) {
  const navigate = useNavigate();
  const { slug } = useParams();
  const lang = i18next.language || "en";
  const currentKey = activeKey || slug;

  const handleClick = (key) => {
    navigate(`/${lang}/service/${key}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, idx) => {
        const isActive = item.key === currentKey;

        return (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            whileHover={{ x: isActive ? 0 : 4 }}
            onClick={() => handleClick(item.key)}
            style={{
              background: isActive
                ? `linear-gradient(135deg, ${NAVY} 0%, ${PRIMARY} 100%)`
                : "#FFFFFF",
              padding: "16px 20px",
              cursor: "pointer",
              borderRadius: 10,
              border: isActive ? "none" : "1.5px solid #E2E8F0",
              boxShadow: isActive
                ? "0 6px 18px rgba(20, 100, 196, 0.3)"
                : "0 2px 6px rgba(10, 37, 64, 0.03)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "#E6F4FF";
                e.currentTarget.style.borderColor = "#93C5FD";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#E2E8F0";
              }
            }}
          >
            <Text
              strong
              style={{
                color: isActive ? "#FFFFFF" : "#1E293B",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 14.5,
                textTransform: "uppercase",
                letterSpacing: 0.8,
              }}
            >
              {item.label}
            </Text>
            <RightOutlined
              style={{
                color: isActive ? "#93C5FD" : "#94A3B8",
                fontSize: 12,
                transition: "transform 0.2s ease",
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
import { Typography } from "antd";
import i18next from "i18next";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const TEAL = "#00B5B8";
const DARK = "#2d2d2d";

export default function ServiceSidebar({ items = [], activeKey }) {
  const navigate = useNavigate();
  const lang = i18next.language || 'en'
  const handleClick = (key) => {
    navigate(`/${lang}/service/${key}`);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {items.map((item) => {
        const isActive = item.key === activeKey;

        return (
          <div
            key={item.key}
            onClick={() => handleClick(item.key)}
            style={{
              background: isActive ? TEAL : "#f0f0f0",
              padding: "16px 24px",
              cursor: "pointer",
              borderLeft: isActive
                ? "4px solid #0099a0"
                : "4px solid transparent",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.background = "#e2e2e2";
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = "#f0f0f0";
            }}
          >
            <Text
              strong
              style={{
                color: isActive ? "#fff" : DARK,
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: 14,
                textTransform: "uppercase",
                letterSpacing: 0.8,
              }}
            >
              {item.label}
            </Text>
          </div>
        );
      })}
    </div>
  );
}
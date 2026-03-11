import { Typography } from "antd";

const { Title } = Typography;

const DARK = "#2d2d2d";

export default function PageHeader({ title }) {
  return (
    <div
      style={{
        background: "#f0f0f0",
        padding: "40px 80px 36px",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Title
        level={1}
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 800,
          fontSize: 42,
          color: DARK,
          textTransform: "uppercase",
          letterSpacing: 1,
          margin: 0,
        }}
      >
        {title}
      </Title>
    </div>
  );
}
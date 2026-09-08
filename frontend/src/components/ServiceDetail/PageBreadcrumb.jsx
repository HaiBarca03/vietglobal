import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";

const PRIMARY = "#1464C4";

/**
 * PageBreadcrumb — thanh breadcrumb dưới PageHeader
 * Props:
 *   items: Array<{ label: string, href?: string, active?: boolean }>
 */
export default function PageBreadcrumb({ items = [] }) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "14px 80px",
        borderBottom: "1px solid #E2E8F0",
      }}
    >
      <Breadcrumb
        separator={
          <RightOutlined
            style={{ fontSize: 10, color: "#94A3B8", margin: "0 4px" }}
          />
        }
        items={items.map((item) => ({
          title: item.href ? (
            <a
              href={item.href}
              style={{
                color: item.active ? "#64748B" : PRIMARY,
                fontWeight: item.active ? 400 : 600,
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13,
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0F52A3")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = item.active ? "#64748B" : PRIMARY)
              }
            >
              {item.label}
            </a>
          ) : (
            <span
              style={{
                color: item.active ? "#999" : "#333",
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13,
              }}
            >
              {item.label}
            </span>
          ),
        }))}
      />
    </div>
  );
}

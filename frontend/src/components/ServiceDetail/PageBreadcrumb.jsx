import { Breadcrumb } from "antd";
import { RightOutlined } from "@ant-design/icons";

const TEAL = "#00B5B8";

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
        borderBottom: "1px solid #eee",
      }}
    >
      <Breadcrumb
        separator={<RightOutlined style={{ fontSize: 10, color: "#aaa", margin: "0 4px" }} />}
        items={items.map((item) => ({
          title: item.href ? (
            <a
              href={item.href}
              style={{
                color: item.active ? "#888" : TEAL,
                fontWeight: item.active ? 400 : 600,
                fontFamily: "'Barlow', sans-serif",
                fontSize: 13,
                textDecoration: "none",
              }}
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
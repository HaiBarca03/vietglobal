---
name: vietglobal-uiux-system
description: Comprehensive UI/UX Design System and Refactoring Playbook for VietGlobal. Enforces modern logistics-tech brand guidelines, design tokens, Ant Design theme standards, scoped CSS rules, and component patterns across Shipping, Fulfillment, Cross-border Logistics, and Navigation modules.
---

# VietGlobal UI/UX Design System & Refactoring Playbook

> **Mục tiêu cốt lõi (North Star):**
> Biến VietGlobal thành một nền tảng công nghệ Logistics & Fulfillment xuyên biên giới hiện đại, chuyên nghiệp ngang tầm các SaaS logistics hàng đầu thế giới (ShipBob, Flexport, Gelato), loại bỏ hoàn toàn cảm giác "template AI rẻ tiền" hoặc website đóng khung truyền thống.

---

## 1. Brand Identity & Color System

Giao diện VietGlobal phải toát lên sự **Sáng sủa, Tinh gọn, Đáng tin cậy và Công nghệ** (Bright, Clean, Confident).
* Tỷ lệ nền sáng: **≥ 80% trang là White hoặc Light Tint** (`#F8FAFC` / `#F0F7FF`).
* Deep Navy chỉ đóng vai trò là màu chữ chính, đường viền, hoặc một điểm nhấn tối duy nhất (như Footer), **không lạm dụng làm nền cho toàn bộ trang**.

| Vai trò (Role) | Mã màu chuẩn | Ứng dụng cụ thể |
|---|---|---|
| **Primary (Chủ đạo)** | `#1464C4` – `#0F7FE0` | Nút CTA chính, Tab active, Header highlight, Logo accent |
| **Secondary / Sky** | `#4FA8F5` – `#E6F4FF` | Hover states, Tag nền, Background wash phân chia section |
| **Base (Nền chính)** | `#FFFFFF` | Nền thẻ Card, container nội dung, 80%+ diện tích trang |
| **Surface (Nền phụ)** | `#F8FAFC` – `#F1F5F9` | Nền trang tổng thể, các section so le tạo độ sâu |
| **Ink / Text Dark** | `#0A2540` / `#1E293B` | Tiêu đề H1-H4, body text chính (độ tương phản cao, dễ đọc) |
| **Text Muted** | `#64748B` – `#94A3B8` | Mô tả phụ, nhãn phụ, placeholder, timestamp |
| **Accent Live/Hot** | `#FF7A45` / `#FA541C` | Badge "Live Tracking", "Zero Inventory", tag nổi bật (dùng có chọn lọc) |
| **Border / Divider** | `#E2E8F0` / `#F1F5F9` | Đường viền thẻ card, vách ngăn danh mục |

---

## 2. Hard Anti-Patterns (Danh sách cấm kỵ)

1. **Tuyệt đối KHÔNG dùng dải chuyển màu tím - xanh kiểu AI template** (`#8B5CF6` → `#3B82F6` gradient).
2. **Tuyệt đối KHÔNG dùng hiệu ứng Glassmorphism mờ mịt** (kính mờ nặng nề che mất nội dung).
3. **Tuyệt đối KHÔNG dùng các hình khối bong bóng (blob) vô nghĩa trôi nổi** ở background.
4. **Không dùng ảnh stock lỗi thời** chụp container/tàu bè mờ nhạt hoặc công nhân kho bắt tay vô hồn. Thay bằng infographic quy trình, bản đồ luồng bay thực tế, bảng cước và dashboard UI mô phỏng.
5. **Tránh "Icon-soup":** Không nhét icon vào trước mọi danh từ; chỉ dùng icon khi nó đóng vai trò nhận diện chức năng hoặc chỉ báo trực quan.
6. **Không hiệu ứng chuyển động vô nghĩa:** Mọi animation chỉ phục vụ giải thích luồng hàng hóa hoặc phản hồi tương tác người dùng.

---

## 3. Tech Stack & Kỹ thuật Triển khai

* **Framework:** React 18 (Vite SPA)
* **UI Components:** **Ant Design (`antd` v5)** + `@ant-design/icons`
* **Styling:** **Scoped Vanilla CSS** + Ant Design Theme Tokens
* **Animation:** CSS Keyframes mượt mà hoặc Framer Motion nhẹ nhàng
* **Đa ngôn ngữ (i18n):** `react-i18next` (100% văn bản giao diện phải có trong `locales/vi` và `locales/en`, không hardcode chuỗi tiếng Việt/Anh trực tiếp trong JSX)

---

## 4. Nguyên tắc Bắt buộc: CSS Isolation (Scoped CSS)

Để tránh hiện tượng **"CSS ăn sang trang khác" (CSS Leaking)**:
1. Mỗi trang / module lớn phải có **một Class bao bọc duy nhất (Root Scope Class)**.
   * Trang Fulfillment: `.fulfillment-scope { ... }`
   * Trang Shipping: `.shipping-scope { ... }`
   * Navbar: `.navbar-scope { ... }`
2. Mọi quy tắc CSS phải được lồng bên trong class scope đó:
   ```css
   /* ĐÚNG */
   .fulfillment-scope .feature-card {
     border-radius: 12px;
     transition: transform 0.25s ease;
   }
   
   /* SAI - CẤM GHI ĐÈ TOÀN CỤC */
   .feature-card { ... }
   body { ... }
   .ant-btn { ... }
   ```
3. Sử dụng biến CSS nội bộ với tiền tố riêng (ví dụ: `--fl-...` cho fulfillment, `--vg-...` cho toàn cục).

---

## 5. Design Tokens Chuẩn dùng chung

```css
:root {
  /* Colors */
  --vg-primary: #1464c4;
  --vg-primary-hover: #0f52a3;
  --vg-accent-sky: #e6f4ff;
  --vg-navy-dark: #0a2540;
  --vg-slate-text: #1e293b;
  --vg-muted: #64748b;
  --vg-border: #e2e8f0;
  --vg-white: #ffffff;
  --vg-surface: #f8fafc;
  --vg-accent-orange: #ff7a45;

  /* Typography */
  --vg-font-sans: 'IBM Plex Sans', 'Be Vietnam Pro', -apple-system, sans-serif;

  /* Radius */
  --vg-radius-sm: 6px;
  --vg-radius-md: 10px;
  --vg-radius-lg: 14px;
  --vg-radius-full: 9999px;

  /* Shadows */
  --vg-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.05);
  --vg-shadow-md: 0 4px 12px rgba(10, 37, 64, 0.06);
  --vg-shadow-lg: 0 8px 24px rgba(10, 37, 64, 0.08);
  --vg-shadow-hover: 0 12px 28px rgba(20, 100, 196, 0.12);
}
```

---

## 6. Quy chuẩn UI/UX cho Từng Module Cốt lõi

### A. Hệ thống Menu & Header (Navbar)
* Cấu trúc menu gọn gàng, chia cấp rõ ràng:
  * **Trang chủ Vận chuyển** (`/` hoặc `/shipping-about-us`)
  * **Xuất Nhập Khẩu & Logistics Trung – Việt** (`/logistics-china-viet`)
  * **Fulfillment POD & Dropshipping** (`/fulfillment`)
  * **Đối tác & Tin tức** (`/partners`)
  * **Liên hệ** (`/shipping-contact-us`)
* Header cố định (sticky), bóng mờ nhẹ (`box-shadow: 0 2px 10px rgba(0,0,0,0.05)`).
* Bộ chuyển đổi ngôn ngữ rõ nét (Cờ VN / Cờ UK) phản ứng ngay lập tức.

### B. Hành lang Vận chuyển Toàn cầu (Global Corridors)
* Luôn thể hiện rõ 4 tuyến xương sống:
  1. **Nội Á & ASEAN** (Việt Nam ↔ Trung Quốc, Thái Lan, Malaysia, Indonesia...)
  2. **Trung – Đông Nam Á** (Chuyên tuyến đường bộ Cross-Border Trucking + Sea LCL/FCL gom kho xưởng)
  3. **Trung – Âu – Mỹ** (Chuyên tuyến bay Air Cargo 5–8 ngày + Biển chuyên tuyến Matson/CMA tới Mỹ & 27 nước EU)
  4. **Trung Đông** (UAE, Saudi Arabia, Qatar, Oman...)
* Thể hiện bằng **Tab chuyển đổi trực quan + Bảng thông tin so sánh chỉ số thời gian (Lead time), hình thức bay/biển, cam kết thông quan**.

### C. Dịch vụ Fulfillment (POD & Dropshipping)
* Luôn làm nổi bật 2 mô hình kinh doanh mũi nhọn:
  * **Print-on-Demand (POD):** Không vốn ôm hàng, in kỹ thuật số DTG/thêu chuẩn xuất khẩu, đóng gói nhận diện riêng (Custom unboxing).
  * **Dropshipping:** Kết nối API/Webhook đa sàn (Shopify, TikTok Shop, Amazon), QC nhà máy nghiêm ngặt, lưu kho gom đơn, giao thẳng 100+ quốc gia.
* Luồng Fulfillment chuẩn 6 bước:
  `Đơn hàng (Order) → Kho/Nhà máy → In/Pick & Pack → QC & Dán nhãn → Vận chuyển quốc tế → Giao tận tay người nhận`.

### D. Form Báo giá & Kêu gọi Hành động (Conversion & CTA)
* **Primary CTA:** "Yêu cầu Báo giá Ngay" / "Request a Quote".
* **Secondary CTA:** "Khám phá Hành lang Vận chuyển" / "Tra cứu Bảng cước".
* Form tinh giản (Tên, Số điện thoại/Email, Tuyến quan tâm, Sản lượng dự kiến) với phản hồi tức thì.

---

## 7. Quy tắc Tương tác & Micro-interactions
* **Hover Card:** Dịch chuyển nhẹ lên trên `transform: translateY(-4px)`, bóng đổ chuyển sang ánh xanh nhẹ (`--vg-shadow-hover`).
* **Tab Switch:** Khối nội dung mới xuất hiện với hiệu ứng mượt mà (`opacity: 0 -> 1`, `scale: 0.98 -> 1`, thời gian `0.25s ease-out`).
* **Mobile First:** Mọi grid đều phải co giãn mượt mà:
  * Desktop (`≥ 992px`): 3-4 cột
  * Tablet (`768px – 991px`): 2 cột
  * Mobile (`< 768px`): 1 cột, chạm vuốt dễ dàng, font size tối thiểu 14px cho văn bản đọc.

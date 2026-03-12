import { useState } from "react";
import PageHeader from "../../components/ServiceDetail/PageHeader";
import PageBreadcrumb from "../../components/ServiceDetail/PageBreadcrumb";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700&family=Barlow+Condensed:wght@600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .contact-section {
    background: #f8f9fb;
    min-height: 100vh;
    padding: 72px 48px;
    font-family: 'Barlow', sans-serif;
  }

  .contact-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 320px;
    gap: 48px;
    align-items: start;
  }

  /* LEFT FORM */
  .form-col {}

  .form-eyebrow {
    display: inline-block;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #1b6fd8;
    background: rgba(27, 111, 216, 0.08);
    border: 1px solid rgba(27, 111, 216, 0.18);
    padding: 5px 14px;
    border-radius: 2px;
    margin-bottom: 16px;
  }

  .form-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 40px;
    font-weight: 800;
    color: #0d1b2e;
    text-transform: uppercase;
    letter-spacing: -0.01em;
    line-height: 1.05;
    margin-bottom: 10px;
  }

  .form-title span { color: #1b6fd8; }

  .form-subtitle {
    font-size: 14px;
    color: #7a8799;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 520px;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 14px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .form-group.full { grid-column: 1 / -1; }

  .form-group label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #8a96a6;
  }

  .form-group input,
  .form-group textarea {
    background: #ffffff;
    border: 1px solid #dde3ec;
    border-radius: 5px;
    padding: 13px 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    color: #0d1b2e;
    outline: none;
    transition: border-color 0.18s, box-shadow 0.18s;
    width: 100%;
    resize: none;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder {
    color: #b0bac8;
  }

  .form-group input:focus,
  .form-group textarea:focus {
    border-color: #1b6fd8;
    box-shadow: 0 0 0 3px rgba(27, 111, 216, 0.1);
  }

  .form-group textarea {
    height: 160px;
    line-height: 1.6;
  }

  .submit-btn {
    margin-top: 20px;
    background: linear-gradient(135deg, #1b6fd8, #1558b0);
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 14px 36px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 16px rgba(27, 111, 216, 0.3);
  }

  .submit-btn:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 22px rgba(27, 111, 216, 0.4);
  }

  .submit-btn:active { transform: translateY(0); }

  .submit-btn svg { width: 16px; height: 16px; }

  /* SUCCESS */
  .success-msg {
    margin-top: 16px;
    padding: 12px 18px;
    background: #edfaf3;
    border: 1px solid #a3e6c3;
    border-radius: 5px;
    color: #1a7a4a;
    font-size: 13px;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  /* RIGHT INFO CARD */
  .info-card {
    background: #ffffff;
    border: 1px solid #dde3ec;
    border-radius: 8px;
    padding: 32px 28px;
    position: sticky;
    top: 32px;
    box-shadow: 0 4px 24px rgba(13, 27, 46, 0.06);
  }

  .info-card-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #0d1b2e;
    margin-bottom: 20px;
    padding-bottom: 14px;
    border-bottom: 2px solid #1b6fd8;
  }

  .company-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 17px;
    font-weight: 700;
    color: #1b6fd8;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin-bottom: 18px;
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 13px;
  }

  .info-item {
    display: flex;
    gap: 10px;
    align-items: flex-start;
  }

  .info-icon {
    width: 32px;
    height: 32px;
    background: rgba(27, 111, 216, 0.08);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  }

  .info-icon svg {
    width: 15px;
    height: 15px;
    color: #1b6fd8;
  }

  .info-content {}

  .info-label {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #8a96a6;
    margin-bottom: 2px;
  }

  .info-value {
    font-size: 13px;
    color: #2d3a4a;
    line-height: 1.5;
  }

  .info-value a {
    color: #1b6fd8;
    text-decoration: none;
    font-weight: 600;
  }

  .info-value a:hover { text-decoration: underline; }

  .info-note {
    font-size: 11px;
    color: #9aa5b4;
    margin-top: 2px;
  }

  .divider-line {
    height: 1px;
    background: #eaecf2;
    margin: 18px 0;
  }

  @media (max-width: 860px) {
    .contact-inner { grid-template-columns: 1fr; }
    .info-card { position: static; }
    .contact-section { padding: 40px 20px; }
  }

  @media (max-width: 540px) {
    .form-row { grid-template-columns: 1fr; }
    .form-title { font-size: 30px; }
  }
`;

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = () => {
    if (!form.firstName || !form.email) return;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };
  const current = { title: "Liên hệ" };

  const breadcrumbs = [
    { label: "VietGlobal", href: "/" },
    { label: "Liên hệ", href: "#" },
  ];
  return (
    <>
      <style>{styles}</style>
      <PageHeader title={current.title} />

      <PageBreadcrumb items={breadcrumbs} />
      <section className="contact-section">
        <div className="contact-inner">
          {/* LEFT */}
          <div className="form-col">
            <div className="form-eyebrow">Liên hệ với chúng tôi</div>
            <h2 className="form-title">
              Gửi email, <span>hoặc gọi ngay</span>
            </h2>
            <p className="form-subtitle">
              Chúng tôi luôn sẵn sàng tiếp nhận mọi yêu cầu của bạn và cam kết
              phản hồi trong thời gian sớm nhất.
            </p>

            <div className="form-row">
              <div className="form-group">
                <label>Họ</label>
                <input
                  name="firstName"
                  placeholder="Nguyen"
                  value={form.firstName}
                  onChange={handle}
                />
              </div>
              <div className="form-group">
                <label>Tên</label>
                <input
                  name="lastName"
                  placeholder="Van A"
                  value={form.lastName}
                  onChange={handle}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="email@company.com"
                  value={form.email}
                  onChange={handle}
                />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input
                  name="phone"
                  placeholder="+84 xxx xxx xxx"
                  value={form.phone}
                  onChange={handle}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full">
                <label>Tiêu đề</label>
                <input
                  name="subject"
                  placeholder="Nội dung chủ đề..."
                  value={form.subject}
                  onChange={handle}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full">
                <label>Tin nhắn</label>
                <textarea
                  name="message"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                  value={form.message}
                  onChange={handle}
                />
              </div>
            </div>

            <button className="submit-btn" onClick={submit}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              Gửi tin nhắn
            </button>

            {sent && (
              <div className="success-msg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Tin nhắn đã được gửi thành công! Chúng tôi sẽ liên hệ lại sớm.
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div className="info-card">
            <div className="info-card-title">Thông tin liên hệ</div>
            <div className="company-name">VietGlobal Company Limited</div>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">Địa chỉ</div>
                  <div className="info-value">
                    2B Vương Thừa Vũ
                    <br />
                    Thanh Xuân, Hà Nội, Việt Nam
                  </div>
                </div>
              </div>

              <div className="divider-line" />

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">Điện thoại</div>
                  <div className="info-value">Phone: +84 (0) 246779622</div>
                  <div className="info-value">
                    {/* H/P: <a href="tel:+84907844843">+84 246779622</a> — */}
                    VietGlobal
                  </div>
                  <div className="info-note">Zalo · WhatsApp · Viber</div>
                </div>
              </div>

              <div className="divider-line" />

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    <a href="mailto: Vietglobal8@gmail.com">
                      Vietglobal8@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="divider-line" />

              <div className="info-item">
                <div className="info-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">Website</div>
                  <div className="info-value">
                    <a
                      href="https://www.vietglobal.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      www.vietglobal.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from "react";
import PageHeader from "../../components/ServiceDetail/PageHeader";
import PageBreadcrumb from "../../components/ServiceDetail/PageBreadcrumb";
import { useTranslation } from "react-i18next";
import { sendContactForm } from "../../stores/Mailer/MailerAction";
import { useDispatch, useSelector } from 'react-redux'

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
  const dispatch = useDispatch();
  const { t } = useTranslation();
  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const loading = useSelector((state) => state.mailer.loading);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async () => {
    // Validation cơ bản trước khi gửi
    if (!form.firstName || !form.email || !form.message) {
      return;
    }

    const payload = {
      ho: form.lastName,
      ten: form.firstName,
      email: form.email,
      so_dien_thoai: form.phone,
      tieu_de: form.subject,
      tin_nhan: form.message
    };

    // Gửi dispatch và đợi kết quả (nếu thunk trả về promise)
    try {
      await dispatch(sendContactForm(payload));
      
      // Hiển thị trạng thái thành công
      setSent(true);

      // Reset form về trạng thái ban đầu
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });

      // Ẩn thông báo thành công sau 4 giây
      setTimeout(() => setSent(false), 4000);
    } catch (error) {
      console.error("Failed to send contact form:", error);
    }
  };

  const current = { title: t("contact.title") };

  const breadcrumbs = [
    { label: "VietGlobal", href: "/" },
    { label: t("contact.title"), href: "#" },
  ];

  return (
    <>
      <style>{styles}</style>
      <PageHeader title={current.title} />
      <PageBreadcrumb items={breadcrumbs} />

      <section className="contact-section">
        <div className="contact-inner">
          {/* LEFT - FORM */}
          <div className="form-col">
            <div className="form-eyebrow">{t("contactShip.badge")}</div>
            <h2 className="form-title">
              {t("contactShip.titleSendMail")}, <span>{t("contactShip.titleCall")}</span>
            </h2>
            <p className="form-subtitle">
              {t("contactShip.description")}
            </p>

            <div className="form-row">
              <div className="form-group">
                <label>{t("contactShip.form.firstName")}</label>
                <input
                  name="firstName"
                  placeholder="Nguyen"
                  value={form.firstName}
                  onChange={handle}
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>{t("contactShip.form.lastName")}</label>
                <input
                  name="lastName"
                  placeholder="Van A"
                  value={form.lastName}
                  onChange={handle}
                  disabled={loading}
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
                  disabled={loading}
                />
              </div>
              <div className="form-group">
                <label>{t("contactShip.form.phone")}</label>
                <input
                  name="phone"
                  placeholder="+84 xxx xxx xxx"
                  value={form.phone}
                  onChange={handle}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full">
                <label>{t("contactShip.form.subject")}</label>
                <input
                  name="subject"
                  placeholder={t("contactShip.form.placeholderSubject")}
                  value={form.subject}
                  onChange={handle}
                  disabled={loading}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full">
                <label>{t("contactShip.form.message")}</label>
                <textarea
                  name="message"
                  placeholder={t("contactShip.form.placeholderMessage")}
                  value={form.message}
                  onChange={handle}
                  disabled={loading}
                />
              </div>
            </div>

            <button 
              className="submit-btn" 
              onClick={submit} 
              disabled={loading || !form.firstName || !form.email || !form.message}
            >
              {loading ? (
                <svg className="spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.2)" />
                  <path d="M12 2a10 10 0 0 1 10 10" stroke="white" strokeLinecap="round" />
                </svg>
              ) : (
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
              )}
              {loading ? t("contactShip.sending") || "Sending..." : t("contactShip.sendButton")}
            </button>

            {sent && (
              <div className="success-msg">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{t("contactShip.sendMessage")}</span>
              </div>
            )}
          </div>

          {/* RIGHT - INFO CARD */}
          <div className="info-card">
            <div className="info-card-title">{t("contactInfo.title")}</div>
            <div className="company-name">VietGlobal Company Limited</div>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">{t("contactInfo.addressTitle")}</div>
                  <div className="info-value">{t("contactInfo.address")}</div>
                </div>
              </div>

              <div className="divider-line" />

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6 6l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">{t("contactInfo.phoneTitle")}</div>
                  <div className="info-value">Phone: (+84) 0346779622</div>
                  <div className="info-value">WhatsApp: (+84) 0763205365</div>
                  <div className="info-note">Zalo · WhatsApp</div>
                </div>
              </div>

              <div className="divider-line" />

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">Email</div>
                  <div className="info-value">
                    <a href="mailto:Vietglobal8@gmail.com">Vietglobal8@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="divider-line" />

              <div className="info-item">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="info-content">
                  <div className="info-label">Website</div>
                  <div className="info-value">
                    <a href="https://www.vietgloballogistic.com" target="_blank" rel="noreferrer">
                      www.vietgloballogistic.com
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

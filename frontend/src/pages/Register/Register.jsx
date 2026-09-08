import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Register.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
  SafetyCertificateFilled,
  GlobalOutlined,
  ThunderboltFilled,
} from "@ant-design/icons";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!username || !identifier || !password) {
      toast.warning("Vui lòng điền đầy đủ tất cả thông tin!");
      return;
    }

    if (password.length < 6) {
      toast.warning("Mật khẩu cần tối thiểu 6 ký tự!");
      return;
    }

    if (!agreeTerms) {
      toast.warning("Vui lòng đồng ý với Điều khoản dịch vụ để tiếp tục!");
      return;
    }

    setLoading(true);

    try {
      const values = { username, identifier, password };
      // Mô phỏng đăng ký thành công
      await new Promise((resolve) => setTimeout(resolve, 800));
      toast.success("Đăng ký tài khoản VietGlobal thành công!");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      toast.error("Đăng ký thất bại, vui lòng kiểm tra lại thông tin.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="reg-page-wrapper">
      {/* Left Column: Side Banner */}
      <div className="reg-side-banner">
        <motion.div
          className="reg-brand-top"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="reg-brand-badge">
            <SafetyCertificateFilled style={{ color: "#38BDF8" }} />
            VietGlobal Cloud Network
          </span>
        </motion.div>

        <motion.div
          className="banner-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h2>
            Giải pháp Logistics <br />
            <span>Toàn Diện & Chuẩn Xác</span>
          </h2>
          <p>
            Đăng ký tài khoản doanh nghiệp ngay hôm nay để quản lý chuỗi cung ứng,
            tra cứu cước phí tự động và nhận hỗ trợ chuyên gia 24/7.
          </p>

          <div className="banner-features">
            <div className="feature-item">
              <div className="feature-icon-box">
                <GlobalOutlined />
              </div>
              <span>Mạng lưới vận chuyển đa phương thức toàn cầu</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">
                <ThunderboltFilled />
              </div>
              <span>Tra cứu lịch trình và thông quan siêu tốc</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon-box">
                <CheckCircleFilled />
              </div>
              <span>Bảo hiểm hàng hóa toàn diện & minh bạch</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="reg-telemetry-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="reg-stat-item">
            <span className="reg-stat-value">1,500+</span>
            <span className="reg-stat-label">Khách Hàng B2B</span>
          </div>
          <div className="reg-stat-divider" />
          <div className="reg-stat-item">
            <span className="reg-stat-value">100%</span>
            <span className="reg-stat-label">Bảo Hiểm Hàng Hóa</span>
          </div>
          <div className="reg-stat-divider" />
          <div className="reg-stat-item">
            <span className="reg-stat-value">Top 1</span>
            <span className="reg-stat-label">Uy Tín Logistics</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Register Form */}
      <div className="reg-form-container">
        <Link to="/" className="reg-back-btn">
          <ArrowLeftOutlined />
          Về trang chủ
        </Link>

        <motion.div
          className="reg-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="reg-logo-area">
            <img src={logo} alt="VietGlobal Logistics" />
          </div>

          <div className="reg-header">
            <h1>Tạo Tài Khoản</h1>
            <p>Khởi tạo tài khoản thành viên để bắt đầu vận hành</p>
          </div>

          <form onSubmit={handleSignup} className="reg-form">
            {/* Username */}
            <div className="reg-field-group">
              <label htmlFor="reg-username">Tên người dùng</label>
              <div className="reg-input-wrapper">
                <UserOutlined className="reg-leading-icon" />
                <input
                  id="reg-username"
                  type="text"
                  placeholder="Ví dụ: logistics_user"
                  className="reg-input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            {/* Email / Identifier */}
            <div className="reg-field-group">
              <label htmlFor="reg-identifier">Email hoặc Số điện thoại</label>
              <div className="reg-input-wrapper">
                <MailOutlined className="reg-leading-icon" />
                <input
                  id="reg-identifier"
                  type="text"
                  placeholder="name@company.com"
                  className="reg-input"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="reg-field-group">
              <label htmlFor="reg-password">Mật khẩu</label>
              <div className="reg-input-wrapper">
                <LockOutlined className="reg-leading-icon" />
                <input
                  id="reg-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Tối thiểu 6 ký tự"
                  className="reg-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                  required
                />
                <button
                  type="button"
                  className="reg-eye-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </button>
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="reg-terms">
              <label
                style={{
                  display: "inline-flex",
                  alignItems: "flex-start",
                  gap: 8,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  style={{
                    marginTop: 3,
                    accentColor: "var(--primary-blue)",
                    cursor: "pointer",
                  }}
                />
                <span>
                  Bằng cách đăng ký, bạn đồng ý với{" "}
                  <Link to="/policy">Điều khoản & Chính sách</Link> của VietGlobal.
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="reg-btn-submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {loading ? "Đang tạo tài khoản..." : "Đăng ký ngay"}
              {!loading && <ArrowRightOutlined />}
            </motion.button>
          </form>

          <div className="reg-footer">
            Đã có tài khoản?
            <Link to="/login">Đăng nhập tại đây</Link>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Register;

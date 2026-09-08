import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useDispatch } from "react-redux";
import logo from "../../assets/logo.png";
import { login } from "../../stores/Users/userApis";
import { motion } from "framer-motion";
import {
  MailOutlined,
  LockOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
  ArrowRightOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
  SafetyCertificateFilled,
  CompassFilled,
} from "@ant-design/icons";

const Login = ({ setIsAdmin }) => {
  const [email, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.warning("Vui lòng nhập đầy đủ Email và Mật khẩu!");
      return;
    }

    setLoading(true);
    const values = { email, password };
    try {
      await dispatch(login(values));
      toast.success("Chào mừng bạn quay trở lại!");
      const storedUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(storedUser);

      if (parsedUser?.isAdmin || parsedUser?.role === "admin") {
        if (typeof setIsAdmin === "function") setIsAdmin(true);
        setTimeout(() => navigate("/admin"), 150);
      } else {
        if (typeof setIsAdmin === "function") setIsAdmin(false);
        navigate("/");
      }
    } catch (error) {
      toast.error("Email hoặc mật khẩu không chính xác!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrapper">
      {/* Left Column: Visual Showcase Banner */}
      <div className="login-side-image">
        <motion.div
          className="side-brand-top"
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="side-brand-badge">
            <SafetyCertificateFilled style={{ color: "#38BDF8" }} />
            Enterprise Logistics Platform
          </span>
        </motion.div>

        <motion.div
          className="side-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h1>
            Kết nối & Vận hành <br />
            <span>Logistics Quốc Tế</span>
          </h1>
          <p>
            Hệ thống quản lý thông minh giúp theo dõi hải trình theo thời gian thực,
            tự động hóa thủ tục thông quan và tối ưu chi phí vận chuyển toàn cầu.
          </p>

          <div className="side-feature-deck">
            <div className="side-feature-pill">
              <div className="side-feature-icon">
                <CompassFilled />
              </div>
              <span>Định vị hải trình & theo dõi vận đơn thời gian thực</span>
            </div>
            <div className="side-feature-pill">
              <div className="side-feature-icon">
                <CheckCircleFilled />
              </div>
              <span>Cam kết bảo hiểm hàng hóa & tỷ lệ đúng hạn 99.8%</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="side-telemetry-badge"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="side-stat-item">
            <span className="side-stat-value">50,000+</span>
            <span className="side-stat-label">TEUs Vận Chuyển</span>
          </div>
          <div className="side-stat-divider" />
          <div className="side-stat-item">
            <span className="side-stat-value">99.8%</span>
            <span className="side-stat-label">Đúng Tiến Độ SLA</span>
          </div>
          <div className="side-stat-divider" />
          <div className="side-stat-item">
            <span className="side-stat-value">24/7</span>
            <span className="side-stat-label">Hỗ Trợ Toàn Cầu</span>
          </div>
        </motion.div>
      </div>

      {/* Right Column: Login Form */}
      <div className="login-side-form">
        <Link to="/" className="back-to-portal">
          <ArrowLeftOutlined />
          Về trang chủ
        </Link>

        <motion.div
          className="login-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          <div className="brand-logo">
            <img src={logo} alt="VietGlobal Logistics" />
          </div>

          <div className="login-header">
            <h2>Đăng Nhập</h2>
            <p>Nhập thông tin tài khoản của bạn để truy cập hệ thống</p>
          </div>

          <form onSubmit={handleLogin} className="form-wrapper">
            {/* Email / Username Input */}
            <div className="modern-form-group">
              <label htmlFor="login-email">Email hoặc Số điện thoại</label>
              <div className="input-container">
                <MailOutlined className="input-leading-icon" />
                <input
                  id="login-email"
                  type="text"
                  placeholder="name@company.com"
                  className="modern-input"
                  value={email}
                  onChange={(e) => setIdentifier(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="modern-form-group">
              <label htmlFor="login-password">Mật khẩu</label>
              <div className="input-container">
                <LockOutlined className="input-leading-icon" />
                <input
                  id="login-password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="modern-input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                  aria-label={showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                >
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </button>
              </div>
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Ghi nhớ đăng nhập
              </label>
              <Link to="/forgot-password">Quên mật khẩu?</Link>
            </div>

            <motion.button
              type="submit"
              className="btn-primary-blue"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              {loading ? "Đang xác thực..." : "Đăng nhập ngay"}
              {!loading && <ArrowRightOutlined />}
            </motion.button>
          </form>

          <div className="footer-link">
            Chưa có tài khoản?
            <Link to="/signup">Đăng ký tài khoản mới</Link>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Login;

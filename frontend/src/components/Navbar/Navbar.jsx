import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Select, Spin } from 'antd'
const { Option } = Select
import logo from '../../assets/logo.png'
import { useTranslation } from 'react-i18next'
import vietnamFlag from '../../assets/Flag_of_Vietnam.svg'
import ukFlag from '../../assets/Flag_of_the_United_Kingdom.png'
import { getAllCategory } from '../../stores/Category/categoryApis'

const Navbar = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'))
  const isLoggedIn = storedUser && storedUser.token
  const categoryList = useSelector((state) => state.category.categoryList || [])
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (storedUser?.isAdmin === true) {
      setIsAdmin(true)
    } else {
      setIsAdmin(false)
    }
  }, [storedUser])

  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch])

  useEffect(() => {
    if (Array.isArray(categoryList)) {
      setLoading(false)
    }
  }, [categoryList])

  const handleLogout = () => {
    localStorage.removeItem('user')
    navigate('/')
  }

  const [isOpen, setIsOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState(i18n.language || 'vi')

  const languages = [
    {
      code: 'vi',
      flag: vietnamFlag,
      name: 'Tiếng Việt',
      alt: 'Vietnam Flag'
    },
    {
      code: 'en',
      flag: ukFlag,
      name: 'English',
      alt: 'UK Flag'
    }
  ]

  const currentLanguage = languages.find((lang) => lang.code === currentLang)

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode)
    setCurrentLang(langCode)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-dropdown')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  if (loading == false) {
    ;<div className="loading-container">
      <Spin size="large" />
    </div>
  }

  return (
    <header className="navbar-header">
      <Link className="logo-container-nav" to="/">
        <img className="logo-web-my" src={logo} alt="" />
        <h1 className="logo-text">VietGlobal</h1>
      </Link>

      <nav>
        <ul className="nav-items">
          <li>
            <Link className="nav-item" to="/">
              {t('home')}
            </Link>
          </li>
          <li className="nav-item dropdown-container">
            <Link className="nav-item dropdown-trigger">{t('category')}</Link>

            <ul className="dropdown-menu-category">
              {categoryList.map((cat) => (
                <li key={cat._id}>
                  <Link
                    className="dropdown-link"
                    to={`/category/${cat.slug[i18n.language] || cat.slug.vi}`}
                  >
                    {cat.name[i18n.language] || cat.name.vi}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link className="nav-item" to="/all-product">
              {t('products')}
            </Link>
          </li>
          <li>
            <Link className="nav-item" to="/about-us">
              {t('aboutUs')}
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link className="nav-item" to="/admin">
                {t('admin')}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      <div></div>
      {isLoggedIn ? (
        <div>
          <p className="nav-signed-name">{storedUser.username}</p>
          <Link to="/profile" className="customer-profile-btn">
            <UserOutlined style={{ fontSize: '20px', color: '#fff' }} />
          </Link>
          <LogoutOutlined
            onClick={handleLogout}
            style={{
              fontSize: '20px',
              color: '#fff',
              paddingLeft: '10px',
              cursor: 'pointer'
            }}
          />
        </div>
      ) : (
        <div className="location-and-sign">
          <div>
            <Link to="/signup">
              <button className="btn-auth btn-signup">{t('signup')}</button>
            </Link>
            <Link to="/login">
              <button className="btn-auth btn-login">{t('signin')}</button>
            </Link>
          </div>

          <div className="language-switcher">
            <div
              className="language-dropdown"
              style={{ position: 'relative', display: 'inline-block' }}
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="dropdown-toggle"
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '8px 12px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  transition: 'background-color 0.2s'
                }}
              >
                <img
                  src={currentLanguage?.flag}
                  alt={currentLanguage?.alt}
                  style={{
                    width: '24px',
                    height: '16px',
                    objectFit: 'cover',
                    borderRadius: '2px'
                  }}
                />
                <span
                  style={{
                    fontSize: '12px',
                    color: '#fff',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s'
                  }}
                >
                  ▼
                </span>
              </button>

              {isOpen && (
                <div
                  className="dropdown-menu"
                  style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    color: '#000',
                    backgroundColor: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 1000,
                    minWidth: '150px',
                    overflow: 'hidden'
                  }}
                >
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="dropdown-item"
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: 'none',
                        background:
                          currentLang === lang.code ? '#f0f0f0' : 'white',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontSize: '14px',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (currentLang !== lang.code) {
                          e.target.style.backgroundColor = '#f8f8f8'
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentLang !== lang.code) {
                          e.target.style.backgroundColor = 'white'
                        }
                      }}
                    >
                      <img
                        src={lang.flag}
                        alt={lang.alt}
                        style={{
                          width: '20px',
                          height: '14px',
                          objectFit: 'cover',
                          borderRadius: '2px'
                        }}
                      />
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

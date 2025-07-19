import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useDispatch } from 'react-redux'
import './Register.css'
import TextInput from '../../components/Icons/TextInput'
import PasswordInput from '../../components/Icons/PasswordInput'
import logo from '../../assets/logo.png'

const Register = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [username, setUsername] = useState('')
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSignup = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const values = {
        username,
        identifier,
        password
      }
      // const response = await dispatch(register(values))
      const response = ''
      if (response) {
        navigate('/login')
      } else {
        alert('Registration failed. Please try again.')
      }
    } catch (error) {
      console.error('Error registering:', error)
      setError('Failed to register. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="res-signup-container">
      <img
        src="https://getflycrm.com/wp-content/uploads/2023/10/han-che-cua-thuong-mai-dien-tu-1.webp"
        // autoPlay
        // loop
        // muted
        className="background-video"
      />
      <div className="res-overlay" />

      <div className="res-signup-box">
        <div className="res-signup-content">
          <div className="res-logo-container">
            <img src={logo} alt="Logo" className="res-logo" />
          </div>
          <h2 className="res-signup-title">Sign up to buy Corner Seat</h2>

          {/* <div className="res-social-buttons">
            <button className="res-social-button res-google">
              Sign up with
              <Icon icon="logos:google-icon" className="res-icon" width={32} />
            </button>
            <button className="res-social-button res-facebook">
              Sign up with
              <Icon icon="logos:facebook" className="res-icon" width={34} />
            </button>
          </div> */}

          {/* <div className="res-separator">
            <hr />
            <span>or</span>
            <hr />
          </div> */}

          <form onSubmit={handleSignup} className="res-signup-form">
            <TextInput
              label="Username"
              placeholder="Enter a Username"
              className="res-input-padding"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <TextInput
              label="Emain or Phone Number"
              placeholder="name@domain.com"
              className="res-input-padding"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
            />

            <PasswordInput
              label="Create a Password"
              placeholder="Should be at least 6 characters"
              className="res-input-padding"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="res-signup-button"
              disabled={loading}
            >
              {loading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        <div className="res-bottom-box">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="res-login-link">
              Log In Instead
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register

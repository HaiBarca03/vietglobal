import { message } from 'antd'
import axios from '../Axioscustom'
import {
  createSuccess,
  deleteSuccess,
  doneSuccess,
  getError,
  getFailed,
  getRequest,
  getSearch,
  getSuccess,
  postDone,
  getProfile,
  updateSuccess
} from './userSlice'
import { getAuthConfig } from '../authConfig'

const register = (data) => async (dispatch) => {
  dispatch(getRequest())

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const result = await axios.post('/auth/register', data, config)
    if (
      result.data.message &&
      result.data.message !== 'Verification code sent to email'
    ) {
      dispatch(getFailed(result.data.message))
      message.error(result.data.message)
      throw new Error(result.data.message)
    }

    dispatch(postDone())
    dispatch(getSuccess(result.data)) // hoặc dispatch action phù hợp với bạn

    message.success(
      result.data.message || 'Verification code sent to your email'
    )

    return result.data // để component xử lý tiếp
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || 'Register failed. Please try again.'
    dispatch(getFailed(errorMessage))
    message.error(errorMessage)
    console.error('Register error:', errorMessage)
    throw error
  }
}

const login = (data) => async (dispatch) => {
  dispatch(getRequest())

  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const response = await axios.post('/user/login', data, config)
    const resData = response.data

    // Kiểm tra token
    if (!resData?.token) {
      const message = 'Đăng nhập không thành công. Token không tồn tại.'
      dispatch(getFailed(message))
      throw new Error(message)
    }
    console.log('resData', resData)
    // Format lại dữ liệu user lưu vào localStorage
    const userData = {
      // id: resData.id,
      // username: resData.username,
      // email: resData.email,
      // phone: resData.phone,
      // role: resData.role,
      // token: resData.token,
      // isAdmin: resData.role === 'admin'
    }

    // Lưu vào localStorage
    localStorage.setItem('user', JSON.stringify(userData))
    localStorage.setItem('token', resData.token)

    dispatch(postDone())
    dispatch(doneSuccess(userData))
  } catch (error) {
    const errorMessage =
      error.response?.data?.message ||
      error.message ||
      'Đã xảy ra lỗi. Vui lòng thử lại.'
    dispatch(getError(errorMessage))
    console.error('Login error:', errorMessage)
    throw error
  }
}

export { register, login }

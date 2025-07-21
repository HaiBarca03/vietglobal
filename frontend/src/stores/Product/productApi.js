import { message } from 'antd'
import axios from '../Axioscustom'
import {
  createSuccess,
  deleteSuccess,
  doneSuccess,
  getError,
  getFailed,
  getRequest,
  getProductSuccess,
  postDone,
  updateSuccess,
  doneSuccessProdCate
} from './productSlice'
import { getAuthConfig } from '../authConfig'

const getAllProduct = () => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.get(`/product`, config)
    if (res.data.message != 'Fetched all products successfully') {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(getProductSuccess(res.data.products))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

const getProductDetail = (lang, slug) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.get(`/product/${lang}/${slug}`, config)
    dispatch(doneSuccess(res.data.product))
  } catch (error) {
    dispatch(getError(error.message))
  }
}

const getProductByCategory = (lang, slug) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.get(`/product/category/${lang}/${slug}`, config)
    dispatch(doneSuccessProdCate(res.data))
  } catch (error) {
    dispatch(getError(error.message))
  }
}

const getProductById = (id) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.get(`/product/${id}`, config)
    dispatch(doneSuccess(res.data.product))
  } catch (error) {
    dispatch(getError(error.message))
  }
}

const updateProductId = (id, data) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.put(`/product/${id}`, data, config)
    if (res.data) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(updateSuccess(res.data))
    }
  } catch (error) {
    console.error('❌ Lỗi update sản phẩm:', error)

    if (error.response) {
      console.error('🔍 Lỗi từ server:', error.response.data)
      dispatch(getError(error.response.data.message || 'Lỗi server'))
    } else {
      dispatch(getError(error.message))
    }
  }
}

const createProduct = (data) => async (dispatch) => {
  dispatch(getRequest())
  const token = localStorage.getItem('token')
  try {
    const res = await axios.post('/product', data, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data'
      }
    })
    if (res.data) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(createProduct(res.data))
    }
  } catch (error) {
    console.error('❌ Lỗi update sản phẩm:', error)

    if (error.response) {
      console.error('🔍 Lỗi từ server:', error.response.data)
      dispatch(getError(error.response.data.message || 'Lỗi server'))
    } else {
      dispatch(getError(error.message))
    }
  }
}

const deleteProduct = (id) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.delete(`/product/${id}`, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(deleteSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

export {
  getAllProduct,
  getProductDetail,
  getProductByCategory,
  getProductById,
  updateProductId,
  createProduct,
  deleteProduct
}

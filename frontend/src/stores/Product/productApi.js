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
  updateSuccess
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

const getProductByCategory = (lang, category) => async (dispatch) => {}

export { getAllProduct, getProductDetail, getProductByCategory }

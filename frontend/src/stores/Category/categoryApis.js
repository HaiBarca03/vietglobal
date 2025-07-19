import { message } from 'antd'
import axios from '../Axioscustom'
import {
  createSuccess,
  deleteSuccess,
  doneSuccess,
  getError,
  getFailed,
  getRequest,
  getCategorySuccess,
  postDone,
  updateSuccess
} from './categorySlice'
import { getAuthConfig } from '../authConfig'

const getAllCategory = () => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.get(`/category`, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(getCategorySuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

export { getAllCategory }

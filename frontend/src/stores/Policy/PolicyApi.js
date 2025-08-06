import { message } from 'antd'
import axios from '../Axioscustom'
import {
  createSuccess,
  deleteSuccess,
  doneSuccess,
  getError,
  getFailed,
  getRequest,
  postDone,
  updateSuccess,
  getContactSuccess
} from './PolicySlice'
import { getAuthConfig } from '../authConfig'

const getAllPolicy = () => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.get('/policy', config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(getContactSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

const updatePolicy = (id, data) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.put(`/policy/${id}`, data, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(updateSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

export { getAllPolicy, updatePolicy }

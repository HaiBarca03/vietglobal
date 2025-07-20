import { message } from 'antd'
import axios from '../Axioscustom'
import {
  createSuccess,
  deleteSuccess,
  doneSuccess,
  getError,
  getFailed,
  getRequest,
  getContactUsSuccess,
  postDone,
  updateSuccess
} from './ContactUsSlice'
import { getAuthConfig } from '../authConfig'

const getAllContactUs = () => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const id = '687cc272d6ed9e5825699f7b'
    const res = await axios.get(`/contact-us/${id}`, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(doneSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

const updateContactUs = (id, data) => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const res = await axios.put(`/contact-us/${id}`, data, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(updateSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

export { getAllContactUs, updateContactUs }

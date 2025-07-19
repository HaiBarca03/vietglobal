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
    const id = '687b70f25b1f4b14be58b7ad'
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

export { getAllContactUs }

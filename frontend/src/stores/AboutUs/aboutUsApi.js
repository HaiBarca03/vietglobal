import { message } from 'antd'
import axios from '../Axioscustom'
import {
  createSuccess,
  deleteSuccess,
  doneSuccess,
  getError,
  getFailed,
  getRequest,
  getAboutUsSuccess,
  postDone,
  updateSuccess
} from './aboutUsSlice'
import { getAuthConfig } from '../authConfig'

const getAboutUsId = () => async (dispatch) => {
  dispatch(getRequest())
  try {
    const config = getAuthConfig()
    const id = '687cc242d6ed9e5825699f79'
    const res = await axios.get(`/about-us/${id}`, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      dispatch(doneSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

export { getAboutUsId }

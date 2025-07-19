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
    const id = '687b6b4587d30718f65d04d4'
    const res = await axios.get(`/about-us/${id}`, config)
    if (res.data.message) {
      dispatch(getFailed(res.data.message))
    } else {
      console.log('res.data', res.data)
      dispatch(doneSuccess(res.data))
    }
  } catch (error) {
    dispatch(getError(error.message))
  }
}

export { getAboutUsId }

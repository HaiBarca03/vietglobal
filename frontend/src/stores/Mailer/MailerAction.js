import axios from '../Axioscustom'
import { message } from 'antd'
import {
  sendContactRequest,
  sendContactSuccess,
  sendContactFailed,
  sendContactError
} from './MailerSlice'

const sendContactForm = (data) => async (dispatch) => {
  dispatch(sendContactRequest())

  try {
    const res = await axios.post('/mailer/send-contact', data)

    if (res.data.success) {
      dispatch(sendContactSuccess(res.data))
      message.success(res.data.message)
    } else {
      dispatch(sendContactFailed(res.data.message))
      message.error(res.data.message)
    }
  } catch (error) {
    dispatch(sendContactError(error.message))
    message.error('Gửi tin nhắn thất bại!')
  }
}

export { sendContactForm }
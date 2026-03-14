import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  error: null,
  response: null
}

const mailerSlice = createSlice({
  name: 'mailer',
  initialState,
  reducers: {
    sendContactRequest: (state) => {
      state.loading = true
    },

    sendContactSuccess: (state, action) => {
      state.loading = false
      state.error = null
      state.response = action.payload.message
    },

    sendContactFailed: (state, action) => {
      state.loading = false
      state.response = action.payload
    },

    sendContactError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {
  sendContactRequest,
  sendContactSuccess,
  sendContactFailed,
  sendContactError
} = mailerSlice.actions

export const mailerReducer = mailerSlice.reducer
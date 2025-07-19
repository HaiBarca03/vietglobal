import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contactUsList: [],
  contactUsDetails: [],
  loading: false,
  error: null,
  response: null
}

const contactUsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true
    },
    doneSuccess: (state, action) => {
      state.contactUsDetails = action.payload
      state.loading = false
      state.error = null
      state.response = null
    },
    getContactUsSuccess: (state, action) => {
      state.contactUsList = action.payload
      state.loading = false
      state.error = null
      state.response = null
    },
    getFailed: (state, action) => {
      state.response = action.payload
      state.loading = false
      state.error = null
    },
    getError: (state, action) => {
      state.loading = false
      state.error = action.payload
    },
    postDone: (state) => {
      state.loading = false
      state.error = null
      state.response = null
    },
    deleteSuccess: (state, action) => {
      state.contactUsList = state.contactUsList.filter(
        (item) => item.user_id !== action.payload
      )
      state.loading = false
      state.error = null
      state.response = 'Deleted successfully'
    },
    createSuccess: (state, action) => {
      if (!Array.isArray(state.contactUsList)) {
        state.contactUsList = []
      }
      state.contactUsList.push(action.payload)
      state.loading = false
      state.error = null
      state.response = 'Created successfully'
    },
    updateSuccess: (state, action) => {
      if (Array.isArray(state.contactUsList)) {
        const index = state.contactUsList.findIndex(
          (item) => item.user_id === action.payload.user_id
        )
        if (index !== -1) {
          state.contactUsList[index] = action.payload
        }
      } else {
        console.warn('contactUsList is not an array!', state.contactUsList)
      }

      state.loading = false
      state.error = null
      state.response = 'Updated successfully'
    }
  }
})

export const {
  getRequest,
  doneSuccess,
  getContactUsSuccess,
  getFailed,
  getError,
  postDone,
  deleteSuccess,
  createSuccess,
  updateSuccess
} = contactUsSlice.actions

export const contactUsReducer = contactUsSlice.reducer

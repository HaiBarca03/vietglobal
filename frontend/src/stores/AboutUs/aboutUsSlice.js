import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  aboutUsList: [],
  aboutUsDetails: [],
  loading: false,
  error: null,
  response: null
}

const aboutUsSlice = createSlice({
  name: 'aboutUs',
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true
    },
    doneSuccess: (state, action) => {
      state.aboutUsDetails = action.payload
      state.loading = false
      state.error = null
      state.response = null
    },
    getAboutUsSuccess: (state, action) => {
      state.aboutUsList = action.payload
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
      state.aboutUsList = state.aboutUsList.filter(
        (item) => item.user_id !== action.payload
      )
      state.loading = false
      state.error = null
      state.response = 'Deleted successfully'
    },
    createSuccess: (state, action) => {
      if (!Array.isArray(state.aboutUsList)) {
        state.aboutUsList = []
      }
      state.aboutUsList.push(action.payload)
      state.loading = false
      state.error = null
      state.response = 'Created successfully'
    },
    updateSuccess: (state, action) => {
      if (Array.isArray(state.aboutUsList)) {
        const index = state.aboutUsList.findIndex(
          (item) => item.user_id === action.payload.user_id
        )
        if (index !== -1) {
          state.aboutUsList[index] = action.payload
        }
      } else {
        console.warn('aboutUsList is not an array!', state.aboutUsList)
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
  getAboutUsSuccess,
  getFailed,
  getError,
  postDone,
  deleteSuccess,
  createSuccess,
  updateSuccess
} = aboutUsSlice.actions

export const aboutUsReducer = aboutUsSlice.reducer

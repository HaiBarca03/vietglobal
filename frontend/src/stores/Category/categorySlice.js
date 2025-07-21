import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryList: [],
  seatDetails: [],
  loading: false,
  error: null,
  response: null
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true
    },
    doneSuccess: (state, action) => {
      state.seatDetails = action.payload
      state.loading = false
      state.error = null
      state.response = null
    },
    getCategorySuccess: (state, action) => {
      state.categoryList = action.payload
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
      state.categoryList = state.categoryList.filter(
        (item) => item.user_id !== action.payload
      )
      state.loading = false
      state.error = null
      state.response = 'Deleted successfully'
    },
    createSuccess: (state, action) => {
      if (!Array.isArray(state.categoryList)) {
        state.categoryList = []
      }
      state.categoryList.push(action.payload)
      state.loading = false
      state.error = null
      state.response = 'Created successfully'
    },
    updateSuccess: (state, action) => {
      if (Array.isArray(state.categoryList)) {
        console.log('state.categoryList', state.categoryList)
        const index = state.categoryList.findIndex(
          (item) => item.id === action.payload.id
        )
        if (index !== -1) {
          state.categoryList[index] = action.payload
        }
      } else {
        console.warn('categoryList is not an array!', state.categoryList)
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
  getCategorySuccess,
  getFailed,
  getError,
  postDone,
  deleteSuccess,
  createSuccess,
  updateSuccess
} = categorySlice.actions

export const categoryReducer = categorySlice.reducer

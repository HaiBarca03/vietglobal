import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: [],
  productDetails: [],
  loading: false,
  error: null,
  response: null
}

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true
    },
    doneSuccess: (state, action) => {
      state.productDetails = action.payload
      state.loading = false
      state.error = null
      state.response = null
    },
    getProductSuccess: (state, action) => {
      console.log('>>> Reducer received products:', action.payload)
      state.productList = action.payload
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
      state.productList = state.productList.filter(
        (item) => item.user_id !== action.payload
      )
      state.loading = false
      state.error = null
      state.response = 'Deleted successfully'
    },
    createSuccess: (state, action) => {
      if (!Array.isArray(state.productList)) {
        state.productList = []
      }
      state.productList.push(action.payload)
      state.loading = false
      state.error = null
      state.response = 'Created successfully'
    },
    updateSuccess: (state, action) => {
      if (Array.isArray(state.productList)) {
        const index = state.productList.findIndex(
          (item) => item.user_id === action.payload.user_id
        )
        if (index !== -1) {
          state.productList[index] = action.payload
        }
      } else {
        console.warn('productList is not an array!', state.productList)
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
  getProductSuccess,
  getFailed,
  getError,
  postDone,
  deleteSuccess,
  createSuccess,
  updateSuccess
} = productSlice.actions

export const productReducer = productSlice.reducer

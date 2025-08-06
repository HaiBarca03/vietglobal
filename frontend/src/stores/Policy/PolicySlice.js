import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  policyList: [],
  policyDetails: [],
  loading: false,
  error: null,
  response: null
}

const policySlice = createSlice({
  name: 'policy',
  initialState,
  reducers: {
    getRequest: (state) => {
      state.loading = true
    },
    doneSuccess: (state, action) => {
      state.policyDetails = action.payload
      state.loading = false
      state.error = null
      state.response = null
    },
    getContactSuccess: (state, action) => {
      state.policyList = action.payload
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
      state.policyList = state.policyList.filter(
        (item) => item.user_id !== action.payload
      )
      state.loading = false
      state.error = null
      state.response = 'Deleted successfully'
    },
    createSuccess: (state, action) => {
      if (!Array.isArray(state.policyList)) {
        state.policyList = []
      }
      state.policyList.push(action.payload)
      state.loading = false
      state.error = null
      state.response = 'Created successfully'
    },
    updateSuccess: (state, action) => {
      if (Array.isArray(state.policyList)) {
        const index = state.policyList.findIndex(
          (item) => item.user_id === action.payload.user_id
        )
        if (index !== -1) {
          state.policyList[index] = action.payload
        }
      } else {
        console.warn('policyList is not an array!', state.policyList)
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
  getContactSuccess,
  getFailed,
  getError,
  postDone,
  deleteSuccess,
  createSuccess,
  updateSuccess
} = policySlice.actions

export const policyReducer = policySlice.reducer

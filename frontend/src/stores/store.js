import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './Users/userSlice'
import { categoryReducer } from './Category/categorySlice'
import { aboutUsReducer } from './AboutUs/aboutUsSlice'
import { contactUsReducer } from './ContactUs/ContactUsSlice'
import { productReducer } from './Product/productSlice'
import { policyReducer } from './Policy/PolicySlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    aboutUs: aboutUsReducer,
    contactUs: contactUsReducer,
    product: productReducer,
    policy: policyReducer
  }
})

export default store

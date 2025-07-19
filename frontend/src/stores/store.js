import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './Users/userSlice'
import { categoryReducer } from './Category/categorySlice'
import { aboutUsReducer } from './AboutUs/aboutUsSlice'
import { contactUsReducer } from './ContactUs/ContactUsSlice'
import { productReducer } from './Product/productSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categoryReducer,
    aboutUs: aboutUsReducer,
    contactUs: contactUsReducer,
    product: productReducer
  }
})

export default store

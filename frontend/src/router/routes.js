// routes.js
import AboutUs from '../pages/AboutUs/AboutUs'
import AdminPageHome from '../pages/Admin/AdminPageHome/AdminPageHome'
import HomeLogitics from '../pages/Home-Logitics/HomeLogitics'
import HomePage from '../pages/Home/HomePage'
import Login from '../pages/Login/Login'
import NotFoundPage from '../pages/NotPoundPage/NotPoundPage'
import Policy from '../pages/Policy/Policy'
import ProductCategory from '../pages/ProductCategory/ProductCategory'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import ProductList from '../pages/ProductList/ProductList'
import Register from '../pages/Register/Register'

export const langRoutes = [
  {
    path: '',
    page: HomeLogitics,
    isShowHeader: true
  },
  {
    path: '/import-export',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: 'about-us',
    page: AboutUs,
    isShowHeader: true
  },
  {
    path: 'product-detail/:slug',
    page: ProductDetailPage,
    isShowHeader: true
  },
  {
    path: 'category/:slug',
    page: ProductCategory,
    isShowHeader: true
  },
  {
    path: 'all-product',
    page: ProductList,
    isShowHeader: true
  },
  {
    path: 'policy',
    page: Policy,
    isShowHeader: true
  }
]

export const globalRoutes = [
  {
    path: '/login',
    page: Login
  },
  {
    path: '/signup',
    page: Register
  },
  {
    path: '/admin',
    page: AdminPageHome
  },
  {
    path: '*',
    page: NotFoundPage
  }
]

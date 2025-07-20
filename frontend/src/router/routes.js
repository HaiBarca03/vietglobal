import AboutUs from '../pages/AboutUs/AboutUs'
import AdminPageHome from '../pages/Admin/AdminPageHome/AdminPageHome'
import HomePage from '../pages/Home/HomePage'
import Login from '../pages/Login/Login'
import NotPoundPage from '../pages/NotPoundPage/NotPoundPage'
import ProductCategory from '../pages/ProductCategory/ProductCategory'
import ProductDetailPage from '../pages/ProductDetailPage/ProductDetailPage'
import ProductList from '../pages/ProductList/ProductList'
import Register from '../pages/Register/Register'

export const routes = [
  {
    path: '/',
    page: HomePage,
    isShowHeader: true
  },
  {
    path: '/login',
    page: Login
  },
  {
    path: '/signup',
    page: Register
  },
  {
    path: '/about-us',
    page: AboutUs,
    isShowHeader: true
  },
  {
    path: '/product-detail/:slug',
    page: ProductDetailPage,
    isShowHeader: true
  },
  {
    path: '/category/:slug',
    page: ProductCategory,
    isShowHeader: true
  },
  {
    path: '/all-product',
    page: ProductList,
    isShowHeader: true
  },
  {
    path: '/admin',
    page: AdminPageHome
  },
  {
    path: '*',
    page: NotPoundPage
  }
]

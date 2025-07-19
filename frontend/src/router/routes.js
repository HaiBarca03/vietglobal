import AboutUs from '../pages/AboutUs/AboutUs'
import HomePage from '../pages/Home/HomePage'
import Login from '../pages/Login/Login'
import NotPoundPage from '../pages/NotPoundPage/NotPoundPage'
import ProductByCate from '../pages/ProductByCate/ProductByCate'
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
    page: ProductByCate,
    isShowHeader: true
  },
  {
    path: '/all-product',
    page: ProductList,
    isShowHeader: true
  },
  {
    path: '*',
    page: NotPoundPage
  }
]

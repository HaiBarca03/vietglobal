// routes.js
import AboutUs from "../pages/AboutUs/AboutUs";
import AdminPageHome from "../pages/Admin/AdminPageHome/AdminPageHome";
import HomeLogitics from "../pages/Home-Logitics/HomeLogitics";
import HomePage from "../pages/Home/HomePage";
import Login from "../pages/Login/Login";
import NotFoundPage from "../pages/NotPoundPage/NotPoundPage";
import Policy from "../pages/Policy/Policy";
import ProductCategory from "../pages/ProductCategory/ProductCategory";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductList from "../pages/ProductList/ProductList";
import Register from "../pages/Register/Register";
import AboutUsShipping from "../pages/Shipping/AboutUsShipping";
import PartnersPage from "../pages/Shipping/PartnersPage";
import ServiceDetailPage from "../pages/Shipping/ServiceDetailPage";
import ContactForm from "../pages/Shipping/ShippingContactForm";
import ShippingHome from "../pages/Shipping/ShippingHome";

export const langRoutes = [
  {
    path: "", // Giờ đây trang chủ sẽ là Shipping
    page: ShippingHome,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "/logistics-china-viet", // Xuất nhập khẩu Trung - Việt
    page: HomeLogitics,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "/import-export", // Trang Import-Export (HomePage)
    page: HomePage,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "/partners",
    page: PartnersPage,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "/shipping-contact-us",
    page: ContactForm,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "/service/:slug",
    page: ServiceDetailPage,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "/shipping-about-us",
    page: AboutUsShipping,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "about-us",
    page: AboutUs,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "product-detail/:slug",
    page: ProductDetailPage,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "category/:slug",
    page: ProductCategory,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "all-product",
    page: ProductList,
    isShowHeader: true,
    footerType: "shipping",
  },
  {
    path: "policy",
    page: Policy,
    isShowHeader: true,
    footerType: "shipping",
  },
];

export const globalRoutes = [
  {
    path: "/login",
    page: Login,
  },
  {
    path: "/signup",
    page: Register,
  },
  {
    path: "/admin",
    page: AdminPageHome,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];

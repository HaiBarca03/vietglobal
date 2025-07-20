import React, { useEffect } from 'react'
import { Carousel } from 'antd' // 👈 dùng Carousel từ Ant Design
import AdBanner from '../../components/Banner/AdBanner'
import WhyChooseUs from '../../components/ChooseUs/ChooseUs'
import MapLocation from '../../components/MapLocation/MapLocation'
import ContactUs from '../../components/ContactUs/ContactUs'
import './HomePage.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getAllProduct } from '../../stores/Product/productApi'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const productLists = useSelector((state) => state.product.productList)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'vi'

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  return (
    <div>
      <AdBanner />
      <WhyChooseUs />
      <div className="product-slider" style={{ padding: '40px' }}>
        <div className="tit-product-hot">{t('homeTitle')}</div>
        {productLists.length === 0 ? (
          <p>Không có sản phẩm nào</p>
        ) : (
          <Carousel autoplay>
            {Array.from(
              { length: Math.ceil(productLists.length / 3) },
              (_, i) => (
                <div key={i} className="product-slide-group">
                  {productLists.slice(i * 3, i * 3 + 3).map((product) => (
                    <div className="product-slide-item" key={product._id}>
                      <ProductCard product={product} lang={lang} />
                    </div>
                  ))}
                </div>
              )
            )}
          </Carousel>
        )}
        <p className="all-product">
          <Link
            to="/all-product"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            {t('readmore')}
          </Link>
        </p>
      </div>
      <div className="contact-map-wrapper">
        <div className="contact-left">
          <ContactUs />
        </div>
        <div className="contact-right">
          <MapLocation />
        </div>
      </div>
    </div>
  )
}

export default HomePage

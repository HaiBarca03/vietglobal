import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Carousel, Typography, Row, Col, Button } from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'

import AdBanner from '../../components/Banner/AdBanner'
import WhyChooseUs from '../../components/ChooseUs/ChooseUs'
import MapLocation from '../../components/MapLocation/MapLocation'
import ContactUs from '../../components/ContactUs/ContactUs'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getAllProduct } from '../../stores/Product/productApi'
import './HomePage.css'

const { Title, Text } = Typography

const HomePage = () => {
  const productLists = useSelector((state) => state.product.productList)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'
  const { lang: currentLang } = useParams()

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  return (
    <div className="homepage-wrapper">
      <AdBanner />
      
      <WhyChooseUs />

      <section className="product-section">
        <div className="container">
          <div className="section-header">
            <Title level={2} className="main-title">
              {t('homeTitle')}
            </Title>
            <div className="title-accent" />
          </div>

          {productLists.length === 0 ? (
            <div className="no-products">
              <Text type="secondary">{'Không có sản phẩm nào'}</Text>
            </div>
          ) : (
            <div className="carousel-wrapper">
              <Carousel 
                autoplay 
                dots={{ className: 'custom-dots' }}
                slidesToShow={productLists.length < 3 ? productLists.length : 3}
                responsive={[
                  { breakpoint: 1024, settings: { slidesToShow: 2 } },
                  { breakpoint: 768, settings: { slidesToShow: 1 } }
                ]}
              >
                {productLists.map((product) => (
                  <div key={product._id} className="product-slide-item">
                    <ProductCard product={product} lang={lang} />
                  </div>
                ))}
              </Carousel>
            </div>
          )}

          <div className="view-all-wrapper">
            <Link to={`/${currentLang}/all-product`}>
              <Button type="link" size="large" icon={<ArrowRightOutlined />}>
                {t('readmore')}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <Row gutter={[0, 0]} align="stretch">
          <Col xs={24} lg={10} className="contact-column">
            <ContactUs />
          </Col>
          <Col xs={24} lg={14} className="map-column">
            <MapLocation />
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default HomePage

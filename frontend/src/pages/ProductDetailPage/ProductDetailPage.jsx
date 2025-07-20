import React, { useEffect, useState } from 'react'
import {
  Card,
  Image,
  Tag,
  Button,
  Typography,
  Row,
  Col,
  Divider,
  Space,
  Rate,
  InputNumber,
  Breadcrumb,
  Badge,
  Skeleton
} from 'antd'
import {
  ShoppingCartOutlined,
  HeartOutlined,
  ShareAltOutlined,
  HomeOutlined,
  UserOutlined
} from '@ant-design/icons'
import './ProductDetailPage.css'
import { useTranslation } from 'react-i18next'
import { getProductDetail } from '../../stores/Product/productApi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

const ProductDetailPage = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'vi'
  const productDetail = useSelector((state) => state.product.productDetails)
  const dispatch = useDispatch()
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!productDetail || productDetail.slug !== slug) {
      setLoading(true)
      dispatch(getProductDetail(lang, slug)).finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [lang, slug, dispatch])

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price)
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: productDetail.title[lang],
        text: productDetail.description[lang],
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      // You might want to show a toast notification here
    }
  }

  const handleAllProduct = () => {
    navigate('/all-product')
  }

  if (loading) {
    return (
      <div className="main-wrapper-prod">
        <div className="wrapper-productdt">
          <div className="container-responsive">
            <Skeleton active />
            <Row gutter={[24, 24]} className="mt-6">
              <Col xs={24} lg={12}>
                <Skeleton.Image style={{ width: '100%', height: '400px' }} />
              </Col>
              <Col xs={24} lg={12}>
                <Skeleton active paragraph={{ rows: 8 }} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="main-wrapper-prod">
      <div className="wrapper-productdt">
        <div className="container-responsive">
          <Breadcrumb className="breadcrumb-custom">
            <Breadcrumb.Item href="/">
              <HomeOutlined />
              {!isMobile && <span className="ml-1">Trang chủ</span>}
            </Breadcrumb.Item>
            <Breadcrumb.Item onClick={handleAllProduct}>
              Sản phẩm
            </Breadcrumb.Item>
            <Breadcrumb.Item className="breadcrumb-current">
              {productDetail.title?.[lang]}
            </Breadcrumb.Item>
          </Breadcrumb>

          <Row gutter={[24, 24]} className="product-detail-row">
            {/* Image Column */}
            <Col xs={24} lg={12} className="image-column">
              <div className="image-section">
                <Card className="main-image-card" bodyStyle={{ padding: 0 }}>
                  <div className="main-image-wrapper">
                    <Badge.Ribbon
                      text="Mới"
                      color="red"
                      className="product-badge"
                    >
                      <Image
                        width="100%"
                        height={isMobile ? 300 : 500}
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                        src={productDetail?.image?.[selectedImage]}
                        alt={productDetail?.title?.[lang]}
                        fallback="https://via.placeholder.com/500x500?text=No+Image"
                        placeholder={<Skeleton.Image />}
                      />
                    </Badge.Ribbon>

                    <div className="action-buttons">
                      <Button
                        type={isFavorite ? 'primary' : 'default'}
                        shape="circle"
                        icon={<HeartOutlined />}
                        onClick={toggleFavorite}
                        className="action-btn favorite-btn"
                        size={isMobile ? 'small' : 'middle'}
                      />
                      <Button
                        shape="circle"
                        icon={<ShareAltOutlined />}
                        onClick={handleShare}
                        className="action-btn share-btn"
                        size={isMobile ? 'small' : 'middle'}
                      />
                    </div>
                  </div>
                </Card>

                <div className="image-thumbnails">
                  {productDetail.image?.map((img, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`thumbnail-wrapper ${
                        selectedImage === index ? 'active' : ''
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${productDetail.title[lang]} ${index + 1}`}
                        preview={false}
                        className="thumbnail-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Product Info Column */}
            <Col xs={24} lg={12} className="info-column">
              <div className="product-info-section">
                {/* Categories */}
                <div className="categories-section">
                  <Space wrap>
                    {productDetail.categories?.map((category) => (
                      <Tag
                        key={category._id}
                        color="blue"
                        className="category-tag"
                      >
                        {category.name[lang]}
                      </Tag>
                    ))}
                  </Space>
                </div>

                {/* Title */}
                <div className="title-section">
                  <Title level={isMobile ? 2 : 1} className="product-title">
                    {productDetail.title?.[lang]}
                  </Title>
                </div>

                {/* Product Details Card */}
                <Card
                  size="small"
                  title={t('producttitle')}
                  className="product-details-card"
                >
                  <div className="product-details-content">
                    <div className="detail-row">
                      <Text strong className="detail-label">
                        {t('productcode')}:
                      </Text>
                      <Text copyable className="detail-value">
                        {productDetail._id}
                      </Text>
                    </div>

                    <div className="detail-row description-row">
                      <div className="description-content">
                        <Text strong className="detail-label">
                          {t('productdes')}:
                        </Text>
                        <Paragraph className="description-text">
                          {productDetail?.description?.[lang]}
                        </Paragraph>
                      </div>
                    </div>

                    <div className="detail-row">
                      <Text strong className="detail-label">
                        {t('productcate')}:
                      </Text>
                      <Text className="detail-value category-value">
                        {productDetail?.categories[0].name?.[lang]}
                      </Text>
                    </div>

                    <div className="detail-row">
                      <Text strong className="detail-label">
                        {t('productday')}:
                      </Text>
                      <Text className="detail-value">
                        {new Date(productDetail.createdAt).toLocaleDateString(
                          'vi-VN'
                        )}
                      </Text>
                    </div>
                  </div>
                </Card>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailPage

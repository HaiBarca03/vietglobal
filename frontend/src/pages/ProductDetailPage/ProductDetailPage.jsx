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
  Badge
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
import { useParams } from 'react-router-dom'

const { Title, Text, Paragraph } = Typography

const ProductDetailPage = () => {
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'vi'
  const productDetail = useSelector((state) => state.product.productDetails)
  const dispatch = useDispatch()
  const { slug } = useParams()
  const [loading, setLoading] = useState(true)

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
    }
  }

  return loading ? (
    'Dang load'
  ) : (
    <div className="main-wrapper-prod">
      <div className="min-h-screen bg-gray-50 wrapper-productdt">
        <div className="max-w-7xl mx-auto p-4 md:p-6">
          <Breadcrumb className="mb-6">
            <Breadcrumb.Item href="/">
              <HomeOutlined />
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/products">Sản phẩm</Breadcrumb.Item>
            <Breadcrumb.Item>{productDetail.title?.[lang]}</Breadcrumb.Item>
          </Breadcrumb>

          <Row gutter={[40, 32]}>
            <Col xs={24} lg={12}>
              <div className="space-y-4">
                <Card className="shadow-lg border-0" bodyStyle={{ padding: 0 }}>
                  <div className="relative">
                    <Badge.Ribbon text="Mới" color="red">
                      <Image
                        width="100%"
                        height={500}
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                        src={productDetail?.image?.[selectedImage]}
                        alt={productDetail?.title?.[lang]}
                        fallback="https://via.placeholder.com/500x500?text=No+Image"
                      />
                    </Badge.Ribbon>

                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button
                        type={isFavorite ? 'primary' : 'default'}
                        shape="circle"
                        icon={<HeartOutlined />}
                        onClick={toggleFavorite}
                        className="bg-white/90 shadow-lg backdrop-blur-sm"
                      />
                      <Button
                        shape="circle"
                        icon={<ShareAltOutlined />}
                        onClick={handleShare}
                        className="bg-white/90 shadow-lg backdrop-blur-sm"
                      />
                    </div>
                  </div>
                </Card>

                <div className="grid grid-cols-5 gap-3 image_small">
                  {productDetail.image?.map((img, index) => (
                    <div key={index} onClick={() => setSelectedImage(index)}>
                      <Image
                        width="100px"
                        height="100px"
                        style={{ objectFit: 'cover', aspectRatio: '1/1' }}
                        src={img}
                        alt={`${productDetail.title[lang]} ${index + 1}`}
                        preview={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </Col>

            {/* Cột thông tin sản phẩm */}
            <Col xs={24} lg={12}>
              <div className="space-y-6">
                {/* Categories */}
                <div>
                  <Space wrap className="mb-4">
                    {productDetail.categories?.map((category) => (
                      <Tag
                        key={category._id}
                        color="blue"
                        className="text-sm px-3 py-1 rounded-full"
                      >
                        {category.name[lang]}
                      </Tag>
                    ))}
                  </Space>
                </div>

                {/* Title */}
                <div>
                  <Title level={1} className="mb-3 text-gray-800 leading-tight">
                    {productDetail.title?.[lang]}
                  </Title>
                </div>

                <Card size="small" title={t('producttitle')}>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <Text strong>{t('productcode')}:</Text>
                      <Text copyable className="text-gray-600">
                        {productDetail._id}
                      </Text>
                    </div>
                    <div>
                      <Paragraph className="text-gray-600 text-base leading-relaxed">
                        <Text strong>{t('productdes')}:</Text>
                        <Text copyable className="text-gray-600">
                          {productDetail?.description?.[lang]}
                        </Text>
                      </Paragraph>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <Text strong>{t('productcate')}:</Text>
                      <Text className="text-blue-600">
                        {productDetail?.categories[0].name?.[lang]}
                      </Text>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <Text strong>{t('productday')}:</Text>
                      <Text className="text-gray-600">
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

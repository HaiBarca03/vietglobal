import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, Card, Tag } from 'antd'
import { motion } from 'framer-motion'
import { RightOutlined } from '@ant-design/icons'

const { Title, Paragraph, Text } = Typography

const ProductCard = ({ product, lang }) => {
  const navigate = useNavigate()
  if (!product) return null
  const { lang: currentLang } = useParams()
  
  const handleProductDt = () => {
    const slug = product.slug?.[lang]
    navigate(`/${currentLang}/product-detail/${slug}`)
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ height: '100%' }}
    >
      <Card
        hoverable
        onClick={handleProductDt}
        style={{
          borderRadius: 16,
          overflow: 'hidden',
          border: '1px solid rgba(0, 181, 184, 0.1)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column'
        }}
        cover={
          <div style={{ overflow: 'hidden', height: 220 }}>
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
              src={product.image?.[0]}
              alt={product.title?.[lang]}
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
              }}
            />
          </div>
        }
        bodyStyle={{ 
          padding: '20px', 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div>
          <Tag color="#00B5B8" style={{ marginBottom: 12, borderRadius: 4 }}>
            {lang === 'vi' ? 'Sản phẩm' : 'Product'}
          </Tag>
          <Title
            level={4}
            style={{
              fontSize: '1.1rem',
              fontWeight: 700,
              marginBottom: 12,
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              minHeight: '2.8rem',
              lineHeight: 1.3
            }}
          >
            {product.title?.[lang]}
          </Title>
          <Paragraph
            ellipsis={{ rows: 2 }}
            style={{
              fontSize: '0.9rem',
              color: '#666',
              marginBottom: 0
            }}
          >
            <div dangerouslySetInnerHTML={{ __html: product.description?.[lang] || '' }} />
          </Paragraph>
        </div>

        <div style={{ 
          marginTop: 20, 
          paddingTop: 15, 
          borderTop: '1px solid #f0f0f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Text strong style={{ color: '#00B5B8' }}>
            {lang === 'vi' ? 'Xem chi tiết' : 'View Detail'}
          </Text>
          <RightOutlined style={{ color: '#00B5B8', fontSize: 12 }} />
        </div>
      </Card>
    </motion.div>
  )
}

export default ProductCard

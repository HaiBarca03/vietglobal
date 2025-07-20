import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProductCard2 = ({ product, lang, index }) => {
  const navigate = useNavigate()
  if (!product) return null
  const { t, i18n } = useTranslation()

  const handleProductDt = () => {
    const slug = product.slug?.[lang]
    navigate(`/product-detail/${slug}`)
  }

  const isEven = index % 2 === 0
  const imageOnLeft = isEven

  return (
    <div
      className="product-card"
      style={{
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: imageOnLeft ? 'row' : 'row-reverse',
        maxWidth: '1200px',
        height: '350px',
        margin: '10px 0'
      }}
      onClick={() => handleProductDt()}
    >
      <div style={{ width: '50%', height: '100%' }}>
        <img
          src={product.image?.[0]}
          alt={product.title?.[lang]}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      <div
        style={{
          width: '50%',
          padding: '16px'
        }}
      >
        <h5
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            marginBottom: '8px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}
        >
          {product.title?.[lang]}
        </h5>

        <p
          style={{
            fontSize: '14px',
            color: '#555',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '1.4'
          }}
        >
          {product.description?.[lang]}
        </p>

        <button
          style={{
            backgroundColor: '#e53935',
            color: 'white',
            marginTop: '16px',
            padding: '10px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          {t('readmore')}
        </button>
      </div>
    </div>
  )
}

export default ProductCard2

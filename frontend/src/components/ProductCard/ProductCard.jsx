import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product, lang }) => {
  const navigate = useNavigate()
  if (!product) return null
  const handleProductDt = () => {
    const slug = product.slug?.[lang]
    navigate(`/product-detail/${slug}`)
  }
  return (
    <div
      className="product-card-1"
      style={{
        cursor: 'pointer',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden',
        width: '300px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff'
      }}
      onClick={() => handleProductDt()}
    >
      <img
        src={product.image?.[0]}
        alt={product.title?.[lang]}
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
      />
      <div style={{ padding: '12px' }}>
        <h5
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {product.title?.[lang]}
        </h5>
        <div
          style={{
            fontSize: '14px',
            color: '#555',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            lineHeight: '1.4'
          }}
          dangerouslySetInnerHTML={{
            __html: product.description?.[lang] || ''
          }}
        />
        <p
          style={{
            fontWeight: 'bold',
            color: '#d0021b',
            marginTop: '10px'
          }}
        ></p>
      </div>
    </div>
  )
}

export default ProductCard

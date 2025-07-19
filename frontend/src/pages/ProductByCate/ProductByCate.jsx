import React, { useEffect } from 'react'
import './ProductByCate.css'
import { getProductByCategory } from '../../stores/Product/productApi'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ProductCard2 from '../../components/ProductCard/ProductCard2'
import { Breadcrumb } from 'antd'
import { HomeOutlined } from '@ant-design/icons'

const ProductByCate = () => {
  const productLists = useSelector((state) => state.product.productList)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'vi'

  useEffect(() => {
    dispatch(getProductByCategory())
  }, [dispatch])

  return (
    <div className="product-by-cate">
      <div className="product-slider" style={{ padding: '40px' }}>
        <Breadcrumb className="nav-navi">
          <Breadcrumb.Item href="/">
            <HomeOutlined />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/products">Tất cả sản phẩm</Breadcrumb.Item>
        </Breadcrumb>
        {productLists.length === 0 ? (
          <p>Không có sản phẩm nào</p>
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}
          >
            {productLists.map((product, index) => (
              <ProductCard2
                key={product._id}
                product={product}
                lang={lang}
                index={index}
              />
            ))}
          </div>
        )}
        <p className="all-product">Xem thêm </p>
      </div>
    </div>
  )
}

export default ProductByCate

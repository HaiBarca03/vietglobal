import React, { useEffect, useState } from 'react'
import './ProductList.css'
import { getAllProduct } from '../../stores/Product/productApi'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import ProductCard2 from '../../components/ProductCard/ProductCard2'

const ProductList = () => {
  const productLists = useSelector((state) => state.product.productList)
  const dispatch = useDispatch()
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'en'

  useEffect(() => {
    dispatch(getAllProduct())
  }, [dispatch])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <div className="product-by-cate">
      <div className="product-list-container">
        {/* <div className="nav-navi">
          <Breadcrumb className="breadcrumb-custom">
            <Breadcrumb.Item href="/">
              <HomeOutlined />
              {!isMobile && <span className="ml-1">Trang chủ</span>}
            </Breadcrumb.Item>
            <Breadcrumb.Item>{t('allProduct')}</Breadcrumb.Item>
          </Breadcrumb>
        </div> */}

        <h1 className="product-list-title">{t('allProduct')}</h1>

        {productLists.length === 0 ? (
          <div className="no-products">Không có sản phẩm nào</div>
        ) : (
          <div className="product-grid">
            {productLists.map((product, index) => (
              <ProductCard2
                key={product.id || index}
                product={product}
                lang={lang}
                index={index}
              />
            ))}
          </div>
        )}

        <div className="load-more-container">
          <button className="load-more-btn">Xem thêm</button>
        </div>
      </div>
    </div>
  )
}

export default ProductList

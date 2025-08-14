import React, { useEffect, useState } from 'react'
import {
  Table,
  Card,
  Image,
  Tag,
  Typography,
  Space,
  Button,
  Popconfirm,
  message,
  Spin
} from 'antd'
import {
  PlusOutlined,
  EyeOutlined,
  EditOutlined,
  DeleteOutlined
} from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'
import {
  createProduct,
  deleteProduct,
  getAllProduct,
  updateProductId
} from '../../../stores/Product/productApi'
import { getAllCategory } from '../../../stores/Category/categoryApis'

import ProductDetailModal from './ProductDetailModal'
import ProductEditModal from './ProductEditModal'
import ProductCreateModal from './ProductCreateModal'

const { Text } = Typography

const ProductAdminPage = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const [editLoading, setEditLoading] = useState(false)

  const [createVisible, setCreateVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [detailVisible, setDetailVisible] = useState(false)

  const [editProduct, setEditProduct] = useState(null)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const productList = useSelector((state) => state.product.productList || [])
  const categoryList = useSelector((state) => state.category.categoryList || [])

  useEffect(() => {
    fetchProducts()
    dispatch(getAllCategory())
  }, [dispatch])

  const fetchProducts = async () => {
    setLoading(true)
    try {
      await dispatch(getAllProduct())
    } catch (err) {
      console.error('Lỗi khi tải sản phẩm:', err)
      message.error('Không thể tải danh sách sản phẩm!')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateProduct = async (newProduct) => {
    setEditLoading(true)
    try {
      await dispatch(createProduct(newProduct))
      message.success('Tạo sản phẩm thành công!')
      fetchProducts()
      setCreateVisible(false)
    } catch (err) {
      console.error('Tạo sản phẩm lỗi:', err)
      message.error('Tạo sản phẩm thất bại!')
    } finally {
      setEditLoading(false)
    }
  }

  const handleSaveEdit = async (updatedProduct) => {
    setEditLoading(true)
    try {
      await dispatch(updateProductId(updatedProduct._id, updatedProduct))
      message.success('Cập nhật thành công!')
      fetchProducts()
      setEditVisible(false)
    } catch (err) {
      console.error('Cập nhật lỗi:', err)
      message.error('Cập nhật thất bại!')
    } finally {
      setEditLoading(false)
    }
  }

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteProduct(id))
      message.success('Xoá sản phẩm thành công!')
      fetchProducts()
    } catch (err) {
      console.error('Xoá lỗi:', err)
      message.error('Xoá sản phẩm thất bại!')
    }
  }

  const columns = [
    {
      title: 'Ảnh',
      dataIndex: 'image',
      key: 'image',
      render: (images) => (
        <Image
          src={images?.[0]}
          width={60}
          height={60}
          alt="product"
          style={{ objectFit: 'cover' }}
        />
      )
    },
    {
      title: 'Tên sản phẩm (VI)',
      dataIndex: ['title', 'vi'],
      key: 'title_vi'
    },
    {
      title: 'Tên sản phẩm (EN)',
      dataIndex: ['title', 'en'],
      key: 'title_en'
    },
    {
      title: 'Mô tả (VI)',
      dataIndex: ['description', 'vi'],
      key: 'desc_vi',
      ellipsis: true,
      render: (desc) => (
        <div
          style={{
            maxWidth: 300,
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            lineHeight: '20px',
            height: '20px'
          }}
          dangerouslySetInnerHTML={{ __html: desc }}
        />
      )
    },
    // {
    //   title: 'Giá (VNĐ)',
    //   dataIndex: 'price',
    //   key: 'price',
    //   render: (price) => (
    //     <Text strong type="success">
    //       {price.toLocaleString()} ₫
    //     </Text>
    //   )
    // },
    {
      title: 'Danh mục',
      dataIndex: 'categories',
      key: 'categories',
      render: (categories) =>
        categories.map((cat) => (
          <Tag key={cat._id} color="blue">
            {cat.name?.vi}
          </Tag>
        ))
    },
    {
      title: 'Slug (VI)',
      dataIndex: ['slug', 'vi'],
      key: 'slug_vi'
    },
    {
      title: 'Slug (EN)',
      dataIndex: ['slug', 'en'],
      key: 'slug_en'
    },
    {
      title: 'Hành động',
      key: 'actions',
      fixed: 'right',
      width: 160,
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedProduct(record)
              setDetailVisible(true)
            }}
          />
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => {
              setEditProduct(record)
              setEditVisible(true)
            }}
          />
          <Popconfirm
            title="Bạn có chắc muốn xoá sản phẩm này?"
            onConfirm={() => handleDelete(record._id)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <Button type="primary" danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      )
    }
  ]

  return (
    <Spin spinning={loading || editLoading} tip="Đang xử lý...">
      <Card
        title="Quản lý Sản phẩm"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => setCreateVisible(true)}
          >
            Thêm sản phẩm
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={productList.map((item) => ({ ...item, key: item._id }))}
          pagination={{ pageSize: 5 }}
          scroll={{ x: 1000 }}
        />

        <ProductDetailModal
          visible={detailVisible}
          onClose={() => setDetailVisible(false)}
          product={selectedProduct}
        />

        <ProductEditModal
          visible={editVisible}
          onClose={() => setEditVisible(false)}
          product={editProduct}
          onSave={handleSaveEdit}
          categoryOptions={categoryList}
        />

        <ProductCreateModal
          visible={createVisible}
          onClose={() => setCreateVisible(false)}
          onCreate={handleCreateProduct}
          categoryOptions={categoryList}
        />
      </Card>
    </Spin>
  )
}

export default ProductAdminPage

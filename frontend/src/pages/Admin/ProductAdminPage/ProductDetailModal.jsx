import React from 'react'
import { Modal, Descriptions, Image, Tag } from 'antd'

const ProductDetailModal = ({ visible, onClose, product }) => {
  if (!product) return null

  return (
    <Modal
      open={visible}
      title="Chi tiết sản phẩm"
      onCancel={onClose}
      footer={null}
      width={800}
    >
      <Descriptions bordered column={2}>
        <Descriptions.Item label="Tên (VI)">
          {product.title?.vi}
        </Descriptions.Item>
        <Descriptions.Item label="Tên (EN)">
          {product.title?.en}
        </Descriptions.Item>

        <Descriptions.Item label="Slug (VI)">
          {product.slug?.vi}
        </Descriptions.Item>
        <Descriptions.Item label="Slug (EN)">
          {product.slug?.en}
        </Descriptions.Item>

        <Descriptions.Item label="Mô tả (VI)" span={2}>
          <div
            className="description-text"
            style={{ marginTop: 8 }}
            dangerouslySetInnerHTML={{
              __html: product.description?.vi || ''
            }}
          />
        </Descriptions.Item>

        <Descriptions.Item label="Mô tả (EN)" span={2}>
          <div
            className="description-text"
            style={{ marginTop: 8 }}
            dangerouslySetInnerHTML={{
              __html: product.description?.en || ''
            }}
          />
        </Descriptions.Item>

        <Descriptions.Item label="Giá">
          {product.price?.toLocaleString()} ₫
        </Descriptions.Item>

        <Descriptions.Item label="Danh mục">
          {product.categories?.map((cat) => (
            <Tag key={cat._id} color="blue">
              {cat.name?.vi}
            </Tag>
          ))}
        </Descriptions.Item>

        <Descriptions.Item label="Hình ảnh" span={2}>
          {product.image?.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`product-${index}`}
              width={100}
              style={{ marginRight: 8 }}
            />
          ))}
        </Descriptions.Item>

        <Descriptions.Item label="Ngày tạo">
          {new Date(product.createdAt).toLocaleString()}
        </Descriptions.Item>

        <Descriptions.Item label="Cập nhật lúc">
          {new Date(product.updatedAt).toLocaleString()}
        </Descriptions.Item>
      </Descriptions>
    </Modal>
  )
}

export default ProductDetailModal

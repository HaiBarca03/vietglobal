import React, { useEffect } from 'react'
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Upload,
  Button,
  Row,
  Col,
  message
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'

const { TextArea } = Input

const ProductEditModal = ({
  visible,
  onClose,
  product,
  onSave,
  categoryOptions = []
}) => {
  const [form] = Form.useForm()

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        titleVi: product.title?.vi,
        titleEn: product.title?.en,
        descVi: product.description?.vi,
        descEn: product.description?.en,
        slugVi: product.slug?.vi,
        slugEn: product.slug?.en,
        price: product.price,
        categories: product.categories?.map((cat) => cat._id)
      })
    }
  }, [product, form])

  const handleFinish = (values) => {
    const updatedProduct = {
      _id: product._id,
      title: { vi: values.titleVi, en: values.titleEn },
      description: { vi: values.descVi, en: values.descEn },
      slug: { vi: values.slugVi, en: values.slugEn },
      price: values.price,
      categories: values.categories
    }
    onSave(updatedProduct)
    form.resetFields()
  }

  return (
    <Modal
      open={visible}
      title="Chỉnh sửa sản phẩm"
      onCancel={onClose}
      onOk={() => form.submit()}
      okText="Lưu"
      cancelText="Huỷ"
      width={800}
    >
      <Form form={form} layout="vertical" onFinish={handleFinish}>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              label="Tên sản phẩm (VI)"
              name="titleVi"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Tên sản phẩm (EN)"
              name="titleEn"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Slug (VI)" name="slugVi">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Slug (EN)" name="slugEn">
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Mô tả (VI)" name="descVi">
              <TextArea rows={2} />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Mô tả (EN)" name="descEn">
              <TextArea rows={2} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Giá (VNĐ)"
              name="price"
              rules={[{ required: true }]}
            >
              <InputNumber style={{ width: '100%' }} min={0} step={1000} />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item
              label="Danh mục"
              name="categories"
              rules={[{ required: true }]}
            >
              <Select mode="multiple" placeholder="Chọn danh mục">
                {categoryOptions.map((cat) => (
                  <Select.Option key={cat._id} value={cat._id}>
                    {cat.name.vi}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Ảnh hiện tại">
              {product?.image?.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`product-${i}`}
                  style={{ width: 80, marginRight: 8, objectFit: 'cover' }}
                />
              ))}
            </Form.Item>
          </Col>

          {/* Optional: Upload mới - nếu bạn muốn cập nhật ảnh sau */}
          {/* <Col span={24}>
            <Form.Item label="Tải ảnh mới">
              <Upload beforeUpload={() => false} multiple>
                <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
              </Upload>
            </Form.Item>
          </Col> */}
        </Row>
      </Form>
    </Modal>
  )
}

export default ProductEditModal

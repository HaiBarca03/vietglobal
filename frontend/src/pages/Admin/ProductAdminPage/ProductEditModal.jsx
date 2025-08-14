import React, { useEffect, useState } from 'react'
import {
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Row,
  Col,
  message
} from 'antd'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const ProductEditModal = ({
  visible,
  onClose,
  product,
  onSave,
  categoryOptions = []
}) => {
  const [form] = Form.useForm()
  const [descVi, setDescVi] = useState('')
  const [descEn, setDescEn] = useState('')

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        titleVi: product.title?.vi,
        titleEn: product.title?.en,
        slugVi: product.slug?.vi,
        slugEn: product.slug?.en,
        // price: product.price,
        categories: product.categories?.map((cat) => cat._id)
      })
      setDescVi(product.description?.vi || '')
      setDescEn(product.description?.en || '')
    }
  }, [product, form])

  const handleFinish = (values) => {
    const updatedProduct = {
      _id: product._id,
      title: { vi: values.titleVi, en: values.titleEn },
      description: { vi: descVi, en: descEn },
      slug: { vi: values.slugVi, en: values.slugEn },
      price: values.price,
      categories: values.categories
    }
    onSave(updatedProduct)
    form.resetFields()
    setDescVi('')
    setDescEn('')
  }

  return (
    <Modal
      open={visible}
      title="Chỉnh sửa sản phẩm"
      onCancel={() => {
        onClose()
        form.resetFields()
        setDescVi('')
        setDescEn('')
      }}
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
            <Form.Item label="Mô tả (VI)" required>
              <SunEditor
                setContents={descVi}
                onChange={setDescVi}
                setOptions={{
                  height: 300,
                  buttonList: [
                    [
                      'undo',
                      'redo',
                      'font',
                      'fontSize',
                      'formatBlock',
                      'bold',
                      'underline',
                      'italic',
                      'strike',
                      'fontColor',
                      'hiliteColor',
                      'align',
                      'list',
                      'table',
                      'link',
                      'image',
                      'video',
                      'fullScreen',
                      'codeView',
                      'removeFormat'
                    ]
                  ],
                  defaultStyle: 'font-size: 16px;',
                  font: [
                    'Arial',
                    'Comic Sans MS',
                    'Courier New',
                    'Georgia',
                    'Tahoma',
                    'Trebuchet MS',
                    'Verdana'
                  ]
                }}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Mô tả (EN)" required>
              <SunEditor
                setContents={descEn}
                onChange={setDescEn}
                setOptions={{
                  height: 300,
                  buttonList: [
                    [
                      'undo',
                      'redo',
                      'font',
                      'fontSize',
                      'formatBlock',
                      'bold',
                      'underline',
                      'italic',
                      'strike',
                      'fontColor',
                      'hiliteColor',
                      'align',
                      'list',
                      'table',
                      'link',
                      'image',
                      'video',
                      'fullScreen',
                      'codeView',
                      'removeFormat'
                    ]
                  ],
                  defaultStyle: 'font-size: 16px;',
                  font: [
                    'Arial',
                    'Comic Sans MS',
                    'Courier New',
                    'Georgia',
                    'Tahoma',
                    'Trebuchet MS',
                    'Verdana'
                  ]
                }}
              />
            </Form.Item>
          </Col>

          {/* <Col span={12}>
            <Form.Item
              label="Giá (VNĐ)"
              name="price"
              rules={[{ required: true }]}
            >
              <InputNumber style={{ width: '100%' }} min={0} step={1000} />
            </Form.Item>
          </Col> */}

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
        </Row>
      </Form>
    </Modal>
  )
}

export default ProductEditModal

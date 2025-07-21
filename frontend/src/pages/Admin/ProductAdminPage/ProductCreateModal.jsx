import React, { useState } from 'react'
import { Modal, Form, Input, InputNumber, Select, Button, Upload } from 'antd'

const ProductCreateModal = ({
  visible,
  onClose,
  onCreate,
  categoryOptions
}) => {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])
  const normFile = (e) => {
    return Array.isArray(e) ? e : e?.fileList
  }
  const handleSubmit = () => {
    form.validateFields().then((values) => {
      const formData = new FormData()
      fileList.forEach((file) => {
        formData.append('image', file.originFileObj)
      })

      Object.entries(values).forEach(([key, val]) => {
        if (typeof val === 'object' && !Array.isArray(val)) {
          Object.entries(val).forEach(([subKey, subVal]) => {
            formData.append(`${key}[${subKey}]`, subVal)
          })
        } else if (Array.isArray(val)) {
          val.forEach((v, i) => {
            formData.append(`${key}[${i}]`, v)
          })
        } else {
          formData.append(key, val)
        }
      })

      onCreate(formData)
      form.resetFields()
      setFileList([])
    })
  }

  return (
    <Modal
      title="Thêm Sản phẩm"
      open={visible}
      onCancel={() => {
        form.resetFields()
        onClose()
      }}
      onOk={handleSubmit}
      okText="Thêm"
      cancelText="Huỷ"
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name={['title', 'vi']}
          label="Tên sản phẩm (VI)"
          rules={[{ required: true, message: 'Nhập tên sản phẩm' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['title', 'en']}
          label="Tên sản phẩm (EN)"
          rules={[{ required: true, message: 'Enter product name' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name={['description', 'vi']}
          label="Mô tả (VI)"
          rules={[{ required: true, message: 'Nhập mô tả' }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          name={['description', 'en']}
          label="Mô tả (EN)"
          rules={[{ required: true, message: 'Nhập mô tả' }]}
        >
          <Input.TextArea rows={3} />
        </Form.Item>

        <Form.Item
          label="Ảnh sản phẩm"
          name="image"
          valuePropName="fileList"
          getValueFromEvent={normFile}
          rules={[{ required: true, message: 'Vui lòng chọn ít nhất 1 ảnh' }]}
        >
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            multiple
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
          >
            {fileList.length >= 5 ? null : (
              <div>
                {/* <PlusOutlined /> */}
                <div style={{ marginTop: 8 }}>Tải lên</div>
              </div>
            )}
          </Upload>
        </Form.Item>

        <Form.Item
          name="price"
          label="Giá (VNĐ)"
          rules={[{ required: true, message: 'Nhập giá sản phẩm' }]}
        >
          <InputNumber min={0} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="categories"
          label="Danh mục"
          rules={[{ required: true, message: 'Chọn ít nhất 1 danh mục' }]}
        >
          <Select mode="multiple" placeholder="Chọn danh mục">
            {categoryOptions.map((cat) => (
              <Select.Option key={cat._id} value={cat._id}>
                {cat.name.vi}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default ProductCreateModal

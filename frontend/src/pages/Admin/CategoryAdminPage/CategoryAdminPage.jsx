import React, { useEffect, useState } from 'react'
import {
  Table,
  Button,
  Space,
  Modal,
  Form,
  Input,
  Popconfirm,
  message,
  Select
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import axios from 'axios'
import {
  createCategory,
  deleteCategory,
  getAllCategory,
  updateCategory
} from '../../../stores/Category/categoryApis'
import { useDispatch, useSelector } from 'react-redux'

const CategoryAdminPage = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0
  })
  const categoryList = useSelector((state) => state.category.categoryList || [])
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [editingCategory, setEditingCategory] = useState(null)
  const [form] = Form.useForm()

  useEffect(() => {
    dispatch(getAllCategory())
  }, [dispatch])

  useEffect(() => {
    if (Array.isArray(categoryList)) {
      setLoading(false)
    }
    setCategories(categoryList)
  }, [categoryList])

  const openAddModal = () => {
    setEditingCategory(null)
    form.resetFields()
    setModalVisible(true)
  }

  const openEditModal = (category) => {
    setEditingCategory(category)
    form.setFieldsValue({
      ...category,
      parent: category.parent?._id
    })
    setModalVisible(true)
  }

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteCategory(id))
      message.success('Đã xoá danh mục')
      await dispatch(getAllCategory())
    } catch (err) {
      message.error('Xoá thất bại')
    }
  }

  const handleFormSubmit = async (values) => {
    try {
      if (editingCategory) {
        const id = editingCategory._id
        await dispatch(updateCategory(id, values))
        message.success('Cập nhật thành công')
        await dispatch(getAllCategory())
      } else {
        await dispatch(createCategory(values))
        message.success('Thêm mới thành công')
        await dispatch(getAllCategory())
      }
      fetchCategories(pagination.current)
      setModalVisible(false)
    } catch (err) {
      message.error('Lưu thất bại')
    }
  }

  const columns = [
    {
      title: 'Tên (VI)',
      dataIndex: ['name', 'vi'],
      key: 'nameVi'
    },
    {
      title: 'Tên (EN)',
      dataIndex: ['name', 'en'],
      key: 'nameEn'
    },
    {
      title: 'Slug (VI)',
      dataIndex: ['slug', 'vi'],
      key: 'slugVi'
    },
    {
      title: 'Slug (EN)',
      dataIndex: ['slug', 'en'],
      key: 'slugEn'
    },
    {
      title: 'Danh mục cha (VI-EN)',
      key: 'parent',
      render: (_, record) => {
        const parentVi = record.parent?.name?.vi
        const parentEn = record.parent?.name?.en

        if (parentVi && parentEn) {
          return `${parentVi} - ${parentEn}`
        }

        return '—'
      }
    },
    {
      title: 'Hành động',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => openEditModal(record)}>
            Sửa
          </Button>
          <Popconfirm
            title="Bạn có chắc chắn muốn xoá?"
            onConfirm={() => handleDelete(record._id)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <Button danger type="link">
              Xoá
            </Button>
          </Popconfirm>
        </Space>
      )
    }
  ]

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: 16
        }}
      >
        <h2>Quản lý danh mục</h2>
        <Button type="primary" icon={<PlusOutlined />} onClick={openAddModal}>
          Thêm danh mục
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={categories}
        rowKey="_id"
        loading={loading}
        pagination={{
          current: pagination.current,
          total: pagination.total,
          pageSize: pagination.pageSize,
          onChange: (page) => fetchCategories(page)
        }}
      />

      <Modal
        title={editingCategory ? 'Sửa danh mục' : 'Thêm danh mục'}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
        okText="Lưu"
        cancelText="Huỷ"
      >
        <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
          <Form.Item
            label="Tên (VI)"
            name={['name', 'vi']}
            rules={[
              { required: true, message: 'Vui lòng nhập tên tiếng Việt' }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tên (EN)"
            name={['name', 'en']}
            rules={[{ required: true, message: 'Vui lòng nhập tên tiếng Anh' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả (VI)" name={['description', 'vi']}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item label="Mô tả (EN)" name={['description', 'en']}>
            <Input.TextArea rows={3} />
          </Form.Item>
          <Form.Item label="Danh mục cha" name="parent">
            <Select allowClear placeholder="Chọn danh mục cha">
              {categories
                .filter(
                  (cat) => !editingCategory || cat._id !== editingCategory._id
                )
                .map((cat) => (
                  <Select.Option key={cat._id} value={cat._id}>
                    {cat.name?.vi} - {cat.name?.en}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default CategoryAdminPage

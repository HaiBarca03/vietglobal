import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Card, message, Row, Col } from 'antd'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllContactUs,
  updateContactUs
} from '../../../stores/ContactUs/ContactUsApi'

const ContactAdminPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [contactId, setContactId] = useState(null)

  const contactUsDetails = useSelector(
    (state) => state.contactUs.contactUsDetails || []
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllContactUs())
  }, [dispatch])

  useEffect(() => {
    if (contactUsDetails._id) {
      setContactId(contactUsDetails._id)
      form.setFieldsValue({
        address: {
          vi: contactUsDetails.address?.vi || '',
          en: contactUsDetails.address?.en || ''
        },
        phone: contactUsDetails.phone || '',
        email: contactUsDetails.email || '',
        website: contactUsDetails.website || '',
        social_links: {
          facebook: contactUsDetails.social_links?.facebook || '',
          instagram: contactUsDetails.social_links?.instagram || '',
          zalo: contactUsDetails.social_links?.zalo || '',
          linkedin: contactUsDetails.social_links?.linkedin || ''
        }
      })
    }
  }, [contactUsDetails, form])

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      await dispatch(updateContactUs(contactId, values))
      message.success('Cập nhật thành công!')
    } catch (err) {
      message.error('Cập nhật thất bại')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="Quản lý thông tin liên hệ" bordered={false}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        disabled={loading}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Địa chỉ (VI)" name={['address', 'vi']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Address (EN)" name={['address', 'en']}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Số điện thoại" name="phone">
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Email" name="email">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Website" name="website">
              <Input />
            </Form.Item>
          </Col>

          <Col span={12}>
            <Form.Item label="Facebook" name={['social_links', 'facebook']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Instagram" name={['social_links', 'instagram']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Zalo" name={['social_links', 'zalo']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="LinkedIn" name={['social_links', 'linkedin']}>
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </Card>
  )
}

export default ContactAdminPage

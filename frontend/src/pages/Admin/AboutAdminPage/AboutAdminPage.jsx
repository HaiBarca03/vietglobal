import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Card, Row, Col, message } from 'antd'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAboutUsId, updateAboutUs } from '../../../stores/AboutUs/AboutUsApi'

import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'

const AboutAdminPage = () => {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)
  const [aboutId, setAboutId] = useState(null)

  const aboutUsDetails = useSelector(
    (state) => state.aboutUs.aboutUsDetails || []
  )
  const dispatch = useDispatch()

  const [descVI, setDescVI] = useState('')
  const [descEN, setDescEN] = useState('')

  useEffect(() => {
    dispatch(getAboutUsId())
  }, [dispatch])

  useEffect(() => {
    if (aboutUsDetails) {
      setAboutId(aboutUsDetails._id)
      form.setFieldsValue({
        name: {
          vi: aboutUsDetails.name?.vi || '',
          en: aboutUsDetails.name?.en || ''
        }
      })
      setDescVI(aboutUsDetails.description?.vi || '')
      setDescEN(aboutUsDetails.description?.en || '')
    }
  }, [aboutUsDetails, form])

  const handleSubmit = async (values) => {
    try {
      setLoading(true)
      const updatedData = {
        ...values,
        description: {
          vi: descVI,
          en: descEN
        }
      }
      await dispatch(updateAboutUs(aboutId, updatedData))
      await dispatch(getAboutUsId())

      message.success('Cập nhật thành công!')
    } catch (err) {
      console.error(err)
      message.error('Cập nhật thất bại')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="Quản lý Giới Thiệu (About Us)" bordered={false}>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleSubmit}
        disabled={loading}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Tên mục (VI)" name={['name', 'vi']}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Tên mục (EN)" name={['name', 'en']}>
              <Input />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Nội dung (VI)">
              <SunEditor
                setContents={descVI}
                onChange={setDescVI}
                setOptions={{
                  height: 200,
                  buttonList: [['bold', 'italic', 'underline', 'list', 'link']]
                }}
              />
            </Form.Item>
          </Col>

          <Col span={24}>
            <Form.Item label="Nội dung (EN)">
              <SunEditor
                setContents={descEN}
                onChange={setDescEN}
                setOptions={{
                  height: 200,
                  buttonList: [['bold', 'italic', 'underline', 'list', 'link']]
                }}
              />
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

export default AboutAdminPage

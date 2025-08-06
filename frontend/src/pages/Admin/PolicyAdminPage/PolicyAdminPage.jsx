import React, { useEffect, useState } from 'react'
import { Form, Input, Button, Card, Row, Col, message } from 'antd'
import SunEditor from 'suneditor-react'
import 'suneditor/dist/css/suneditor.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPolicy, updatePolicy } from '../../../stores/Policy/PolicyApi'

const PolicyAdminPage = () => {
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  const [descVI, setDescVI] = useState('')
  const [descEN, setDescEN] = useState('')
  const [loading, setLoading] = useState(false)
  const [policyId, setPolicyId] = useState(null)

  const policyList = useSelector((state) => state.policy.policyList || [])
  const firstPolicy = policyList.length > 0 ? policyList[0] : null

  useEffect(() => {
    dispatch(getAllPolicy())
  }, [dispatch])

  useEffect(() => {
    if (firstPolicy) {
      setPolicyId(firstPolicy._id)
      form.setFieldsValue({
        name: {
          vi: firstPolicy.name?.vi || '',
          en: firstPolicy.name?.en || ''
        }
      })
      setDescVI(firstPolicy.description?.vi || '')
      setDescEN(firstPolicy.description?.en || '')
    }
  }, [firstPolicy, form])

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
      await dispatch(updatePolicy(policyId, updatedData))
      await dispatch(getAllPolicy())
      message.success('Cập nhật thành công!')
    } catch (error) {
      console.error(error)
      message.error('Cập nhật thất bại!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card title="Quản lý Chính sách (Policy)" bordered={false}>
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
            <Form.Item label="Mô tả (VI)">
              <SunEditor
                setContents={descVI}
                onChange={setDescVI}
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
            <Form.Item label="Mô tả (EN)">
              <SunEditor
                setContents={descEN}
                onChange={setDescEN}
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

export default PolicyAdminPage

import React from 'react';
import { Typography, Row, Col, Space } from 'antd';
import {
    PhoneOutlined,
    MailOutlined,
    WhatsAppOutlined,
    EnvironmentOutlined,
    GlobalOutlined
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllContactUs } from '../../stores/ContactUs/ContactUsApi';

const { Title, Paragraph } = Typography;

const TEAL = '#00B5B8';

const FooterShipping = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'vi';
    const dispatch = useDispatch();
    const contactUsDetails = useSelector(state => state.contactUs.contactUsDetails || {});

    useEffect(() => {
        dispatch(getAllContactUs());
    }, [dispatch]);
    return (
        <div
            style={{
                background: '#0a1f3a', // dark blue như ảnh, bạn có thể chỉnh #001f3f hoặc #0d2b4e
                color: '#fff',
                padding: '60px 40px 40px',
                position: 'relative',
                overflow: 'hidden',
                borderTopLeftRadius: 80, // bo góc trên trái lớn như curve trong ảnh
                borderTopRightRadius: 80,
            }}
        >
            {/* Curve overlay nếu muốn giống hơn (optional) */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 100,
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.05), transparent)',
                    pointerEvents: 'none',
                }}
            />

            <div
                style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            >
                <Title
                    level={3}
                    style={{
                        color: TEAL, // hoặc "#00d4ff" cho sáng hơn
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 800,
                        fontSize: 32,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        marginBottom: 32,
                    }}
                >
                    VIETGLOBAL IMPORT EXPORT TRADING PRODUCTION COMPANY LIMITED.
                </Title>

                <Row gutter={[40, 40]} justify="center" style={{ textAlign: 'left', marginTop: 40, marginBottom: 40 }}>
                    {/* Hotline Column */}
                    <Col xs={24} sm={24} md={8}>
                        <Title level={4} style={{ color: TEAL, textTransform: 'uppercase', marginBottom: 20 }}>
                            <PhoneOutlined style={{ marginRight: 10 }} />
                            Hotline Service
                        </Title>
                        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>Phone:</Paragraph>
                                <a href={`tel:${contactUsDetails.phone || '0346779622'}`} style={{ color: '#d0e8ff', textDecoration: 'none' }}>
                                    {contactUsDetails.phone || '(+84) 0346779622'}
                                </a>
                            </div>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>Staff Support:</Paragraph>
                                <div style={{ color: '#d0e8ff' }}>
                                    {contactUsDetails.phone2?.[lang] || t('contactInfo.phone2')}
                                </div>
                            </div>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>WhatsApp:</Paragraph>
                                <Space>
                                    <WhatsAppOutlined style={{ color: '#25D366' }} />
                                    <a href="https://wa.me/84763205365" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e8ff', textDecoration: 'none' }}>
                                        (+84) 0763205365
                                    </a>
                                </Space>
                            </div>
                        </Space>
                    </Col>

                    {/* Email Column */}
                    <Col xs={24} sm={24} md={8}>
                        <Title level={4} style={{ color: TEAL, textTransform: 'uppercase', marginBottom: 20 }}>
                            <MailOutlined style={{ marginRight: 10 }} />
                            Connect With Us
                        </Title>
                        <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>General Email:</Paragraph>
                                <a href="mailto:Vietglobal8@gmail.com" style={{ color: '#d0e8ff', textDecoration: 'none' }}>
                                    Vietglobal8@gmail.com
                                </a>
                            </div>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>Department (Ngọc):</Paragraph>
                                <a href="mailto:myngocvietgobal@gmail.com" style={{ color: '#d0e8ff', textDecoration: 'none' }}>
                                    myngocvietgobal@gmail.com
                                </a>
                            </div>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>Official Website:</Paragraph>
                                <Space>
                                    <GlobalOutlined />
                                    <a href="https://www.vietgloballogitics.com" target="_blank" rel="noopener noreferrer" style={{ color: '#d0e8ff', textDecoration: 'none' }}>
                                        www.vietgloballogitics.com
                                    </a>
                                </Space>
                            </div>
                        </Space>
                    </Col>

                    {/* Locations Column */}
                    <Col xs={24} sm={24} md={8}>
                        <Title level={4} style={{ color: TEAL, textTransform: 'uppercase', marginBottom: 20 }}>
                            <EnvironmentOutlined style={{ marginRight: 10 }} />
                            Our Offices
                        </Title>
                        <Space direction="vertical" size="large" style={{ width: '100%' }}>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>Head Office:</Paragraph>
                                <div style={{ color: '#d0e8ff', lineHeight: 1.6 }}>
                                    {t('contactInfo.address')}
                                </div>
                            </div>
                            <div>
                                <Paragraph style={{ color: '#fff', marginBottom: 4, fontWeight: 600 }}>Branch Address:</Paragraph>
                                <div style={{ color: '#d0e8ff', lineHeight: 1.6 }}>
                                    {t('contactInfo.address1')}
                                </div>
                            </div>
                        </Space>
                    </Col>
                </Row>

                {/* Bottom bar */}
                <div
                    style={{
                        borderTop: '1px solid rgba(255,255,255,0.15)',
                        paddingTop: 24,
                        fontSize: 14,
                        color: '#a0c0ff',
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 40,
                        flexWrap: 'wrap',
                    }}
                >
                    <div>Designed By VietGlobal</div>
                    <div>Copyright © 2026 VIETGLOBAL LOGISTICS. All rights reserved.</div> {/* cập nhật năm nếu cần */}
                </div>
            </div>
        </div>
    );
};

export default FooterShipping;

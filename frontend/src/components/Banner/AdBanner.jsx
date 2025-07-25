import React from 'react'
import { Carousel, Button } from 'antd'
import './AdBanner.css'

const banners = [
  {
    id: 1,
    title: 'VietGlobal',
    description: 'Kết nối nông lâm sản Việt với thế giới',
    image:
      'https://vstatic.vietnam.vn/vietnam/resource/IMAGE/2025/7/14/e151df377d5e4819aa761b11f228941b'
  },
  {
    id: 2,
    title: 'Đảm bảo',
    description: 'Uy tín – Bền vững – Chất lượng hàng đầu',
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/13/20/port-1845350_1280.jpg'
  },
  {
    id: 3,
    title: 'Sứ mệnh',
    description: 'Đồng hành cùng nông sản Việt vươn ra toàn cầu',
    image:
      'https://nld.mediacdn.vn/291774122806476800/2022/1/30/xk2-16435297552741167554561.jpeg'
  },
  {
    id: 3,
    title: 'Giá trị quốc tế',
    description: 'Tiêu chuẩn quốc tế – Giá trị Việt Nam',
    image:
      'https://moit.gov.vn/upload/2005517/fck/files/Ng__nh-xu___t-nh___p-kh___u-l__-g___99d98.jpg'
  }
]

const AdBanner = () => {
  return (
    <div className="ad-banner-container">
      <Carousel autoplay>
        {banners.map((banner) => (
          <div key={banner.id} className="ad-slide">
            <div
              className="ad-slide-bg"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="ad-overlay" />
              <div className="ad-content">
                <h2>{banner.title}</h2>
                <p>{banner.description}</p>
                {/* <Button type="primary" size="large">
                  {banner.buttonText}
                </Button> */}
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default AdBanner

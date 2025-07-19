import React from 'react'
import { Carousel, Button } from 'antd'
import './AdBanner.css'

const banners = [
  {
    id: 1,
    title: 'Mua vé xem phim online',
    description: 'Nhanh chóng - Tiện lợi - Không cần xếp hàng!',
    image:
      'https://oriagency.vn/wp-content/uploads/2024/12/kich-thuoc-banner-shopee-1.png',
    buttonText: 'Xem ngay'
  },
  {
    id: 2,
    title: 'Ưu đãi thành viên',
    description: 'Giảm giá 50% cho lần mua đầu tiên',
    image:
      'https://pos.nvncdn.com/14f951-12134/art/artCT/20230723_Vne80hqk.jpg',
    buttonText: 'Đăng ký'
  },
  {
    id: 3,
    title: 'Suất chiếu đặc biệt',
    description: 'Chỉ có vào cuối tuần! Số lượng có hạn!',
    image:
      'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhX49R1h2sYl1-4SDeYkru_NdSNh_ac71AU4vj2KCumAmtlPC223bSNcZr-L-3pgIo0ota_jbBFlGzBjWvhMTK1PM97xOaQZF-0P_cECxGdTyc6twe0SVVMzt6_wGuui6uMd63hLvn-NTYAVDxZU4vU7bvgNQiK88rjsW2EJEUSvHqQUkSSe_IfR8LlFQ/s1920/cong-dong-thiet-ke-shopee.jpg',
    buttonText: 'Đặt vé'
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
              {/* <div className="ad-content">
                <h2>{banner.title}</h2>
                <p>{banner.description}</p>
                <Button type="primary" size="large">
                  {banner.buttonText}
                </Button>
              </div> */}
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default AdBanner

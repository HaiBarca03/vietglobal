import React from 'react'
import './HomeLogitics.css'
import OrderProcessFlow from '../../components/Logistics/OrderProcessFlow/OrderProcessFlow'
import OrderTool from '../../components/Logistics/OrderTool/OrderTool'
import AppStats from '../../components/Logistics/AppStats/AppStats'
import ServiceCommitment from '../../components/Logistics/ServiceCommitment/ServiceCommitment'
import Testimonials from '../../components/Logistics/Testimonials/Testimonials'
import HomeBannerSlider from '../../components/Logistics/HomeBannerSlider/HomeBannerSlider'

const HomeLogitics = () => {
  return (
    <div className="logistics-cn-vn-scope">
      <HomeBannerSlider />
      <OrderProcessFlow />
      {/* <OrderTool /> */}
      <AppStats />
      <ServiceCommitment />
      <Testimonials />
    </div>
  )
}

export default HomeLogitics

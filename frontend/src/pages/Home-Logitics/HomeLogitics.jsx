import React from 'react'
import OrderProcessFlow from '../../components/Logistics/OrderProcessFlow/OrderProcessFlow'
import OrderTool from '../../components/Logistics/OrderTool/OrderTool'
import AppStats from '../../components/Logistics/AppStats/AppStats'
import ServiceCommitment from '../../components/Logistics/ServiceCommitment/ServiceCommitment'
import Testimonials from '../../components/Logistics/Testimonials/Testimonials'
import HomeBannerSlider from '../../components/Logistics/HomeBannerSlider/HomeBannerSlider'
// import VietGlobalTestimonials from '../../components/Logistics/VietGlobalTestimonials/VietGlobalTestimonials'

const HomeLogitics = () => {
  return (
    <div>
      <HomeBannerSlider/>
      <OrderProcessFlow />
      <OrderTool/>
      <AppStats/>
      <ServiceCommitment/>
      <Testimonials/>
      {/* <VietGlobalTestimonials/> */}
    </div>
  )
}

export default HomeLogitics

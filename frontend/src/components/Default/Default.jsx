import './Default.css'
import Header from '../Header/Header'
import AppFooter from '../Footer/Footer'
import FooterShipping from '../Footer/FooterShipping'

const Default = ({ children , footerType }) => {
  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <div className="main-content">{children}</div>
      </div>
      {footerType === "shipping" && <FooterShipping />}
      {footerType === "" && <AppFooter />}
     
    </div>
  )
}

export default Default

import React, { StrictMode } from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'antd/dist/reset.css'
import store from './stores/store.js'
import { Provider } from 'react-redux'
import '../src/i18n.js'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)

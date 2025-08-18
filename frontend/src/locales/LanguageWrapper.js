import { useParams, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import i18n from '../i18n'

function LanguageWrapper({ children }) {
  const { lang } = useParams()
  const navigate = useNavigate()
  // console.log('Current language:', lang)
  useEffect(() => {
    if (lang && ['vi', 'en'].includes(lang)) {
      i18n.changeLanguage(lang)
    } else {
      navigate('/en', { replace: true })
    }
  }, [lang])

  return children
}

export default LanguageWrapper

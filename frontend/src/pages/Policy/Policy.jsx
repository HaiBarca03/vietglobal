import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllPolicy } from '../../stores/Policy/PolicyApi'
import './Policy.css'

const Policy = () => {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const lang = i18n.language || 'vi'
  const policyLists = useSelector((state) => state.policy.policyList)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllPolicy())
  }, [dispatch])

  const firstPolicy =
    policyLists && policyLists.length > 0 ? policyLists[0] : null

  return (
    <div className="policy-container">
      {firstPolicy ? (
        <div>
          <div className="policy-header">
            <div className="breadcrumb">Home / {firstPolicy.name?.[lang]}</div>
            <h2 className="policy-title">{firstPolicy.name?.[lang]}</h2>
          </div>
          <div
            className="policy-description"
            dangerouslySetInnerHTML={{
              __html: firstPolicy.description?.[lang] || ''
            }}
          />
        </div>
      ) : (
        <div className="no-products">Không có chính sách nào</div>
      )}
    </div>
  )
}

export default Policy

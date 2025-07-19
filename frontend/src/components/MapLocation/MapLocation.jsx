import React from 'react'
import { useTranslation } from 'react-i18next'

const MapLocation = () => {
  const { i18n } = useTranslation()
  const lang = i18n.language || 'vi'

  return (
    <div className="map-location-section">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.896370266924!2d106.68943081533191!3d20.93765148606365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359b80297e6b17%3A0xf06359db04de1511!2zSOG6o2kgxJDhu6ljLCBI4bqjaSDEkMOgbmc!5e0!3m2!1svi!2s!4v1627981733404!5m2!1svi!2s"
        width="100%"
        height="660"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default MapLocation

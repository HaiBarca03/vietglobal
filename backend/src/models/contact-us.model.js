const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema(
  {
    address: {
      vi: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true }
    },
    address2: {
      vi: { type: String, trim: true, default: '' },
      en: { type: String, trim: true, default: '' }
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    phone2: {
      vi: { type: String, trim: true, default: '' },
      en: { type: String, trim: true, default: '' }
    },
    email: {
      type: String,
      required: true,
      trim: true
    },
    website: {
      type: String,
      trim: true
    },
    social_links: {
      facebook: { type: String, default: '' },
      instagram: { type: String, default: '' },
      zalo: { type: String, default: '' },
      linkedin: { type: String, default: '' }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('ContactUs', contactUsSchema)

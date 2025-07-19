const mongoose = require('mongoose')

const contactUsSchema = new mongoose.Schema(
  {
    address: {
      vi: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true }
    },
    phone: {
      type: String,
      required: true,
      trim: true
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

const mongoose = require('mongoose')

const aboutUsSchema = new mongoose.Schema(
  {
    name: {
      vi: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true }
    },
    description: {
      vi: { type: String },
      en: { type: String }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('AboutUs', aboutUsSchema)

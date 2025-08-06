const mongoose = require('mongoose')

const policySchema = new mongoose.Schema(
  {
    name: {
      vi: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true }
    },
    description: {
      vi: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true }
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Policy', policySchema)

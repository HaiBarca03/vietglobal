const mongoose = require('mongoose')
const slugify = require('slugify')
const removeAccents = require('remove-accents')

const categorySchema = new mongoose.Schema(
  {
    name: {
      vi: { type: String, required: true, trim: true },
      en: { type: String, required: true, trim: true }
    },
    slug: {
      vi: { type: String, unique: true },
      en: { type: String, unique: true }
    },
    description: {
      vi: { type: String },
      en: { type: String }
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
      }
    ]
  },
  {
    timestamps: true
  }
)

categorySchema.pre('save', function (next) {
  if (this.isModified('name.vi') || this.isNew) {
    const nameVi = removeAccents(this.name.vi)
    this.slug.vi = slugify(nameVi, { lower: true, strict: true })
  }
  if (this.isModified('name.en') || this.isNew) {
    this.slug.en = slugify(this.name.en, { lower: true, strict: true })
  }
  next()
})

module.exports = mongoose.model('Category', categorySchema)

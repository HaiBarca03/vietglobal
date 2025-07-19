const mongoose = require('mongoose')
const slugify = require('slugify')

const productSchema = new mongoose.Schema(
  {
    image: {
      type: [String],
      required: true
    },
    title: {
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
    price: {
      type: Number,
      required: true
    },
    categories: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
      }
    ]
  },
  {
    timestamps: true
  }
)

productSchema.pre('save', function (next) {
  if (this.isModified('title.vi') || this.isNew) {
    this.slug.vi = slugify(this.title.vi, { lower: true, strict: true })
  }
  if (this.isModified('title.en') || this.isNew) {
    this.slug.en = slugify(this.title.en, { lower: true, strict: true })
  }
  next()
})

module.exports = mongoose.model('Product', productSchema)

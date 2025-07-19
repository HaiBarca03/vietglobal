const Product = require('../models/product.model')
const cloudinary = require('../config/cloudinary.config')
const fs = require('fs')

const uploadToCloudinary = async (filePath) => {
  const result = await cloudinary.uploader.upload(filePath, {
    folder: 'products-vietglobal'
  })
  fs.unlinkSync(filePath)
  return result.secure_url
}

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('categories')

    res.status(200).json({
      message: 'Fetched all products successfully',
      products
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params

    const product = await Product.findById(id).populate('categories')

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json({
      message: 'Product fetched successfully',
      product
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const getProductBySlug = async (req, res) => {
  try {
    const { lang, slug } = req.params

    if (!['vi', 'en'].includes(lang)) {
      return res.status(400).json({ message: 'Invalid language code' })
    }

    const query = {}
    query[`slug.${lang}`] = slug

    const product = await Product.findOne(query).populate('categories')

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    res.status(200).json({
      message: 'Product fetched successfully',
      product
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const createProduct = async (req, res) => {
  try {
    const { title, description, price, categories } = req.body

    const imageUrls = await Promise.all(
      req.files.map((file) => uploadToCloudinary(file.path))
    )

    const product = new Product({
      image: imageUrls,
      title: JSON.parse(title),
      description: JSON.parse(description),
      price,
      categories: JSON.parse(categories)
    })

    await product.save()
    res.status(201).json({ message: 'Product created successfully', product })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params
    let { title, description, price, categories } = req.body

    if (typeof title === 'string') title = JSON.parse(title)
    if (typeof description === 'string') description = JSON.parse(description)
    if (typeof categories === 'string') categories = JSON.parse(categories)

    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    if (title) product.title = title
    if (description) product.description = description
    if (price) product.price = price
    if (categories) product.categories = categories

    if (req.files && req.files.length > 0) {
      const imageUrls = await Promise.all(
        req.files.map((file) => uploadToCloudinary(file.path))
      )
      product.image = imageUrls
    }

    await product.save()
    res.status(200).json({
      message: 'Product updated successfully',
      product
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params

    const product = await Product.findById(id)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    const deletePromises = product.image.map((imageUrl) => {
      const publicId = imageUrl
        .split('/')
        .slice(-2)
        .join('/')
        .replace(/\.[^/.]+$/, '')

      return cloudinary.uploader.destroy(publicId)
    })

    await Promise.all(deletePromises)

    await product.deleteOne()

    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductBySlug
}

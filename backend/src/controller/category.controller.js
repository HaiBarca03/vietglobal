const Category = require('../models/category.model')
const Product = require('../models/product.model')
const paginate = require('../utils/paginate')

const createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body)
    res.status(201).json({ message: 'Category created', category })
  } catch (err) {
    res.status(500).json({ message: 'Create failed', error: err.message })
  }
}

const getAllCategories = async (req, res) => {
  try {
    const { page, limit } = req.query

    const result = await paginate(
      Category,
      {},
      {
        page,
        limit,
        populate: 'products'
      }
    )

    res.json(result)
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message })
  }
}

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id).populate('products')
    if (!category) return res.status(404).json({ message: 'Not found' })
    res.json(category)
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message })
  }
}

const updateCategory = async (req, res) => {
  try {
    const updated = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!updated) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Category updated', category: updated })
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message })
  }
}

const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Not found' })
    res.json({ message: 'Category deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message })
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
}

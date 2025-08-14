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
        populate: [{ path: 'products' }, { path: 'parent' }]
      }
    )

    res.json(result)
  } catch (err) {
    res.status(500).json({ message: 'Fetch failed', error: err.message })
  }
}

const getAllCategoriesMenu = async (req, res) => {
  try {
    const categories = await Category.find({}).select('name slug parent').lean()
    const parents = categories.filter((cat) => !cat.parent)

    const result = parents.map((parent) => ({
      _id: parent._id,
      name: parent.name,
      slug: parent.slug,
      children: categories
        .filter((cat) => String(cat.parent) === String(parent._id))
        .map((child) => ({
          _id: child._id,
          name: child.name,
          slug: child.slug
        }))
    }))
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
    const category = await Category.findById(req.params.id)
    if (!category) {
      return res.status(404).json({ message: 'Category not found' })
    }

    if (req.body.name?.vi) category.name.vi = req.body.name.vi
    if (req.body.name?.en) category.name.en = req.body.name.en

    if (req.body.description?.vi !== undefined)
      category.description.vi = req.body.description.vi
    if (req.body.description?.en !== undefined)
      category.description.en = req.body.description.en

    if (req.body.hasOwnProperty('parent')) {
      category.parent = req.body.parent === '' ? null : req.body.parent
    }

    const updated = await category.save()

    res.json({ message: 'Category updated', category: updated })
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message })
  }
}

const deleteCategory = async (req, res) => {
  try {
    const deleted = await Category.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Category not found' })

    await Category.updateMany(
      { parent: req.params.id },
      { $set: { parent: null } }
    )

    res.json({ message: 'Category deleted and child categories updated' })
  } catch (err) {
    res.status(500).json({ message: 'Delete failed', error: err.message })
  }
}

module.exports = {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategoriesMenu
}

const express = require('express')
const router = express.Router()
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory
} = require('../controller/category.controller')
const { isAdmin } = require('../middleware/auth')

router.post('/', isAdmin, createCategory)
router.get('/', getAllCategories)
router.get('/:id', getCategoryById)
router.put('/:id', isAdmin, updateCategory)
router.delete('/:id', isAdmin, deleteCategory)

module.exports = router

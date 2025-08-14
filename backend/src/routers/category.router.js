const express = require('express')
const router = express.Router()
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getAllCategoriesMenu
} = require('../controller/category.controller')
const { isAdmin } = require('../middleware/auth')

router.post('/', createCategory)
router.get('/', getAllCategories)
router.get('/menu', getAllCategoriesMenu)
router.get('/:id', getCategoryById)
router.put('/:id', updateCategory)
router.delete('/:id', deleteCategory)

module.exports = router

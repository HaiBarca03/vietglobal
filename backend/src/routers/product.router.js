const express = require('express')
const router = express.Router()
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  getProductBySlug,
  getProductsByCategorySlugLang
} = require('../controller/product.controller')
const { isAdmin } = require('../middleware/auth')
const { uploadImages } = require('../utils/uploadCloudinary')

router.get('/', getAllProducts)
router.get('/:id', getProductById)
router.get('/category/:lang/:slug', getProductsByCategorySlugLang)
router.get('/:lang/:slug', getProductBySlug)
router.post('/', isAdmin, uploadImages, createProduct)
router.put('/:id', isAdmin, uploadImages, updateProduct)
router.delete('/:id', isAdmin, deleteProduct)

module.exports = router

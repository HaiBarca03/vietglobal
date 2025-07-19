const express = require('express')
const router = express.Router()
const {
  createAboutUs,
  getAllAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs
} = require('../controller/about-us.controller')
const { isAdmin } = require('../middleware/auth')

router.post('/', createAboutUs)
router.get('/', getAllAboutUs)
router.get('/:id', getAboutUsById)
router.put('/:id', isAdmin, updateAboutUs)
router.delete('/:id', isAdmin, deleteAboutUs)

module.exports = router

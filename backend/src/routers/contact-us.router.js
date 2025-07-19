const express = require('express')
const router = express.Router()
const {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact
} = require('../controller/contact-us.controller')
const { isAdmin } = require('../middleware/auth')

router.post('/', createContact)
router.get('/', getAllContacts)
router.get('/:id', getContactById)
router.put('/:id', isAdmin, updateContact)
router.delete('/:id', isAdmin, deleteContact)

module.exports = router

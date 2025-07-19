const express = require('express')
const router = express.Router()
const {
  registerAdmin,
  registerUser,
  loginUser,
  updateUser,
  deleteUser
} = require('../controller/user.controller')
const { isAdmin } = require('../middleware/auth')

router.post('/register-admin', registerAdmin)
router.post('/register-user', registerUser)
router.post('/login', loginUser)
router.put('/:id', isAdmin, updateUser)
router.delete('/:id', isAdmin, deleteUser)

module.exports = router

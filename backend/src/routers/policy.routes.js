const express = require('express')
const router = express.Router()
const {
  createPolicy,
  getAllPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy
} = require('../controller/policy.controller')
const { isAdmin } = require('../middleware/auth')

router.post('/', isAdmin, createPolicy)
router.get('/', getAllPolicies)
router.get('/:id', getPolicyById)
router.put('/:id', isAdmin, updatePolicy)
router.delete('/:id', isAdmin, deletePolicy)

module.exports = router

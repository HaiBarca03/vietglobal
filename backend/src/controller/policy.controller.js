const Policy = require('../models/policy.model')

const createPolicy = async (req, res) => {
  try {
    const policy = new Policy(req.body)
    await policy.save()
    res.status(201).json(policy)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const getAllPolicies = async (req, res) => {
  try {
    const policies = await Policy.find().sort({ createdAt: -1 })
    res.status(200).json(policies)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getPolicyById = async (req, res) => {
  try {
    const policy = await Policy.findById(req.params.id)
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' })
    }
    res.status(200).json(policy)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updatePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' })
    }
    res.status(200).json(policy)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

const deletePolicy = async (req, res) => {
  try {
    const policy = await Policy.findByIdAndDelete(req.params.id)
    if (!policy) {
      return res.status(404).json({ message: 'Policy not found' })
    }
    res.status(200).json({ message: 'Policy deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  createPolicy,
  getAllPolicies,
  getPolicyById,
  updatePolicy,
  deletePolicy
}

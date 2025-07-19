const AboutUs = require('../models/about-us.model')

const createAboutUs = async (req, res) => {
  try {
    const aboutUs = new AboutUs(req.body)
    await aboutUs.save()
    res.status(201).json({ message: 'Created successfully', aboutUs })
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error })
  }
}

const getAllAboutUs = async (req, res) => {
  try {
    const aboutUsEntries = await AboutUs.find()
    res.status(200).json(aboutUsEntries)
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch data', error })
  }
}

const getAboutUsById = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findById(req.params.id)
    if (!aboutUs) return res.status(404).json({ message: 'Not found' })
    res.status(200).json(aboutUs)
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error })
  }
}

const updateAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!aboutUs) return res.status(404).json({ message: 'Not found' })
    res.status(200).json({ message: 'Updated successfully', aboutUs })
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error })
  }
}

const deleteAboutUs = async (req, res) => {
  try {
    const aboutUs = await AboutUs.findByIdAndDelete(req.params.id)
    if (!aboutUs) return res.status(404).json({ message: 'Not found' })
    res.status(200).json({ message: 'Deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error })
  }
}

module.exports = {
  createAboutUs,
  getAllAboutUs,
  getAboutUsById,
  updateAboutUs,
  deleteAboutUs
}

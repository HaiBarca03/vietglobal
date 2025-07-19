const ContactUs = require('../models/contact-us.model')

const createContact = async (req, res) => {
  try {
    const contact = new ContactUs(req.body)
    await contact.save()
    res.status(201).json({ message: 'Contact created successfully', contact })
  } catch (error) {
    res.status(500).json({ message: 'Create failed', error })
  }
}

const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactUs.find()
    res.status(200).json(contacts)
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error })
  }
}

const getContactById = async (req, res) => {
  try {
    const contact = await ContactUs.findById(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.status(200).json(contact)
  } catch (error) {
    res.status(500).json({ message: 'Fetch failed', error })
  }
}

const updateContact = async (req, res) => {
  try {
    const contact = await ContactUs.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.status(200).json({ message: 'Contact updated successfully', contact })
  } catch (error) {
    res.status(500).json({ message: 'Update failed', error })
  }
}

const deleteContact = async (req, res) => {
  try {
    const contact = await ContactUs.findByIdAndDelete(req.params.id)
    if (!contact) return res.status(404).json({ message: 'Contact not found' })
    res.status(200).json({ message: 'Contact deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Delete failed', error })
  }
}

module.exports = {
  createContact,
  getAllContacts,
  getContactById,
  updateContact,
  deleteContact
}

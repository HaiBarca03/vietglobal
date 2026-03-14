const express = require('express')
const { handleContactForm } = require("../mailer/mailer.controller");

const router = express.Router();

router.post("/send-contact", handleContactForm);

module.exports = router;
const express = require('express')
const router = express.Router()
const { sendContact, getContacts, deleteContact } = require('../controllers/contactController')
const authMiddleware = require('../middleware/authMiddleware')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')

router.post("/send", sendContact)
router.get("/all", authMiddleware, roleCheckMiddleware('admin'), getContacts)
router.delete("/delete/:id", authMiddleware, roleCheckMiddleware('admin'), deleteContact)

module.exports = router
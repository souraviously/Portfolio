const express = require('express')
const router = express.Router()
const { signUp, signIn, getProfile } = require('../controllers/authController')
const authMiddleware = require('../middleware/authMiddleware')

// -------------------------- Sign Up
router.post('/signup', signUp)
router.post('/signin', signIn)
router.get('/profile', authMiddleware, getProfile)

module.exports = router

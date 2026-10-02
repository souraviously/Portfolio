const express = require('express')
const router = express.Router()
const auth = require('./auth')
const category = require('./category')
const projects = require('./projects')
const contact = require('./contact')

// ------------ All routes 
router.use('/auth', auth)
router.use('/category', category)
router.use('/projects', projects)
router.use('/contact', contact)



// ------------ Test Route 
router.get('/', (req, res) => { res.send("Hello world") })

// --------- Not Found 
router.use((req, res) => { res.status(404).send('404 Page Not Found') })

module.exports = router
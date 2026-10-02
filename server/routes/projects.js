const express = require('express')
const router = express.Router()
const { addProject, getAll, deleteProduct, getFeatured } = require("../controllers/ProjectsController")
const authMiddleware = require('../middleware/authMiddleware')
const roleCheckMiddleware = require('../middleware/roleCheckMiddleware')
const multer = require('multer')
const upload = multer()


router.post('/add', authMiddleware, roleCheckMiddleware("admin"), upload.single('thumbnail'), addProject)
router.delete('/delete', authMiddleware, roleCheckMiddleware("admin"), deleteProduct)
router.get("/", getAll)
router.get("/featured", getFeatured)


module.exports = router
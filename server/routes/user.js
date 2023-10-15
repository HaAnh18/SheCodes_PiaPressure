const express = require('express')
const router = express.Router()
const user = require('../controllers/userController')

router.post('/signup', user.signup)

router.post('/signin', user.signin)

router.post('/book', user.bookAppointment)

module.exports = router;
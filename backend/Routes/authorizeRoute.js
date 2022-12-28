const express = require('express');

const router = express();

const {
    register,
    login,
    tokenValidation,
    authorization
} = require('../Controller/authorizeController')

router.post('/register', register)
router.post('/login', login)

module.exports = router;
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const router = express.Router()
const { getUserById, updateUserById, createUsers } = require('../controller/user.controller')

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createUserSchema, updateUserSchema } = require('../validators/user.validators')

router.post('/create', validateRequestBody(createUserSchema), createUsers)
router.patch('/:id', validateRequestBody(updateUserSchema), updateUserById)
router.get('/:id', getUserById)

module.exports = router

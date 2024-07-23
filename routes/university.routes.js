/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createUniversityController, getAllUniversityController, getUniversityByIdController, updateUniversityByIdController, deleteUniversityIdController } = require('../controller/university.controller')
const router = express.Router()

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createUniversitySchema, updateUniversitySchema } = require('../validators/University.validator')

router.post('/', validateRequestBody(createUniversitySchema), createUniversityController)
router.get('/all', getAllUniversityController)
router.get('/:id', getUniversityByIdController)
router.patch('/:id', validateRequestBody(updateUniversitySchema), updateUniversityByIdController)
router.delete('/:id', deleteUniversityIdController)

module.exports = router

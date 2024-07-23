/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const { createfieldOfStudyController, getAllfieldOfStudyController, getfieldOfStudyByIdController, updatefieldOfStudyByIdController, deletefieldOfStudyIdController } = require('../controller/fieldOfStudy.controller')
const router = express.Router()

const { validateRequestBody } = require('../middleware/validateMiddleware')
const { createfieldOfStudySchema, updatefieldOfStudySchema } = require('../validators/fieldOfStudy.validator')

router.post('/', validateRequestBody(createfieldOfStudySchema), createfieldOfStudyController)
router.get('/all', getAllfieldOfStudyController)
router.get('/:id', getfieldOfStudyByIdController)
router.patch('/:id', validateRequestBody(updatefieldOfStudySchema), updatefieldOfStudyByIdController)
router.delete('/:id', deletefieldOfStudyIdController)

module.exports = router

/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const express = require('express')
const router = express.Router()
const { getJobById, updateJobById, deleteJobByJob, getAllJobs, createJobController } = require('../controller/job.controller')

router.post('/', createJobController)
router.get('/all', getAllJobs)
router.get('/:id', getJobById)
router.patch('/update/:id', updateJobById)
router.delete('/:id', deleteJobByJob)

module.exports = router

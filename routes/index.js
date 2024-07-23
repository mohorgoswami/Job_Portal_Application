/* eslint-disable linebreak-style */
const express = require('express')
const router = express.Router()

router.use('/users', require('../routes/user.routes'))
router.use('/jobs', require('../routes/job.routes'))
router.use('/applications', require('../routes/application.routes'))
router.use('/companies', require('../routes/company.routes'))
router.use('/country', require('../routes/country.routes'))
router.use('/jobType', require('../routes/jobType.routes'))
router.use('/industry', require('../routes/industry.routes'))
router.use('/grade', require('../routes/grade.routes'))
router.use('/university', require('../routes/university.routes'))
router.use('/fieldofstudy', require('../routes/fieldOfStudy.routes'))
router.use('/auth', require('../routes/auth.routes'))

module.exports = router

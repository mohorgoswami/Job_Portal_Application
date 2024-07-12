/* eslint-disable linebreak-style */
const express = require('express')
const router = express.Router()

const userRoutes = require('../routes/user.routes')
const jobRoutes = require('../routes/job.routes')
const applicationRoutes = require('../routes/application.routes')
const companyRoutes = require('../routes/company.routes')
const countryRoutes = require('../routes/country.routes')
const industryRoutes = require('../routes/industry.routes')
const jobTypeRoutes = require('../routes/jobType.routes')
const authRoutes = require('../routes/auth.routes')

router.use('/users', userRoutes)
router.use('/jobs', jobRoutes)
router.use('/applications', applicationRoutes)
router.use('/company', companyRoutes)
router.use('/country', countryRoutes)
router.use('/jobType', jobTypeRoutes)
router.use('/industry', industryRoutes)
router.use('/auth', authRoutes)

module.exports = router

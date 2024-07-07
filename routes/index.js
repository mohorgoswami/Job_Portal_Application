const express = require('express')
const router = express.Router()

const userRoutes = require('../routes/user.routes')
const jobRoutes = require('../routes/job.routes')

const authRoutes = require('../routes/auth.routes')

router.use('/users', userRoutes)
router.use('/jobs', jobRoutes)

router.use('/auth', authRoutes)
module.exports = router

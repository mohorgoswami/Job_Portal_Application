const express = require('express');
const router = express.Router();
const { createJob, getJobAll, getJobById, updateJobById,deleteJobByJob } = require('../controller/job.controller');




router.post('/create',createJob);
router.get('/all',getJobAll)
router.get('/:id',getJobById);
router.patch('/update/:id',updateJobById);
router.delete('/:id',deleteJobByJob)



module.exports = router;
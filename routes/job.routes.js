const express = require('express');
const router = express.Router();
const { createJobController , getAllJobsController, getJobById, updateJobById,deleteJobByJob, getJobsByFilters } = require('../controller/job.controller');



router.post('/create',createJobController);
router.get('/all',getAllJobsController);
router.get('/:id',getJobById);
router.patch('/update/:id',updateJobById);
router.delete('/:id',deleteJobByJob);
router.get('/',getJobsByFilters)



module.exports = router;
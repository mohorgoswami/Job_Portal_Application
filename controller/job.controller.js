/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')
const { findJobById, updateJob, deleteJob, createJobs, findJobByCode, findAndCountAllJobs } = require('../context/job.context')

const createJobController = async(req, res) => {
  try {
    const existingJob = await findJobByCode(req.body.code)
    if (existingJob) {
      return handleCustomErrorResponse(res, `This ${existingJob.code} Job code is already exists, please try with another one`, 400)
    }

    const newJob = await createJobs({
      ...req.body
    })

    handleSuccessResponse(res, 'Job Created Successfully', newJob, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllJobs = async(req, res) => {
  try {
    const { page = 1, limit = 10, jobtype, country, jobtitle, company } = req.query

    const { count, rows } = await findAndCountAllJobs(page, limit, jobtitle, jobtype, country, company)

    const totalPages = Math.ceil(count / limit)
    const currentPage = parseInt(page)

    handleSuccessResponse(res, 'All Jobs Successfully', {
      totalItems: count,
      totalPages,
      currentPage,
      jobs: rows
    }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getJobById = async(req, res) => {
  try {
    const { id } = req.params
    const job = await findJobById(id)

    if (!job) {
      return res.status(404).json({ message: 'Job not found' })
    }

    const response = {
      id: job.id,
      name: job.name,
      description: job.description,
      about: job.experience,
      workLevel: job.workLevel,
      responsibilities: job.responsibilities,
      requirements: job.requirements,
      salaryRange: job.salaryRange,
      company: {
        name: job.Company.name,
        description: job.Company.description
      },
      country: job.Country.name,
      jobType: job.JobType.name
    }

    handleSuccessResponse(res, 'Job retrieved successfully', response, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateJobById = async(req, res) => {
  try {
    const job = await findJobById(req.params.id)
    if (!job) {
      return handleCustomErrorResponse(res, 'Job not found', 404)
    }
    const updatedJob = await updateJob(job, { ...req.body })

    await job.save()
    handleSuccessResponse(res, 'Job updated successfully', updatedJob, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteJobByJob = async(req, res) => {
  try {
    const job = await findJobById(req.params.id)
    if (!job) {
      return handleCustomErrorResponse(res, 'Job not found', 404)
    }

    await deleteJob(job)
    handleSuccessResponse(res, 'Job deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

module.exports = { createJobController, getAllJobs, getJobById, updateJobById, deleteJobByJob }

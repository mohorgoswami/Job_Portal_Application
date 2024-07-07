const { Job } = require("../models/jobModel");
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require("../utils/errorResponseHandlers");
const { findJobByCode, findJobById, findAllJobs, updateJob, deleteJob } = require("../context/job.context");
const { Op } = require('sequelize');

const createJobController = async (req, res) => {
    const { jobCode,title, description, company, location, salaryRange, employmentType, experienceLevel, responsibilities, requirements, benefits, applicationDeadline, industry, jobFunction, remoteOption } = req.body;
    try {
      const existingJob = await findJobByCode();
      if (existingJob) {
        return handleCustomErrorResponse(res, 'Job already exists', 400);
      }
  
      const newJob = await Job.create({
        jobCode,
        title,
        description,
        company,
        location,
        salaryRange,
        employmentType,
        experienceLevel,
        responsibilities,
        requirements,
        benefits,
        applicationDeadline,
        industry,
        jobFunction,
        remoteOption
      });
  
      handleSuccessResponse(res, "Job Created Successfully", newJob, 201);
    } catch (error) {
        console.log(error);
      handleErrorResponse(error, req, res, "Server Error");
    }
  };

  const getAllJobsController = async (req, res) => {
    try {
      const jobs = await Job.findAll({
        attributes: ['title', 'company', 'location', 'experienceLevel', 'experienceTime', 'salaryRange']
      });
  
      if (jobs.length === 0) {
        return handleCustomErrorResponse(res, 'No jobs found', 404);
      }
  
      handleSuccessResponse(res, 'Jobs retrieved successfully', jobs, 200);
    } catch (error) {
      console.error('[ERROR] Error in getAllJobs:', error);
      handleErrorResponse(error, req, res, 'Server error');
    }
  };
  
const getJobById = async (req, res) => {
    try {
        const job = await findJobById(req.params.id);
        if (!job) {
            return handleCustomErrorResponse(res, 'Job not found', 404);
        }
        const responseData = {
            id: job.id,
            jobName: job.name


        }
        handleSuccessResponse(res, "Job retrieved successfully", responseData, 200);
    } catch (error) {
        handleErrorResponse(error, req, res, "Server Error");
    }
}

const updateJobById = async (req, res) => {

    try {
        const job = await findJobById(req.params.id);
        if (!job) {
            return handleCustomErrorResponse(res, "Job not found", 404);
        }

        const updatedJob = await updateJob(job, { ...req.body });

        await job.save();
        handleSuccessResponse(res, "Job updated successfully", updatedJob, 200);
    } catch (error) {
        handleErrorResponse(error, req, res, "Server Error");
    }
}

const deleteJobByJob = async (req, res) => {
    try {
        const job = await findJobById(req.params.id);
        if (!job) {
            return handleCustomErrorResponse(res, "Job not found", 404);
        }

        await deleteJob(job);
        handleSuccessResponse(res, "Job deleted successfully", {}, 200);
    } catch (error) {
        handleErrorResponse(error, req, res, "Server Error");
    }
}


const getJobsByFilters = async (req, res) => {
  const { location, employmentType, title, page = 1, limit = 10 } = req.query;

  try {
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);

    let whereClause = {};

    if (location) {
      whereClause.location = {
        [Op.iLike]: `%${location}%`
      };
    }

    if (employmentType) {
      whereClause.employmentType = {
        [Op.iLike]: `%${employmentType}%`
      };
    }

    if (title) {
      whereClause.title = {
        [Op.iLike]: `%${title}%`
      };
    }

    const offset = (pageNum - 1) * limitNum;

    const { rows: jobs, count: totalRecords } = await Job.findAndCountAll({
      where: whereClause,
      limit: limitNum,
      offset: offset
    });

    const totalPages = Math.ceil(totalRecords / limitNum);

    if (totalRecords === 0) {
      return handleCustomErrorResponse(res, 'No jobs found matching the criteria', 404);
    }

    handleSuccessResponse(res, 'Jobs retrieved successfully', {
      jobs,
      totalRecords,
      totalPages,
      currentPage: pageNum
    }, 200);
  } catch (error) {
    console.error('[ERROR] Error in getJobsByFilters:', error);
    handleErrorResponse(error, req, res, 'Server error');
  }
};

module.exports = { createJobController, getAllJobsController, getJobById, updateJobById, deleteJobByJob ,getJobsByFilters};

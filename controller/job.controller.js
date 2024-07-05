const { Job } = require("../models/jobModel");
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require("../utils/errorResponseHandlers");
const { findJobByName, findJobById, findAllJobs, updateJob, deleteJob } = require("../context/job.context");


const createJob = async (req, res) => {
    const { name, title, description, location, salary } = req.body;
    try {
        const existingJob = await findJobByName(name);
        if (existingJob) {
            return handleCustomErrorResponse(res, 'Job already exists', 400);
        }

        const newJob = await Job.create({
            name,
            title,
            description,
            location,
            salary
        });

        handleSuccessResponse(res, "Job Registered Successfully", newJob, 201);
    } catch (error) {
        handleErrorResponse(error, req, res, "Server Error");
    }
}

const getJobAll = async (req, res) => {
    try {
        const jobs = await findAllJobs();
        handleSuccessResponse(res, "Jobs retrieved successfully", jobs, 200);
    } catch (error) {
        handleErrorResponse(error, req, res, "Server Error");
    }
}

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

module.exports = { createJob, getJobAll, getJobById, updateJobById, deleteJobByJob };

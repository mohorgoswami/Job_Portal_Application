const { Job } = require('../models/index');

const createJob = async (data) => {
  return await Job.create(data);
};

const findJobByName = async (name) => {
  return await Job.findOne({ where: { name } });
};
const findJobByCode = async (name) => {
  return await Job.findOne({ where: { jobCode } });
};

const findJobById = async (id) => {
  return await Job.findByPk(id);
};

const findAllJobs = async () => {
  return await Job.findAll();
};

const updateJob = async (job, data) => {
  return await job.update(data);
};

const deleteJob = async (job) => {
  return await job.destroy();
};

module.exports = {
  createJob,
  findJobByName,
  findJobById,
  findAllJobs,
  updateJob,
  deleteJob,
  findJobByCode
};

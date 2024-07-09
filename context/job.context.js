/* eslint-disable linebreak-style */
/* eslint-disable space-before-function-paren */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
const { Job, Company, Country, JobType } = require('../models/index')
const { Op, col } = require('sequelize')

const createJobs = async (data) => {
  return await Job.create(data)
}

const findAndCountAllJobs = async (page, limit, jobtitle, jobtype, country, company) => {
  const jobFilters = {}
  if (jobtitle) jobFilters.title = { [Op.iLike]: `%${jobtitle}%` }

  const jobTypeFilters = jobtype ? { name: { [Op.iLike]: `%${jobtype}%` } } : {}
  const countryFilters = country ? { name: { [Op.iLike]: `%${country}%` } } : {}
  const companyFilters = company ? { name: { [Op.iLike]: `%${company}%` } } : {}

  const offset = (page - 1) * limit

  const { count, rows } = await Job.findAndCountAll({
    where: jobFilters,
    offset,
    limit: parseInt(limit),
    attributes: [
      'name',
      'description',
      [col('Country.name'), 'countryName'],
      'salaryRange',
      [col('Company.name'), 'companyName']
    ],
    include: [
      {
        model: JobType,
        as: 'JobType',
        attributes: [],
        where: jobTypeFilters,
        required: !!jobtype
      },
      {
        model: Country,
        as: 'Country',
        attributes: [],
        where: countryFilters,
        required: !!country
      },
      {
        model: Company,
        as: 'Company',
        attributes: [],
        where: companyFilters,
        required: !!company
      }
    ]
  })

  return { count, rows }
}

const findJobByCode = async (code) => {
  return await Job.findOne({ where: { code } })
}

const findJobById = async (id) => {
  return await Job.findByPk(id, {
    attributes: [
      'id',
      'name',
      'description',
      'experience',
      'workLevel',
      'responsibilities',
      'requirements',
      'salaryRange'
    ],
    include: [
      {
        model: Company,
        as: 'Company',
        attributes: ['name', 'description']
      },
      {
        model: Country,
        as: 'Country',
        attributes: ['name']
      },
      {
        model: JobType,
        as: 'JobType',
        attributes: ['name']
      }
    ]
  })
}

const findAllJobs = async () => {
  return await Job.findAll()
}

const updateJob = async (job, data) => {
  return await job.update(data)
}

const deleteJob = async (job) => {
  return await job.destroy()
}

module.exports = {
  findJobById,
  findAllJobs,
  updateJob,
  deleteJob,
  createJobs,
  findJobByCode,
  findAndCountAllJobs
}

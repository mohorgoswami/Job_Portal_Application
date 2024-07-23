/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { JobType } = require('../models/index')

const createjobType = async(data) => {
  return await JobType.create(data)
}
const findjobTypeById = async(id) => {
  return await JobType.findByPk(id)
}
const findjobTypeByCode = async(code) => {
  return await JobType.findOne({ where: { code } })
}
const findAlljobType = async() => {
  return await JobType.findAll()
}
const updatejobType = async(id, data) => {
  return await JobType.update(data, { where: { id } })
}
  
const deletejobType = async(JobType) => {
  return await JobType.destroy()
}

module.exports = { createjobType, findjobTypeById, findjobTypeByCode, findAlljobType, updatejobType, deletejobType }

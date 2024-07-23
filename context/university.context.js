/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { University } = require('../models/university.model')

const createUniversity = async(data) => {
  return await University.create(data)
}
const findUniversityById = async(id) => {
  return await University.findByPk(id)
}
const findUniversityByCode = async(code) => {
  return await University.findOne({ where: { code } })
}
const findAllUniversity = async() => {
  return await University.findAll()
}
const updateUniversity = async(id, data) => {
  return await University.update(data, { where: { id } })
}

const deleteUniversity = async(University) => {
  return await University.destroy()
}

module.exports = { createUniversity, findUniversityById, findUniversityByCode, findAllUniversity, updateUniversity, deleteUniversity }

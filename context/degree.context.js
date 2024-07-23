/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { Degree } = require('../models/degree.model')

const createDegree = async(data) => {
  return await Degree.create(data)
}
const findDegreeById = async(id) => {
  return await Degree.findByPk(id)
}
const findDegreeByCode = async(code) => {
  return await Degree.findOne({ where: { code } })
}
const findAllDegree = async() => {
  return await Degree.findAll()
}
const updateDegree = async(id, data) => {
  return await Degree.update(data, { where: { id } })
}

const deleteDegree = async(Degree) => {
  return await Degree.destroy()
}

module.exports = { createDegree, findDegreeById, findDegreeByCode, findAllDegree, updateDegree, deleteDegree }

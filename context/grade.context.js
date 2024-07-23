/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable linebreak-style */
const { Grade } = require('../models/grade.model')

const createGrade = async(data) => {
  return await Grade.create(data)
}
const findGradeById = async(id) => {
  return await Grade.findByPk(id)
}
const findGradeByCode = async(code) => {
  return await Grade.findOne({ where: { code } })
}
const findAllGrade = async() => {
  return await Grade.findAll()
}
const updateGrade = async(id, data) => {
  return await Grade.update(data, { where: { id } })
}

const deleteGrade = async(Grade) => {
  return await Grade.destroy()
}

module.exports = { createGrade, findGradeById, findGradeByCode, findAllGrade, updateGrade, deleteGrade }

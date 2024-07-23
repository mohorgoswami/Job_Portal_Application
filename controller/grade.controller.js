/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findGradeByCode, createGrade, findAllGrade, findGradeById, updateGrade, deleteGrade } = require('../context/grade.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createGradeController = async(req, res) => {
  try {
    const existingGrade = await findGradeByCode(req.body.code)
    if (existingGrade) {
      return handleCustomErrorResponse(res, `This ${existingGrade.code} Grade code is already exists, please try with another one`, 400)
    }
    const newGrade = await createGrade({
      ...req.body
    })

    handleSuccessResponse(res, 'Grade Created Successfully', newGrade, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllGradeController = async(req, res) => {
  try {
    const Grade = await findAllGrade()

    handleSuccessResponse(res, 'All Grade fetched Successfully', Grade, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getGradeByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const Grade = await findGradeById(id)
    handleSuccessResponse(res, 'Grade with id is not exist', Grade, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateGradeByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateGrade(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('Grade not found'), req, res, 'Grade not found', 404)
    }
    handleSuccessResponse(res, `Grade with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteGradeIdController = async(req, res) => {
  try {
    const Grade = await findGradeById(req.params.id)
    if (!Grade) {
      return handleCustomErrorResponse(res, 'Grade not found', 404)
    }

    await deleteGrade(Grade)
    handleSuccessResponse(res, 'Grade deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createGradeController, getAllGradeController, getGradeByIdController, updateGradeByIdController, deleteGradeIdController}

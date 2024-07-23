/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findUniversityByCode, createUniversity, findAllUniversity, findUniversityById, updateUniversity, deleteUniversity } = require('../context/university.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createUniversityController = async(req, res) => {
  try {
    const existingUniversity = await findUniversityByCode(req.body.code)
    if (existingUniversity) {
      return handleCustomErrorResponse(res, `This ${existingUniversity.code} University code is already exists, please try with another one`, 400)
    }
    const newUniversity = await createUniversity({
      ...req.body
    })

    handleSuccessResponse(res, 'University Created Successfully', newUniversity, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllUniversityController = async(req, res) => {
  try {
    const University = await findAllUniversity()

    handleSuccessResponse(res, 'All University fetched Successfully', University, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getUniversityByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const University = await findUniversityById(id)
    handleSuccessResponse(res, 'University with id is not exist', University, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateUniversityByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateUniversity(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('University not found'), req, res, 'University not found', 404)
    }
    handleSuccessResponse(res, `University with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteUniversityIdController = async(req, res) => {
  try {
    const University = await findUniversityById(req.params.id)
    if (!University) {
      return handleCustomErrorResponse(res, 'University not found', 404)
    }

    await deleteUniversity(University)
    handleSuccessResponse(res, 'University deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createUniversityController, getAllUniversityController, getUniversityByIdController, updateUniversityByIdController, deleteUniversityIdController}

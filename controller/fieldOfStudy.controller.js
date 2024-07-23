/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findfieldOfStudyByCode, createfieldOfStudy, findAllfieldOfStudy, findfieldOfStudyById, updatefieldOfStudy, deletefieldOfStudy } = require('../context/fieldOfStudy.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createfieldOfStudyController = async(req, res) => {
  try {
    const existingfieldOfStudy = await findfieldOfStudyByCode(req.body.code)
    if (existingfieldOfStudy) {
      return handleCustomErrorResponse(res, `This ${existingfieldOfStudy.code} fieldOfStudy code is already exists, please try with another one`, 400)
    }
    const newfieldOfStudy = await createfieldOfStudy({
      ...req.body
    })

    handleSuccessResponse(res, 'fieldOfStudy Created Successfully', newfieldOfStudy, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllfieldOfStudyController = async(req, res) => {
  try {
    const fieldOfStudy = await findAllfieldOfStudy()

    handleSuccessResponse(res, 'All fieldOfStudy fetched Successfully', fieldOfStudy, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getfieldOfStudyByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const fieldOfStudy = await findfieldOfStudyById(id)
    handleSuccessResponse(res, 'fieldOfStudy with id is not exist', fieldOfStudy, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updatefieldOfStudyByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updatefieldOfStudy(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('fieldOfStudy not found'), req, res, 'fieldOfStudy not found', 404)
    }
    handleSuccessResponse(res, `fieldOfStudy with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deletefieldOfStudyIdController = async(req, res) => {
  try {
    const fieldOfStudy = await findfieldOfStudyById(req.params.id)
    if (!fieldOfStudy) {
      return handleCustomErrorResponse(res, 'fieldOfStudy not found', 404)
    }

    await deletefieldOfStudy(fieldOfStudy)
    handleSuccessResponse(res, 'fieldOfStudy deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createfieldOfStudyController, getAllfieldOfStudyController, getfieldOfStudyByIdController, updatefieldOfStudyByIdController, deletefieldOfStudyIdController}

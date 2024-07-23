/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findIndustryByCode, createIndustry, findAllIndustry, findIndustryById, updateIndustry, deleteIndustry } = require('../context/industry.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createIndustryController = async(req, res) => {
  try {
    const existingIndustry = await findIndustryByCode(req.body.code)
    if (existingIndustry) {
      return handleCustomErrorResponse(res, `This ${existingIndustry.code} Industry code is already exists, please try with another one`, 400)
    }
    const newIndustry = await createIndustry({
      ...req.body
    })

    handleSuccessResponse(res, 'Industry Created Successfully', newIndustry, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllIndustryController = async(req, res) => {
  try {
    const Industry = await findAllIndustry()

    handleSuccessResponse(res, 'All Industry fetched Successfully', Industry, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getIndustryByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const Industry = await findIndustryById(id)
    handleSuccessResponse(res, 'Industry with id is  fetched Successfully', Industry, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateIndustryByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateIndustry(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('Industry not found'), req, res, 'Industry not found', 404)
    }

    handleSuccessResponse(res, `Industry with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteIndustryIdController = async(req, res) => {
  try {
    const Industry = await findIndustryById(req.params.id)
    if (!Industry) {
      return handleCustomErrorResponse(res, 'Industry not found', 404)
    }

    await deleteIndustry(Industry)
    handleSuccessResponse(res, 'Industry deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createIndustryController, getAllIndustryController, getIndustryByIdController, updateIndustryByIdController, deleteIndustryIdController}

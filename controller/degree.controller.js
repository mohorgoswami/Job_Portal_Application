/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findDegreeByCode, createDegree, findAllDegree, findDegreeById, updateDegree, deleteDegree } = require('../context/degree.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createDegreeController = async(req, res) => {
  try {
    const existingDegree = await findDegreeByCode(req.body.code)
    if (existingDegree) {
      return handleCustomErrorResponse(res, `This ${existingDegree.code} Degree code is already exists, please try with another one`, 400)
    }
    const newDegree = await createDegree({
      ...req.body
    })

    handleSuccessResponse(res, 'Degree Created Successfully', newDegree, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllDegreeController = async(req, res) => {
  try {
    const Degree = await findAllDegree()

    handleSuccessResponse(res, 'All Degree fetched Successfully', Degree, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getDegreeByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const Degree = await findDegreeById(id)
    handleSuccessResponse(res, 'Degree with id is not exist', Degree, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateDegreeByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateDegree(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('Degree not found'), req, res, 'Degree not found', 404)
    }
    handleSuccessResponse(res, `Degree with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteDegreeIdController = async(req, res) => {
  try {
    const Degree = await findDegreeById(req.params.id)
    if (!Degree) {
      return handleCustomErrorResponse(res, 'Degree not found', 404)
    }

    await deleteDegree(Degree)
    handleSuccessResponse(res, 'Degree deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createDegreeController, getAllDegreeController, getDegreeByIdController, updateDegreeByIdController, deleteDegreeIdController}

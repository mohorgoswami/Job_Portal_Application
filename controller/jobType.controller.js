/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findjobTypeByCode, createjobType, findAlljobType, findjobTypeById, updatejobType, deletejobType } = require('../context/jobType.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createjobTypeController = async(req, res) => {
  try {
    const existingjobType = await findjobTypeByCode(req.body.code)
    if (existingjobType) {
      return handleCustomErrorResponse(res, `This ${existingjobType.code} jobType code is already exists, please try with another one`, 400)
    }
    const newjobType = await createjobType({
      ...req.body
    })

    handleSuccessResponse(res, 'jobType Created Successfully', newjobType, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAlljobTypeController = async(req, res) => {
  try {
    const jobType = await findAlljobType()

    handleSuccessResponse(res, 'All jobType fetched Successfully', jobType, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getjobTypeByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const jobType = await findjobTypeById(id)
    handleSuccessResponse(res, 'jobType with id is  fetched Successfully', jobType, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updatejobTypeByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updatejobType(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('jobType not found'), req, res, 'jobType not found', 404)
    }

    handleSuccessResponse(res, `jobType with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deletejobTypeIdController = async(req, res) => {
  try {
    const jobType = await findjobTypeById(req.params.id)
    if (!jobType) {
      return handleCustomErrorResponse(res, 'jobType not found', 404)
    }

    await deletejobType(jobType)
    handleSuccessResponse(res, 'Job deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createjobTypeController, getAlljobTypeController, getjobTypeByIdController, updatejobTypeByIdController, deletejobTypeIdController}

/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable linebreak-style */
/* eslint-disable object-curly-spacing */
/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const { findCountryByCode, createCountry, findAllCountry, findCountryById, updateCountry, deleteCountry } = require('../context/country.context')
const { handleErrorResponse, handleSuccessResponse, handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const createCountryController = async(req, res) => {
  try {
    const existingCountry = await findCountryByCode(req.body.code)
    if (existingCountry) {
      return handleCustomErrorResponse(res, `This ${existingCountry.code} Country code is already exists, please try with another one`, 400)
    }
    const newCountry = await createCountry({
      ...req.body
    })

    handleSuccessResponse(res, 'Country Created Successfully', newCountry, 201)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const getAllCountryController = async(req, res) => {
  try {
    const Country = await findAllCountry()

    handleSuccessResponse(res, 'All Country fetched Successfully', Country, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')

  }
}

const getCountryByIdController = async(req, res) => {
  try {
    const {id} = req.params
    const Country = await findCountryById(id)
    handleSuccessResponse(res, 'Country with id is fetched Successfully', Country, 200)

  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const updateCountryByIdController = async(req, res) => {
  try {
    const { id } = req.params
    const data = req.body
    const [updatedRows] = await updateCountry(id, data)

    if (updatedRows === 0) {
      return handleErrorResponse(new Error('Country not found'), req, res, 'Country not found', 404)
    }
    handleSuccessResponse(res, `Country with id ${id} updated successfully`, { id, ...data }, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}

const deleteCountryIdController = async(req, res) => {
  try {
    const job = await findCountryById(req.params.id)
    if (!job) {
      return handleCustomErrorResponse(res, 'Country not found', 404)
    }

    await deleteCountry(job)
    handleSuccessResponse(res, 'Job deleted successfully', {}, 200)
  } catch (error) {
    handleErrorResponse(error, req, res, 'Server Error')
  }
}
module.exports = { createCountryController, getAllCountryController, getCountryByIdController, updateCountryByIdController, deleteCountryIdController}

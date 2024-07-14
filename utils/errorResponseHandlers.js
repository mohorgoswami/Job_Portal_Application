/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const handleErrorResponse = (error, req, res, customMessage) => {
  const statusCode = error.statusCode || 500
  const message = customMessage || 'Unexpected Error'

  console.error(`Error: ${error.message || message}`)
  console.error(`Stack: ${error.stack || 'No stack available'}`)

  return res.status(statusCode).json({
    success: false,
    message,
    error: error.message || message
  })
}

const handleSuccessResponse = (res, message, data = {}, statusCode = 200) => {
  res.status(statusCode).json({
    status: true,
    message,
    data
  })
}

const handleCustomErrorResponse = (res, message, statusCode = 400) => {
  res.status(statusCode).json({
    status: false,
    message
  })
}

module.exports = {
  handleErrorResponse,
  handleSuccessResponse,
  handleCustomErrorResponse
}

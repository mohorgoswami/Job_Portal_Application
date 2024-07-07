const validateRequestBody = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body)
    if (error) {
      const errorMessage = error.details.map((detail) => detail.message).join('; ')
      return res.status(400).json({ status: false, message: errorMessage })
    }
    next()
  }
}

module.exports = { validateRequestBody }

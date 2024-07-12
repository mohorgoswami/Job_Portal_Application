/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const jwt = require('jsonwebtoken')
require('dotenv').config()

const protect = (req, res, next) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1]

  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' })
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Token is not valid' })
  }
}

module.exports = protect

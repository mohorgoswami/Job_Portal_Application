/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { handleCustomErrorResponse } = require('../utils/errorResponseHandlers')

const { User } = require('../models/index')
require('dotenv').config()

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '30d' })
}

const signup = async (req, res) => {
  const { firstname, lastname, email, password, confirmPassword } = req.body

  try {
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' })
    }
    if (password != confirmPassword) {
      return handleCustomErrorResponse(res, 'Password does not match', 400)
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await User.create({ firstname, lastname, email, password: hashedPassword })

    const token = generateToken(newUser)
    res.status(201).json({ user: newUser })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

const login = async (req, res) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = generateToken(user)
    res.status(200).json({ message: 'Login Successfull', token })
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' })
  }
}

module.exports = { login, signup }

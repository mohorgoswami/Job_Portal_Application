const express = require("express");
const router = express.Router();
const { {getUserById,updateUserById}s } = require("../controller/user.controller");

const { validateRequestBody } = require('../middleware/validateMiddleware');
const { createUserSchema } = require("../validators/user.validators")

router.post('/create', validateRequestBody(createUserSchema), createUsers);

module.exports = router;

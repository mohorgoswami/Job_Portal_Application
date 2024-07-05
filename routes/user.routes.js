const express = require("express");
const router = express.Router();
const { {getUserById,updateUserById}s } = require("../controller/user.controller");

const { validateRequestBody } = require('../middleware/validateMiddleware');
const { createUserSchema } = require("../validators/user.validators")


 router.get('/user/:id', getUserById);
 router.put('/update/:id',updateUserById);



module.exports = router;

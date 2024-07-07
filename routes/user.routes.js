const express = require("express");
const router = express.Router();
const { getUserById, updateUserById, createUsers } = require("../controller/user.controller");

const { validateRequestBody } = require("../middleware/validateMiddleware");
const { createUserSchema, updateUserSchema } = require("../validators/user.validators");

router.get("/:id", getUserById);
router.put("/update/:id", validateRequestBody(updateUserSchema), updateUserById);
router.post("/create", validateRequestBody(createUserSchema), createUsers);

module.exports = router;

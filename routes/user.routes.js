const express = require("express");
const router = express.Router();
const {
  getUserById,
  updateUserById,
  createUsers,
} = require("../controller/user.controller");

const { validateRequestBody } = require("../middleware/validateMiddleware");
const { createUserSchema } = require("../validators/user.validators");

router.get("/user/:id", getUserById);
router.put("/update/:id", updateUserById);
router.post("/create", validateRequestBody(createUserSchema), createUsers);

module.exports = router;

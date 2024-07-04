const { createUser, verifyEmail } = require("../db/context/user.context");
const { handleSuccessResponse, handleErrorResponse, handleCustomErrorResponse } = require("../utils/handlers/errorResponseHandlers");

const createUsers = async (req, res) => {
  try {
    const isEmail = await verifyEmail(req.body.email);
    if (isEmail) {
      return handleCustomErrorResponse(res, "Given email is already available, please try another one.", 409);
    }
    const users = await createUser({ ...req.body });
    return handleSuccessResponse(res, "User created successfully", users, 201);
  } catch (error) {
    return handleErrorResponse(error, req, res, "Failed to create user");
  }
};


module.exports = { createUsers };

const { createUser, verifyEmail ,userById } = require("../db/context/user.context");
const {
  handleSuccessResponse,
  handleErrorResponse,
  handleCustomErrorResponse,
} = require("../utils/handlers/errorResponseHandlers");

const createUsers = async (req, res) => {
  try {
    const isEmail = await verifyEmail(req.body.email);
    if (isEmail) {
      return handleCustomErrorResponse(
        res,
        "Given email is already available, please try another one.",
        409
      );
    }
    const users = await createUser({ ...req.body });
    return handleSuccessResponse(res, "User created successfully", users, 201);
  } catch (error) {
    return handleErrorResponse(error, req, res, "Failed to create user");
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userById();
    if (!user) {
      return handleCustomErrorResponse(res,"User not found",404);
    }
    handleSuccessResponse(res,"User fetched successfully");
  } catch (error) {
    handleErrorResponse(error, req, res, "Server Error");
  }
};

const updateUserById = async (req, res) => {
  const { name, role } = req.body;
  try {
    const user = await userById();
    if (!user) {
      return handleCustomErrorResponse(res,"User not found",404);
    }
    if (name) user.name = name;
    user.role = role;
    await user.save();

   handleSuccessResponse(res,"User Updated Successfully",201);
  } catch (error) {
    handleErrorResponse(error, req, res, "Server Error");
  }
};

module.exports = { createUsers, getUserById, updateUserById };

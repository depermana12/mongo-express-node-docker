import asyncHandler from "../middlewares/asyncHandler.js";
import User from "../models/userModel.js";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    results: users.length,
    data: {
      users,
    },
  });
});

export const getUser = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
export const createUser = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
export const updateUser = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};
export const deleteUser = (req, res) => {
  res.status(200).json({
    status: "error",
    message: "This route is not yet defined!",
  });
};

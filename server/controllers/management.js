import mongoose from "mongoose";
import User from "../models/User";

export const getAdmins = async (req, res) => {
  try {
    const admins = await User.find({ role: "admin" }).select("-password");
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

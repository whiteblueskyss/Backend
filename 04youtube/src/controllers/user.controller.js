import ApiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import User from "../models/user.model.js";
import {uploadOnCloudinary} from '../utils/cloudinary.js';
import {ApiResponse} from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req, res) => {

  const { fullname, username, email, password } = req.body;

  if(!fullname.trim()  || !username.trim() || !email.trim() || !password.trim()) {
    throw new ApiError(400, 'All fields are required');
  }

  const exitedUser = User.findOne({$or: [{username}, {email}]})

  if(exitedUser) {
    throw new ApiError(409, 'User already exists');
  }

  const avatarLocalPath = req.files?.avater[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;

  if(!avatarLocalPath || !coverImageLocalPath) {
    throw new ApiError(400, 'Avatar and cover image are required');
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  if(!avatar){
    throw new ApiError(400, 'Avatar and cover image are required');
  }

  const user = await User.create({
    fullname,
    username,
    email,
    password,
    avatar: avatar.url,
    coverImage : coverImage.url || ""
  });

  const createdUser = await User.findById(user._id).select('-password', '-refreshToken');

  if(!createdUser) {
    throw new ApiError(500, 'User not created');
  }

  return res.status(201).json(
    new ApiResponse(201, createdUser, 'User created successfully')
  );

});



export { registerUser };
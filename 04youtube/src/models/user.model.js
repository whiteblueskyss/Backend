import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    lowercase: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    index: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [4, 'Password must be at least 4 characters long']
  },
  fullname: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  avatar :{
    type: String, // URL
    required: true,
  },
  coverImage : {
    type: String, // URL
  },
  watchHistory:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Video'
    }
  ],
  refressToken: {
    type: String,
  }
}, {timestamps: true});


userSchema.pre('save', async function(next) {
  if(this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

userSchema.methods.checkPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateToken = function() {
  return jwt.sign(
    {
      id: this._id,
      username: this.username,
      email: this.email,
      fullname: this.fullname,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: ACCESS_TOKEN_EXPIRE
    }
  );
}

userSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: REFRESH_TOKEN_EXPIRE
    }
  );
}

export default mongoose.model('User', userSchema);
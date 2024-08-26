import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  experience: {
    type: Number,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  worksIn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true
  }
}, {
  timestamps: true
});

export const Doctor = mongoose.model('Doctor', doctorSchema);

import mongoose from 'mongoose';

const PatientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    diagnosis: {
      type: String,
      required: true,
    },
    addmittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital',
      required: true,
    },
    photo :{
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Patient', PatientSchema);

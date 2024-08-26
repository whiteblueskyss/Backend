import mongoose from 'mongoose'

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  departments: [{
    type: String
  }],
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor'
  }]
});

export default mongoose.model('Hospital', hospitalSchema);
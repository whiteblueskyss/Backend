import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const OrderSchema = new mongoose.Schema(
  {
    customer :{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    orderItems: [OrderItemSchema],
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum : ['Pending', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', OrderSchema);

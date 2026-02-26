import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  meal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meal',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  calories: {
    type: Number,
    required: true
  }
});

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  totalPrice: {
    type: Number,
    required: true
  },
  totalCalories: {
    type: Number,
    required: true
  },
  shippingInfo: {
    name: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String
    },
    address: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    district: {
      type: String
    },
    ward: {
      type: String
    },
    note: {
      type: String
    }
  },
  paymentMethod: {
    type: String,
    enum: ['cod', 'bank-transfer', 'qr-code'],
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed'],
    default: 'pending'
  },
  orderStatus: {
    type: String,
    enum: ['confirmed', 'preparing', 'delivering', 'completed', 'cancelled'],
    default: 'confirmed'
  },
  orderNumber: {
    type: String,
    unique: true
  },
  qrCode: {
    type: String
  }
}, {
  timestamps: true
});

// Generate order number before saving
orderSchema.pre('save', function(next) {
  if (!this.orderNumber) {
    this.orderNumber = 'EC' + Date.now() + Math.floor(Math.random() * 1000);
  }
  next();
});

const Order = mongoose.model('Order', orderSchema);

export default Order;

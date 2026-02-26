import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  meal: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Meal',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    default: 1
  }
});

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  items: [cartItemSchema],
  totalPrice: {
    type: Number,
    default: 0
  },
  totalCalories: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Calculate totals before saving
cartSchema.methods.calculateTotals = async function() {
  await this.populate('items.meal');
  
  let totalPrice = 0;
  let totalCalories = 0;
  
  this.items.forEach(item => {
    if (item.meal) {
      totalPrice += item.meal.price * item.quantity;
      totalCalories += item.meal.calories * item.quantity;
    }
  });
  
  this.totalPrice = Math.round(totalPrice * 100) / 100;
  this.totalCalories = Math.round(totalCalories);
};

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;

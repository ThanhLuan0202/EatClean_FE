import mongoose from 'mongoose';

const mealSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide meal name'],
    trim: true
  },
  nameVi: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    required: [true, 'Please provide meal image']
  },
  price: {
    type: Number,
    required: [true, 'Please provide meal price'],
    min: 0
  },
  calories: {
    type: Number,
    required: [true, 'Please provide calories'],
    min: 0
  },
  protein: {
    type: Number,
    required: true,
    min: 0
  },
  carb: {
    type: Number,
    required: true,
    min: 0
  },
  fat: {
    type: Number,
    required: true,
    min: 0
  },
  category: {
    type: String,
    enum: ['weight-loss', 'maintain', 'muscle-gain'],
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  ingredientsVi: {
    type: [String]
  },
  description: {
    type: String,
    required: true
  },
  descriptionVi: {
    type: String
  },
  isAvailable: {
    type: Boolean,
    default: true
  },
  rating: {
    type: Number,
    default: 5,
    min: 0,
    max: 5
  },
  isBestSeller: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Meal = mongoose.model('Meal', mealSchema);

export default Meal;

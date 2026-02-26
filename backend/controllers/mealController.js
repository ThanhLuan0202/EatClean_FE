import Meal from '../models/Meal.js';

// @desc    Get all meals
// @route   GET /api/meals
// @access  Public
export const getMeals = async (req, res) => {
  try {
    const { category, search, bestSeller } = req.query;

    let query = { isAvailable: true };

    if (category) {
      query.category = category;
    }

    if (bestSeller === 'true') {
      query.isBestSeller = true;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { nameVi: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    const meals = await Meal.find(query).sort('-createdAt');

    res.status(200).json({
      success: true,
      count: meals.length,
      data: meals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single meal
// @route   GET /api/meals/:id
// @access  Public
export const getMeal = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({
        success: false,
        message: 'Meal not found'
      });
    }

    res.status(200).json({
      success: true,
      data: meal
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get related meals
// @route   GET /api/meals/:id/related
// @access  Public
export const getRelatedMeals = async (req, res) => {
  try {
    const meal = await Meal.findById(req.params.id);

    if (!meal) {
      return res.status(404).json({
        success: false,
        message: 'Meal not found'
      });
    }

    const relatedMeals = await Meal.find({
      category: meal.category,
      _id: { $ne: meal._id },
      isAvailable: true
    }).limit(4);

    res.status(200).json({
      success: true,
      data: relatedMeals
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

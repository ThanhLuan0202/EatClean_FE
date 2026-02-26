import express from 'express';
import {
  getMeals,
  getMeal,
  getRelatedMeals
} from '../controllers/mealController.js';

const router = express.Router();

router.get('/', getMeals);
router.get('/:id', getMeal);
router.get('/:id/related', getRelatedMeals);

export default router;

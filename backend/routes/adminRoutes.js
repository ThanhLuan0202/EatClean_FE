import express from 'express';
import {
  getAllUsers,
  toggleUserStatus,
  getAllOrders,
  updateOrderStatus,
  updatePaymentStatus,
  createMeal,
  updateMeal,
  deleteMeal,
  getDashboardStats
} from '../controllers/adminController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

// All admin routes require authentication and admin role
router.use(protect);
router.use(authorize('admin'));

// Dashboard stats
router.get('/stats', getDashboardStats);

// User management
router.get('/users', getAllUsers);
router.put('/users/:id/toggle-status', toggleUserStatus);

// Order management
router.get('/orders', getAllOrders);
router.put('/orders/:id/status', updateOrderStatus);
router.put('/orders/:id/payment', updatePaymentStatus);

// Meal management
router.post('/meals', createMeal);
router.put('/meals/:id', updateMeal);
router.delete('/meals/:id', deleteMeal);

export default router;

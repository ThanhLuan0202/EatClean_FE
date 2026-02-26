import express from 'express';
import {
  createOrder,
  getMyOrders,
  getOrder
} from '../controllers/orderController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// All order routes require authentication
router.use(protect);

router.post('/', createOrder);
router.get('/myorders', getMyOrders);
router.get('/:id', getOrder);

export default router;

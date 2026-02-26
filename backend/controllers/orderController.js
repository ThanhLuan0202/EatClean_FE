import Order from '../models/Order.js';
import Cart from '../models/Cart.js';
import QRCode from 'qrcode';

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
export const createOrder = async (req, res) => {
  try {
    const { shippingInfo, paymentMethod } = req.body;

    // Get user's cart
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.meal');

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Cart is empty'
      });
    }

    // Prepare order items
    const orderItems = cart.items.map(item => ({
      meal: item.meal._id,
      name: item.meal.name,
      price: item.meal.price,
      quantity: item.quantity,
      calories: item.meal.calories
    }));

    // Create order
    const order = await Order.create({
      user: req.user.id,
      items: orderItems,
      totalPrice: cart.totalPrice,
      totalCalories: cart.totalCalories,
      shippingInfo,
      paymentMethod,
      paymentStatus: paymentMethod === 'cod' ? 'pending' : 'pending',
      orderStatus: 'confirmed'
    });

    // Generate QR code if payment method is qr-code or bank-transfer
    if (paymentMethod === 'qr-code' || paymentMethod === 'bank-transfer') {
      const bankInfo = `Bank: ${process.env.BANK_NAME}\nAccount: ${process.env.BANK_ACCOUNT}\nName: ${process.env.BANK_ACCOUNT_NAME}\nAmount: ${order.totalPrice} VND\nContent: ${order.orderNumber}`;
      
      const qrCodeData = await QRCode.toDataURL(bankInfo);
      order.qrCode = qrCodeData;
      await order.save();
    }

    // Clear cart
    cart.items = [];
    cart.totalPrice = 0;
    cart.totalCalories = 0;
    await cart.save();

    const populatedOrder = await Order.findById(order._id).populate('items.meal');

    res.status(201).json({
      success: true,
      data: populatedOrder
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all orders for logged in user
// @route   GET /api/orders/myorders
// @access  Private
export const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user.id })
      .populate('items.meal')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get single order
// @route   GET /api/orders/:id
// @access  Private
export const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('items.meal')
      .populate('user', 'name email phone');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Order not found'
      });
    }

    // Make sure user is authorized to view this order
    if (order.user._id.toString() !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to view this order'
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

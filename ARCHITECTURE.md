# EAT CLEAN - Complete Project Documentation

## Overview

**EAT CLEAN** is a full-stack MVP (Minimum Viable Product) for a healthy meals delivery platform built with modern web technologies. It demonstrates best practices in full-stack development with proper separation of concerns, security, and user experience.

## Architecture

### Frontend Architecture (React + Vite)

```
┌─────────────────────────────────────────────────────┐
│                   React Application                  │
├─────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────┐   │
│  │           Pages (Smart Components)           │   │
│  │  Home, Menu, Cart, Checkout, Orders, etc.   │   │
│  └─────────────────────────────────────────────┘   │
│                        ↓                             │
│  ┌─────────────────────────────────────────────┐   │
│  │        Layouts (Header, Footer, Sidebar)    │   │
│  └─────────────────────────────────────────────┘   │
│                        ↓                             │
│  ┌─────────────────────────────────────────────┐   │
│  │     Components (Reusable Dumb Components)    │   │
│  │    MealCard, Header, Footer, etc.            │   │
│  └─────────────────────────────────────────────┘   │
│                        ↓                             │
│  ┌─────────────────────────────────────────────┐   │
│  │   Context API (Auth & Cart State Management) │   │
│  │   AuthContext, CartContext                   │   │
│  └─────────────────────────────────────────────┘   │
│                        ↓                             │
│  ┌─────────────────────────────────────────────┐   │
│  │        Axios Instance (API Layer)             │   │
│  │   Request/Response Interceptors, JWT Handling│   │
│  └─────────────────────────────────────────────┘   │
│                        ↓                             │
│        REST API Server (Node.js + Express)         │
└─────────────────────────────────────────────────────┘
```

### Backend Architecture (Node.js + Express)

```
┌──────────────────────────────────────────────────┐
│          Express Server (server.js)               │
├──────────────────────────────────────────────────┤
│                     ↓                             │
│  ┌──────────────────────────────────────────┐  │
│  │         Routes (API Endpoints)            │  │
│  │  /auth, /meals, /cart, /orders, /admin  │  │
│  └──────────────────────────────────────────┘  │
│                     ↓                             │
│  ┌──────────────────────────────────────────┐  │
│  │   Middleware (Auth, CORS, etc.)           │  │
│  │   protect, authorize, errorHandler       │  │
│  └──────────────────────────────────────────┘  │
│                     ↓                             │
│  ┌──────────────────────────────────────────┐  │
│  │       Controllers (Business Logic)        │  │
│  │  authController, cartController, etc.    │  │
│  └──────────────────────────────────────────┘  │
│                     ↓                             │
│  ┌──────────────────────────────────────────┐  │
│  │     Models (Mongoose Schemas)             │  │
│  │  User, Meal, Cart, Order                 │  │
│  └──────────────────────────────────────────┘  │
│                     ↓                             │
│           MongoDB (NoSQL Database)              │
└──────────────────────────────────────────────────┘
```

## Data Flow

### User Registration/Login Flow
```
1. User enters credentials (Register/Login page)
   ↓
2. Frontend sends POST to /api/auth/register or /api/auth/login
   ↓
3. Backend validates input and checks database
   ↓
4. Password hashed with bcrypt (register only)
   ↓
5. JWT token generated and sent back
   ↓
6. Frontend stores token in localStorage and cookies
   ↓
7. Frontend redirects to home/dashboard
   ↓
8. Axios interceptor adds token to all future requests
```

### Shopping Cart Flow
```
1. User clicks "Add to Cart" on meal card
   ↓
2. Frontend calls useCart().addToCart(mealId, quantity)
   ↓
3. POST /api/cart/add with mealId and quantity
   ↓
4. Backend finds user's cart or creates one
   ↓
5. Adds item or updates quantity if exists
   ↓
6. Calculates totalPrice and totalCalories
   ↓
7. Returns updated cart to frontend
   ↓
8. Frontend updates CartContext state
   ↓
9. All connected components re-render (cart count, cart page, etc.)
```

### Order Checkout Flow
```
1. User fills shipping form and selects payment method
   ↓
2. Frontend calls POST /api/orders with cart items and shipping info
   ↓
3. Backend validates order data
   ↓
4. Creates Order document with all items and shipping info
   ↓
5. If payment method is bank-transfer/qr-code:
   - Generates QR code with bank info using qrcode library
   - Stores QR code data in order
   ↓
6. Clears user's cart (items = [])
   ↓
7. Returns order details to frontend
   ↓
8. Frontend redirects to order detail page
   ↓
9. User can view order status and tracking
```

## Key Components Explained

### Frontend Components

#### AuthContext
**Location:** `frontend/src/context/AuthContext.jsx`

**Purpose:** Manages user authentication state globally

**Key Functions:**
- `login(email, password)` - Authenticate user
- `register(userData)` - Create new account
- `logout()` - Clear authentication
- `updateProfile(data)` - Update user info

**State:**
- `user` - Current logged-in user object
- `loading` - Loading state
- `isAuthenticated` - Boolean flag
- `isAdmin` - Check if user is admin

**Usage:**
```javascript
const { user, login, logout, isAuthenticated } = useAuth();
```

#### CartContext
**Location:** `frontend/src/context/CartContext.jsx`

**Purpose:** Manages shopping cart state and operations

**Key Functions:**
- `addToCart(mealId, quantity)` - Add item to cart
- `updateCartItem(mealId, quantity)` - Change quantity
- `removeFromCart(mealId)` - Delete item
- `clearCart()` - Empty entire cart
- `fetchCart()` - Refresh cart from server

**State:**
- `cart` - Cart object with items, totalPrice, totalCalories
- `loading` - Loading state
- `cartItemCount` - Number of items in cart

**Auto-sync:** Cart fetches whenever authentication changes

#### API Axios Instance
**Location:** `frontend/src/utils/api.js`

**Purpose:** Centralized API communication with interceptors

**Interceptors:**
- **Request:** Adds JWT token from localStorage to headers
- **Response:** Redirects to login if 401 status (token expired)

**Usage:**
```javascript
import api from '../utils/api';
const { data } = await api.get('/api/meals');
```

### Backend Controllers

#### authController
**Location:** `backend/controllers/authController.js`

**Endpoints:**
- `register` - POST /api/auth/register
- `login` - POST /api/auth/login
- `logout` - POST /api/auth/logout
- `getMe` - GET /api/auth/me
- `updateProfile` - PUT /api/auth/updateprofile
- `changePassword` - PUT /api/auth/changepassword

**Key Logic:**
- Password hashing before save
- JWT token generation
- Password comparison during login
- Account deactivation check

#### cartController
**Location:** `backend/controllers/cartController.js`

**Endpoints:**
- `getCart` - GET /api/cart
- `addToCart` - POST /api/cart/add
- `updateCartItem` - PUT /api/cart/update
- `removeFromCart` - DELETE /api/cart/remove/:mealId
- `clearCart` - DELETE /api/cart/clear

**Key Logic:**
- Meal availability check
- Quantity validation
- Auto-calculation of totals (price & calories)
- Meal population with details

#### orderController
**Location:** `backend/controllers/orderController.js`

**Endpoints:**
- `createOrder` - POST /api/orders
- `getMyOrders` - GET /api/orders/myorders
- `getOrder` - GET /api/orders/:id

**Key Logic:**
- Cart validation (not empty)
- Order number generation
- QR code generation for bank transfers
- Cart clearing after order
- Order authorization check

#### adminController
**Location:** `backend/controllers/adminController.js`

**Endpoints:**
- `getDashboardStats` - GET /api/admin/stats
- `getAllUsers` - GET /api/admin/users
- `toggleUserStatus` - PUT /api/admin/users/:id/toggle-status
- `getAllOrders` - GET /api/admin/orders
- `updateOrderStatus` - PUT /api/admin/orders/:id/status
- `updatePaymentStatus` - PUT /api/admin/orders/:id/payment
- `createMeal`, `updateMeal`, `deleteMeal` - Meal CRUD

### Backend Middleware

#### auth.js
**Location:** `backend/middleware/auth.js`

**Functions:**

1. **protect** - Required authentication
   - Verifies JWT token
   - Populates req.user with user data
   - Checks account is active

2. **authorize** - Role-based access control
   ```javascript
   router.delete('/meals/:id', protect, authorize('admin'), deleteMeal);
   ```

3. **optionalAuth** - Optional authentication
   - Doesn't fail if no token
   - Populates req.user if token valid

## Database Relationships

```
┌──────────────────────────────┐
│         User                 │
├──────────────────────────────┤
│ _id (ObjectId)              │
│ name                        │
│ email (unique)              │
│ phone                       │
│ password (hashed)           │
│ role (admin/user)           │
│ isActive                    │
│ timestamps                  │
└─────────┬────────────────────┘
          │
          ├──────────────────────────┐
          │                          │
          ↓                          ↓
    ┌──────────────┐          ┌──────────────┐
    │    Cart      │          │    Order     │
    ├──────────────┤          ├──────────────┤
    │ user (ref)   │          │ user (ref)   │
    │ items[]      │          │ items[]      │
    │   meal (ref) │          │   meal (ref) │
    │   quantity   │          │   name       │
    │ totalPrice   │          │   price      │
    │ totalCalories│          │   quantity   │
    │              │          │ totalPrice   │
    │              │          │ totalCalories│
    │              │          │ shippingInfo │
    │              │          │ paymentMethod│
    │              │          │ paymentStatus│
    │              │          │ orderStatus  │
    │              │          │ orderNumber  │
    │              │          │ qrCode       │
    └──────────────┘          └──────────────┘
                                     ↓
                            (indirect via items)
                                     ↓
                            ┌──────────────┐
                            │    Meal      │
                            ├──────────────┤
                            │ name         │
                            │ image        │
                            │ price        │
                            │ calories     │
                            │ protein      │
                            │ carb         │
                            │ fat          │
                            │ category     │
                            │ ingredients  │
                            │ description  │
                            │ isAvailable  │
                            │ rating       │
                            │ isBestSeller │
                            └──────────────┘
```

## Security Features

### 1. Password Security
```javascript
// User.js pre-save hook
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Login comparison
const isMatch = await user.comparePassword(candidatePassword);
```

### 2. JWT Authentication
```javascript
// Token generation (7 days expiry)
const token = jwt.sign({ id }, process.env.JWT_SECRET, {
  expiresIn: '7d'
});

// Token verification in middleware
const decoded = jwt.verify(token, process.env.JWT_SECRET);
```

### 3. Role-Based Authorization
```javascript
// Protect route with role check
router.put('/meals/:id',
  protect,           // Must be logged in
  authorize('admin'), // Must be admin
  updateMeal
);
```

### 4. httpOnly Cookies
```javascript
// Token in secure httpOnly cookie
res.cookie('token', token, {
  httpOnly: true,     // Not accessible via JS
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax'
});
```

### 5. CORS Protection
```javascript
app.use(cors({
  origin: process.env.CLIENT_URL,  // Only allow frontend
  credentials: true
}));
```

## Performance Optimizations

### Frontend
1. **Code Splitting** - React Router automatically splits routes
2. **Lazy Loading** - Images load on scroll
3. **Caching** - Axios interceptor caches responses
4. **State Management** - Context API reduces prop drilling
5. **Responsive Images** - TailwindCSS responsive utilities

### Backend
1. **MongoDB Indexing** - Indexes on frequently queried fields
   ```javascript
   // User.email indexed (unique)
   // Order.user and Order.orderStatus indexed for faster queries
   ```

2. **Pagination Ready** - API supports limit/offset (future enhancement)

3. **Data Population** - Only populate when needed
   ```javascript
   const order = await Order.findById(id)
     .populate('user', 'name email')  // Only name & email
     .populate('items.meal');         // Full meal details
   ```

## Error Handling

### Frontend
```javascript
try {
  const { data } = await api.post('/auth/login', userData);
} catch (error) {
  // Error interceptor shows toast notification
  toast.error(error.response?.data?.message);
}
```

### Backend
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});
```

## Testing Workflows

### Test Authentication
1. Register new account
2. Login with credentials
3. Check token in browser cookies
4. Access protected route (cart, orders)
5. Logout and verify redirect to login

### Test Shopping
1. Browse menu with different filters
2. Add items with various quantities
3. Update cart quantities
4. Remove items
5. Verify totals

### Test Checkout
1. Complete checkout with COD
2. Complete checkout with bank transfer (see QR)
3. Verify order is created
4. Check order history
5. View order details

### Test Admin Features
1. Login as admin
2. Create new meal
3. Edit meal details
4. Create order, then update status
5. View user list and disable account

## Deployment Checklist

### Backend Deployment (Heroku/Railway/Render)
- [ ] Update MONGODB_URI to production database
- [ ] Set NODE_ENV=production
- [ ] Set JWT_SECRET to secure value
- [ ] Update CLIENT_URL to production frontend URL
- [ ] Set BANK_ACCOUNT and BANK_NAME
- [ ] Install production dependencies
- [ ] Run seed script in production database

### Frontend Deployment (Vercel/Netlify)
- [ ] Update API base URL to production backend
- [ ] Build: `npm run build`
- [ ] Test build locally: `npm run preview`
- [ ] Deploy dist folder
- [ ] Test all flows in production

## Troubleshooting Guide

### Login Issues
**Problem:** "Invalid credentials"
- Ensure mongo seed ran: `npm run seed`
- Check user email is lowercase in database
- Verify password is 123456

**Problem:** Token expired
- Clear localStorage and cookies
- Login again (new token valid for 7 days)

### Cart Issues
**Problem:** "Cart is empty" after adding items
- Verify user is authenticated
- Check localStorage for token
- Refresh page and try again

**Problem:** Totals not calculating
- Verify all meal prices are numbers
- Check CartContext.calculateTotals() is called
- Reload page if needed

### Admin Dashboard Issues
**Problem:** "Not authorized" accessing admin
- Login with admin account (admin@eatclean.com)
- Check user.role === 'admin' in database
- Verify authorize('admin') middleware

### Payment/QR Code Issues
**Problem:** QR code not showing
- Ensure qrcode package installed (`npm install qrcode`)
- Check paymentMethod is 'qr-code' or 'bank-transfer'
- Verify bankInfo string is valid for QR generation

## Future Enhancement Ideas

1. **Real Payment Gateway**
   - Stripe or PayPal integration
   - Webhook handling for payment confirmation

2. **Email Notifications**
   - Order confirmation email
   - Delivery updates

3. **SMS Reminders**
   - Twilio integration
   - Lunch reminder notifications

4. **Recommendation Engine**
   - ML-based meal recommendations
   - Based on user history and goals

5. **Subscription Plans**
   - Weekly meal plans
   - Auto-reorder functionality

6. **Advanced Admin Analytics**
   - Revenue charts
   - Customer insights
   - Popular meals report

7. **Real-time Updates**
   - WebSocket for order tracking
   - Live chat support

8. **Mobile App**
   - React Native version
   - Push notifications

9. **SEO Optimization**
   - Next.js for SSR
   - Meta tags and structured data

10. **Internationalization**
    - Add more languages
    - RTL support for Arabic

---

**This documentation provides complete understanding of EAT CLEAN architecture and implementation. Refer to code comments for additional details.**

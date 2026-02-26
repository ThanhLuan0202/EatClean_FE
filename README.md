# 🥗 EAT CLEAN - Healthy Meals Delivery Platform

A complete full-stack MVP for an online healthy meals delivery service with user authentication, shopping cart, order management, and admin dashboard.

## Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **TailwindCSS** for styling
- **React Router** for navigation
- **Axios** for API calls
- **i18next** for multi-language support (Vietnamese & English)
- **React Icons** for UI icons
- **React Toastify** for notifications

### Backend
- **Node.js + Express** for REST API
- **MongoDB + Mongoose** for database
- **JWT** for authentication
- **bcryptjs** for password hashing
- **QRCode** for payment QR generation

## Features

### User Features
✅ User Registration & Login (with JWT)
✅ Browse healthy meals with filters (weight loss, maintain, muscle gain)
✅ Product details with nutrition info
✅ Shopping cart management
✅ Checkout with multiple payment methods (COD, Bank Transfer, QR Code)
✅ Order history & tracking
✅ User profile management
✅ Multi-language support (VI/EN)
✅ Responsive mobile-first design

### Admin Features
✅ Dashboard with statistics
✅ Product management (CRUD)
✅ Order management with status updates
✅ User management (enable/disable accounts)
✅ Payment status confirmation

### Security
✅ JWT-based authentication
✅ bcrypt password hashing
✅ Role-based authorization
✅ httpOnly cookies for tokens
✅ CORS protection

## Project Structure

```
eat-clean/
├── backend/
│   ├── models/
│   │   ├── User.js
│   │   ├── Meal.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── mealController.js
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   └── adminController.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── mealRoutes.js
│   │   ├── cartRoutes.js
│   │   ├── orderRoutes.js
│   │   ├── userRoutes.js
│   │   └── adminRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   └── tokenUtils.js
│   ├── seeds/
│   │   └── seed.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── Footer.jsx
    │   │   ├── MealCard.jsx
    │   │   └── ProtectedRoute.jsx
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Menu.jsx
    │   │   ├── ProductDetail.jsx
    │   │   ├── Cart.jsx
    │   │   ├── Checkout.jsx
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── Profile.jsx
    │   │   ├── OrderHistory.jsx
    │   │   ├── OrderDetail.jsx
    │   │   ├── About.jsx
    │   │   └── admin/
    │   │       ├── Dashboard.jsx
    │   │       ├── Meals.jsx
    │   │       ├── Orders.jsx
    │   │       └── Users.jsx
    │   ├── layouts/
    │   │   ├── MainLayout.jsx
    │   │   ├── AuthLayout.jsx
    │   │   └── AdminLayout.jsx
    │   ├── context/
    │   │   ├── AuthContext.jsx
    │   │   └── CartContext.jsx
    │   ├── utils/
    │   │   └── api.js
    │   ├── i18n/
    │   │   └── config.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    ├── postcss.config.js
    ├── package.json
    └── .gitignore
```

## Getting Started

### Prerequisites
- Node.js (v16+)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Update `.env` with your MongoDB connection:
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/eat-clean
JWT_SECRET=your_secret_key_here
CLIENT_URL=http://localhost:5173
BANK_NAME=Vietcombank
BANK_ACCOUNT=1234567890
BANK_ACCOUNT_NAME=EAT CLEAN COMPANY
```

5. Seed demo data:
```bash
npm run seed
```

6. Start backend server:
```bash
npm run dev
```

Backend runs on: `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

Frontend runs on: `http://localhost:5173`

## Demo Accounts

### Admin Account
- **Email:** admin@eatclean.com
- **Password:** 123456

### User Account
- **Email:** user@eatclean.com
- **Password:** 123456

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updateprofile` - Update profile
- `PUT /api/auth/changepassword` - Change password

### Meals
- `GET /api/meals` - Get all meals (with filters)
- `GET /api/meals/:id` - Get single meal
- `GET /api/meals/:id/related` - Get related meals

### Cart
- `GET /api/cart` - Get user cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item
- `DELETE /api/cart/remove/:mealId` - Remove item
- `DELETE /api/cart/clear` - Clear cart

### Orders
- `POST /api/orders` - Create order
- `GET /api/orders/myorders` - Get user orders
- `GET /api/orders/:id` - Get order details

### Admin
- `GET /api/admin/stats` - Get dashboard stats
- `GET /api/admin/users` - Get all users
- `PUT /api/admin/users/:id/toggle-status` - Toggle user status
- `GET /api/admin/orders` - Get all orders
- `PUT /api/admin/orders/:id/status` - Update order status
- `PUT /api/admin/orders/:id/payment` - Update payment status
- `POST /api/admin/meals` - Create meal
- `PUT /api/admin/meals/:id` - Update meal
- `DELETE /api/admin/meals/:id` - Delete meal

## Database Models

### User
```javascript
{
  name: String,
  email: String (unique),
  phone: String,
  password: String (hashed),
  role: 'user' | 'admin',
  isActive: Boolean,
  avatar: String,
  address: {
    street: String,
    city: String,
    district: String,
    ward: String
  }
}
```

### Meal
```javascript
{
  name: String,
  nameVi: String,
  image: String,
  price: Number,
  calories: Number,
  protein: Number,
  carb: Number,
  fat: Number,
  category: 'weight-loss' | 'maintain' | 'muscle-gain',
  ingredients: [String],
  ingredientsVi: [String],
  description: String,
  descriptionVi: String,
  isAvailable: Boolean,
  rating: Number,
  isBestSeller: Boolean
}
```

### Cart
```javascript
{
  user: ObjectId (ref: User),
  items: [
    {
      meal: ObjectId (ref: Meal),
      quantity: Number
    }
  ],
  totalPrice: Number,
  totalCalories: Number
}
```

### Order
```javascript
{
  user: ObjectId (ref: User),
  items: [
    {
      meal: ObjectId,
      name: String,
      price: Number,
      quantity: Number,
      calories: Number
    }
  ],
  totalPrice: Number,
  totalCalories: Number,
  shippingInfo: {
    name: String,
    phone: String,
    email: String,
    address: String,
    city: String,
    district: String,
    ward: String,
    note: String
  },
  paymentMethod: 'cod' | 'bank-transfer' | 'qr-code',
  paymentStatus: 'pending' | 'paid' | 'failed',
  orderStatus: 'confirmed' | 'preparing' | 'delivering' | 'completed' | 'cancelled',
  orderNumber: String (unique),
  qrCode: String
}
```

## Key Features Implemented

### 1. Authentication & Authorization
- JWT token-based authentication
- Password hashing with bcrypt
- Role-based access control (User/Admin)
- Token stored in httpOnly cookies

### 2. Shopping Features
- Dynamic cart with instant total calculations
- Add/remove/update items
- Total price and calorie tracking
- Persistent cart per user

### 3. Checkout System
- Multiple payment methods (COD, Bank Transfer, QR Code)
- Automatic QR code generation for bank transfers
- Complete order creation with item details

### 4. Order Management
- Real-time order status tracking
- Admin can update order and payment status
- Order history for users
- Detailed order information

### 5. Multi-language Support
- English and Vietnamese
- Easy language switching
- Translated meal information
- Persistent language preference

### 6. Admin Dashboard
- Statistics overview
- Product management
- Order management with status updates
- User management

### 7. Responsive Design
- Mobile-first approach
- Tailwind CSS responsive grid
- Touch-friendly controls
- Optimized for all screen sizes

## Build & Deployment

### Frontend Build
```bash
cd frontend
npm run build
```

Output: `dist/` directory for hosting

### Backend Deployment
```bash
npm install --production
npm start
```

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/eat-clean
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CLIENT_URL=http://localhost:5173
BANK_NAME=Vietcombank
BANK_ACCOUNT=1234567890
BANK_ACCOUNT_NAME=EAT CLEAN COMPANY
```

## Customization

### Change Colors
Edit `frontend/tailwind.config.js`:
```javascript
colors: {
  primary: {
    600: '#your-color',
    // ...
  }
}
```

### Add More Meals
Use Admin Dashboard or directly insert in MongoDB

### Modify Payment Methods
Edit `frontend/src/pages/Checkout.jsx` and `backend/controllers/orderController.js`

## Performance Optimizations

- Image lazy loading
- Code splitting with React Router
- MongoDB indexing on frequently queried fields
- Caching with axios interceptors
- Debounced search input

## Security Considerations

- CORS configured to specific origin
- JWT token expiration
- Password hashing (bcrypt)
- Protected API routes
- Input validation
- httpOnly cookies

## Future Enhancements

- Real payment gateway integration (Stripe, PayPal)
- Email notifications
- SMS reminders
- Meal recommendations based on goals
- Weekly meal plan subscriptions
- Customer reviews and ratings
- Promotion codes and discounts
- Real-time notifications
- Advanced analytics for admin

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in .env
- Use MongoDB Atlas if local connection fails

### Port Already in Use
- Change PORT in .env
- Or kill process using the port

### CORS Error
- Ensure frontend URL matches CLIENT_URL in backend .env
- Check axios baseURL in frontend

### Token Expired
- Clear browser cookies and login again
- Token expiration set to 7 days by default

## Support

For issues or questions, please check the code structure and comments for guidance.

## License

This is a demo project for educational purposes.

---

**Built with ❤️ for healthy living**

# Quick Start Guide - EAT CLEAN

## 5-Minute Setup

### Step 1: Backend Setup

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Update .env with MongoDB URI (change MONGODB_URI if using local MongoDB)
# Default: MONGODB_URI=mongodb://localhost:27017/eat-clean

# Seed demo data
npm run seed

# Start backend
npm run dev
```

✅ Backend running on: `http://localhost:5000`

### Step 2: Frontend Setup

```bash
# Open new terminal, navigate to frontend
cd frontend

# Install dependencies
npm install

# Start frontend
npm run dev
```

✅ Frontend running on: `http://localhost:5173`

## Demo Accounts to Test

### Admin Login
- **Email:** `admin@eatclean.com`
- **Password:** `123456`
- **Access:** Dashboard, Product Management, Order Management

### User Login
- **Email:** `user@eatclean.com`
- **Password:** `123456`
- **Access:** Browse menu, Add to cart, Checkout, Order history

## What to Test First

### As Guest (No Login)
1. Visit home page
2. Browse menu with filters
3. View product details
4. Try adding to cart (will redirect to login)

### As User (user@eatclean.com)
1. Login with demo credentials
2. Browse meals and add to cart
3. View cart, update quantities
4. Complete checkout with COD payment
5. View order history
6. Switch language (VI/EN)
7. Update profile

### As Admin (admin@eatclean.com)
1. Login with admin credentials
2. Access admin dashboard
3. View statistics
4. Manage meals (Create, Edit, Delete)
5. Manage orders and update status
6. View and manage users

## Key Features to Try

### Multi-language Support
- Click language button (top right)
- Toggle between English and Vietnamese
- All content translates including meal info

### Shopping Experience
1. Click "Order Now" on home
2. Add meals to cart
3. Update quantities
4. Remove items
5. Proceed to checkout

### Checkout Options
- **COD:** Cash on Delivery (simple)
- **Bank Transfer:** Shows QR code for payment
- **QR Code:** Auto-generates payment QR

### Admin Features
- Create new meals with nutrition info
- Update order status (Confirmed → Preparing → Delivering → Completed)
- Confirm payments
- Enable/disable user accounts
- View dashboard statistics

## Troubleshooting

### "Cannot GET /api/meals"
- ✓ Ensure backend is running on port 5000
- ✓ Check MONGODB_URI in .env
- ✓ Verify MongoDB is running

### "CORS Error"
- ✓ Check CLIENT_URL in backend .env = http://localhost:5173
- ✓ Restart backend after changing .env

### "Login Failed"
- ✓ Run `npm run seed` in backend to create demo accounts
- ✓ Clear cookies and try again

### "Port 5000/5173 Already in Use"
- ✓ Change PORT in .env
- ✓ Or kill process: `lsof -ti:5000 | xargs kill -9`

## Project Structure Quick Reference

```
eat-clean/
├── backend/          ← Node.js + Express API
│   ├── models/       ← Database schemas
│   ├── controllers/  ← Business logic
│   ├── routes/       ← API endpoints
│   └── seeds/        ← Demo data
│
└── frontend/         ← React + Vite
    └── src/
        ├── pages/    ← Page components
        ├── components/ ← Reusable components
        ├── context/  ← Auth & Cart state
        └── i18n/     ← Language translations
```

## API Testing with curl

### Test Backend Health
```bash
curl http://localhost:5000/api/health
```

### Get All Meals
```bash
curl http://localhost:5000/api/meals
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"user@eatclean.com","password":"123456"}'
```

## Default Seeded Meals

12 healthy meals are pre-loaded:
- Grilled Chicken with Quinoa (Weight Loss)
- Salmon with Sweet Potato (Muscle Gain)
- Beef Steak with Brown Rice (Muscle Gain)
- Tofu Buddha Bowl (Weight Loss)
- Turkish Meatballs (Weight Loss)
- Shrimp Stir-Fry (Maintain)
- Greek Yogurt Chicken Bowl (Maintain)
- Tuna Poke Bowl (Maintain)
- Egg White Omelet (Weight Loss)
- Protein Pancakes (Muscle Gain)
- Cauliflower Rice Chicken (Weight Loss)
- Protein Smoothie Bowl (Maintain)

## Next Steps

### To Add Custom Meals
1. Login as admin
2. Go to Admin → Products
3. Click "Create Meal"
4. Fill in details with image URL

### To Modify Payment Methods
Edit: `frontend/src/pages/Checkout.jsx` (line ~25)

### To Change Theme Colors
Edit: `frontend/tailwind.config.js` (colors.primary)

### To Deploy
1. Backend: Deploy to Heroku/Railway/Render
2. Frontend: Deploy to Vercel/Netlify
3. Update API URLs and CORS origins

## File Sizes & Performance

- Frontend bundle: ~200KB (gzipped)
- Backend: ~5MB with node_modules
- Database: < 1MB for demo data

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile: ✅ Responsive design

---

**🎉 Enjoy! Questions? Check README.md for detailed documentation**

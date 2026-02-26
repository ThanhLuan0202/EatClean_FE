import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';
import Meal from '../models/Meal.js';

dotenv.config();

const users = [
  {
    name: 'Admin User',
    email: 'admin@eatclean.com',
    phone: '0901234567',
    password: '123456',
    role: 'admin',
    isActive: true
  },
  {
    name: 'Test User',
    email: 'user@eatclean.com',
    phone: '0907654321',
    password: '123456',
    role: 'user',
    isActive: true
  }
];

const meals = [
  {
    name: 'Grilled Chicken with Quinoa',
    nameVi: 'Gà Nướng với Quinoa',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=500',
    price: 85000,
    calories: 450,
    protein: 35,
    carb: 40,
    fat: 12,
    category: 'weight-loss',
    ingredients: ['Grilled chicken breast', 'Quinoa', 'Broccoli', 'Cherry tomatoes', 'Olive oil'],
    ingredientsVi: ['Ức gà nướng', 'Quinoa', 'Bông cải xanh', 'Cà chua bi', 'Dầu olive'],
    description: 'High protein, low fat meal perfect for weight loss. Grilled chicken breast with nutritious quinoa and fresh vegetables.',
    descriptionVi: 'Bữa ăn giàu protein, ít chất béo hoàn hảo cho giảm cân. Ức gà nướng với quinoa giàu dinh dưỡng và rau tươi.',
    isAvailable: true,
    isBestSeller: true,
    rating: 5
  },
  {
    name: 'Salmon with Sweet Potato',
    nameVi: 'Cá Hồi với Khoai Lang',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500',
    price: 120000,
    calories: 520,
    protein: 40,
    carb: 45,
    fat: 18,
    category: 'muscle-gain',
    ingredients: ['Grilled salmon', 'Sweet potato', 'Asparagus', 'Lemon', 'Herbs'],
    ingredientsVi: ['Cá hồi nướng', 'Khoai lang', 'Măng tây', 'Chanh', 'Thảo mộc'],
    description: 'Omega-3 rich salmon with complex carbs from sweet potato. Ideal for muscle building.',
    descriptionVi: 'Cá hồi giàu Omega-3 với carb phức tạp từ khoai lang. Lý tưởng cho tăng cơ.',
    isAvailable: true,
    isBestSeller: true,
    rating: 5
  },
  {
    name: 'Beef Steak with Brown Rice',
    nameVi: 'Bít Tết Bò với Gạo Lứt',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=500',
    price: 135000,
    calories: 650,
    protein: 48,
    carb: 55,
    fat: 22,
    category: 'muscle-gain',
    ingredients: ['Grass-fed beef steak', 'Brown rice', 'Green beans', 'Mushrooms', 'Garlic'],
    ingredientsVi: ['Bít tết bò thảo mộc', 'Gạo lứt', 'Đậu que', 'Nấm', 'Tỏi'],
    description: 'High protein beef steak with brown rice for sustained energy and muscle growth.',
    descriptionVi: 'Bít tết bò giàu protein với gạo lứt cho năng lượng bền vững và tăng trưởng cơ bắp.',
    isAvailable: true,
    isBestSeller: false,
    rating: 4.5
  },
  {
    name: 'Tofu Buddha Bowl',
    nameVi: 'Tô Phật Đậu Hũ',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
    price: 65000,
    calories: 380,
    protein: 18,
    carb: 48,
    fat: 12,
    category: 'weight-loss',
    ingredients: ['Grilled tofu', 'Mixed greens', 'Chickpeas', 'Avocado', 'Tahini dressing'],
    ingredientsVi: ['Đậu hũ nướng', 'Rau xanh hỗn hợp', 'Đậu gà', 'Bơ', 'Sốt tahini'],
    description: 'Plant-based protein bowl with healthy fats and fiber. Perfect vegetarian option.',
    descriptionVi: 'Tô protein thực vật với chất béo lành mạnh và chất xơ. Lựa chọn chay hoàn hảo.',
    isAvailable: true,
    isBestSeller: true,
    rating: 4.8
  },
  {
    name: 'Turkey Meatballs with Zoodles',
    nameVi: 'Thịt Viên Gà Tây với Mì Zucchini',
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500',
    price: 95000,
    calories: 340,
    protein: 32,
    carb: 22,
    fat: 14,
    category: 'weight-loss',
    ingredients: ['Turkey meatballs', 'Zucchini noodles', 'Tomato sauce', 'Basil', 'Parmesan'],
    ingredientsVi: ['Thịt viên gà tây', 'Mì bí xanh', 'Sốt cà chua', 'Húng quế', 'Phô mai Parmesan'],
    description: 'Low-carb alternative to pasta. Lean turkey meatballs with vegetable noodles.',
    descriptionVi: 'Thay thế ít carb cho mì ống. Thịt viên gà tây nạc với mì rau.',
    isAvailable: true,
    isBestSeller: false,
    rating: 4.6
  },
  {
    name: 'Shrimp Stir-Fry with Vegetables',
    nameVi: 'Tôm Xào Rau Củ',
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500',
    price: 105000,
    calories: 420,
    protein: 35,
    carb: 38,
    fat: 15,
    category: 'maintain',
    ingredients: ['Shrimp', 'Bell peppers', 'Snap peas', 'Carrots', 'Soy sauce', 'Ginger'],
    ingredientsVi: ['Tôm', 'Ớt chuông', 'Đậu Hà Lan', 'Cà rốt', 'Nước tương', 'Gừng'],
    description: 'Balanced meal with lean protein and colorful vegetables. Perfect for maintaining weight.',
    descriptionVi: 'Bữa ăn cân bằng với protein nạc và rau củ đầy màu sắc. Hoàn hảo để duy trì cân nặng.',
    isAvailable: true,
    isBestSeller: false,
    rating: 4.7
  },
  {
    name: 'Greek Yogurt Chicken Bowl',
    nameVi: 'Tô Gà Sốt Yogurt Hy Lạp',
    image: 'https://images.unsplash.com/photo-1546069901-5ec6a79120b0?w=500',
    price: 90000,
    calories: 460,
    protein: 38,
    carb: 42,
    fat: 14,
    category: 'maintain',
    ingredients: ['Chicken breast', 'Greek yogurt', 'Cucumber', 'Tomato', 'Red onion', 'Pita bread'],
    ingredientsVi: ['Ức gà', 'Yogurt Hy Lạp', 'Dưa chuột', 'Cà chua', 'Hành tây đỏ', 'Bánh pita'],
    description: 'Mediterranean-inspired bowl with protein-rich Greek yogurt and tender chicken.',
    descriptionVi: 'Tô ăn lấy cảm hứng từ Địa Trung Hải với yogurt Hy Lạp giàu protein và gà mềm.',
    isAvailable: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    name: 'Tuna Poke Bowl',
    nameVi: 'Tô Poke Cá Ngừ',
    image: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=500',
    price: 115000,
    calories: 480,
    protein: 36,
    carb: 50,
    fat: 16,
    category: 'maintain',
    ingredients: ['Fresh tuna', 'Sushi rice', 'Edamame', 'Seaweed', 'Sesame seeds', 'Soy sauce'],
    ingredientsVi: ['Cá ngừ tươi', 'Cơm sushi', 'Đậu nành', 'Rong biển', 'Hạt mè', 'Nước tương'],
    description: 'Fresh Hawaiian-style poke bowl with omega-3 rich tuna and nutritious toppings.',
    descriptionVi: 'Tô poke kiểu Hawaii với cá ngừ giàu omega-3 và topping dinh dưỡng.',
    isAvailable: true,
    isBestSeller: false,
    rating: 4.8
  },
  {
    name: 'Egg White Omelet with Spinach',
    nameVi: 'Trứng Tráng Lòng Trắng với Rau Chân Vịt',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500',
    price: 55000,
    calories: 280,
    protein: 28,
    carb: 18,
    fat: 8,
    category: 'weight-loss',
    ingredients: ['Egg whites', 'Spinach', 'Mushrooms', 'Tomatoes', 'Whole wheat toast'],
    ingredientsVi: ['Lòng trắng trứng', 'Rau chân vịt', 'Nấm', 'Cà chua', 'Bánh mì nguyên cám'],
    description: 'Low-calorie, high-protein breakfast option perfect for starting your day.',
    descriptionVi: 'Bữa sáng ít calo, giàu protein hoàn hảo để bắt đầu ngày mới.',
    isAvailable: true,
    isBestSeller: false,
    rating: 4.5
  },
  {
    name: 'Protein Pancakes with Berries',
    nameVi: 'Bánh Pancake Protein với Quả Mọng',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500',
    price: 75000,
    calories: 520,
    protein: 42,
    carb: 58,
    fat: 12,
    category: 'muscle-gain',
    ingredients: ['Protein powder', 'Oats', 'Eggs', 'Blueberries', 'Strawberries', 'Honey'],
    ingredientsVi: ['Bột protein', 'Yến mạch', 'Trứng', 'Quả việt quất', 'Dâu tây', 'Mật ong'],
    description: 'High protein breakfast pancakes with antioxidant-rich berries. Great for muscle recovery.',
    descriptionVi: 'Bánh pancake giàu protein với quả mọng giàu chất chống oxy hóa. Tuyệt vời cho phục hồi cơ.',
    isAvailable: true,
    isBestSeller: true,
    rating: 4.9
  },
  {
    name: 'Cauliflower Rice Chicken Bowl',
    nameVi: 'Tô Gà với Cơm Súp Lơ',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    price: 80000,
    calories: 320,
    protein: 34,
    carb: 24,
    fat: 10,
    category: 'weight-loss',
    ingredients: ['Chicken breast', 'Cauliflower rice', 'Bell peppers', 'Onions', 'Cilantro'],
    ingredientsVi: ['Ức gà', 'Cơm súp lơ', 'Ớt chuông', 'Hành tây', 'Rau mùi'],
    description: 'Low-carb chicken bowl with cauliflower rice. Perfect for keto diet.',
    descriptionVi: 'Tô gà ít carb với cơm súp lơ. Hoàn hảo cho chế độ keto.',
    isAvailable: true,
    isBestSeller: false,
    rating: 4.4
  },
  {
    name: 'Protein Smoothie Bowl',
    nameVi: 'Tô Sinh Tố Protein',
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=500',
    price: 70000,
    calories: 380,
    protein: 25,
    carb: 48,
    fat: 10,
    category: 'maintain',
    ingredients: ['Protein powder', 'Banana', 'Berries', 'Almond milk', 'Granola', 'Chia seeds'],
    ingredientsVi: ['Bột protein', 'Chuối', 'Quả mọng', 'Sữa hạnh nhân', 'Granola', 'Hạt chia'],
    description: 'Refreshing smoothie bowl packed with protein and antioxidants.',
    descriptionVi: 'Tô sinh tố sảng khoái chứa đầy protein và chất chống oxy hóa.',
    isAvailable: true,
    isBestSeller: true,
    rating: 4.7
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log('🔄 Clearing existing data...');
    await User.deleteMany();
    await Meal.deleteMany();

    console.log('🌱 Seeding users...');
    await User.create(users);
    console.log('✅ Users seeded');

    console.log('🌱 Seeding meals...');
    await Meal.create(meals);
    console.log('✅ Meals seeded');

    console.log('🎉 Database seeded successfully!');
    console.log('\n📧 Demo accounts:');
    console.log('Admin - email: admin@eatclean.com, password: 123456');
    console.log('User - email: user@eatclean.com, password: 123456');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();

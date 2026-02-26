import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      // Navigation
      home: 'Home',
      menu: 'Menu',
      mealPlans: 'Meal Plans',
      about: 'About Us',
      cart: 'Cart',
      login: 'Login',
      register: 'Register',
      logout: 'Logout',
      profile: 'Profile',
      orders: 'My Orders',
      admin: 'Admin',
      
      // Home Page
      heroTitle: 'Eat Clean, Live Healthy',
      heroSubtitle: 'Nutritious meals delivered to your door',
      orderNow: 'Order Now',
      bestSellers: 'Best Sellers',
      whyChooseUs: 'Why Choose EAT CLEAN?',
      
      // Menu
      allMeals: 'All Meals',
      weightLoss: 'Weight Loss',
      maintain: 'Maintain',
      muscleGain: 'Muscle Gain',
      addToCart: 'Add to Cart',
      viewDetails: 'View Details',
      
      // Product Details
      calories: 'Calories',
      protein: 'Protein',
      carbs: 'Carbs',
      fat: 'Fat',
      ingredients: 'Ingredients',
      relatedMeals: 'Related Meals',
      
      // Cart
      yourCart: 'Your Cart',
      emptyCart: 'Your cart is empty',
      totalPrice: 'Total Price',
      totalCalories: 'Total Calories',
      quantity: 'Quantity',
      remove: 'Remove',
      proceedToCheckout: 'Proceed to Checkout',
      
      // Checkout
      checkout: 'Checkout',
      shippingInfo: 'Shipping Information',
      fullName: 'Full Name',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      city: 'City',
      district: 'District',
      ward: 'Ward',
      note: 'Note',
      paymentMethod: 'Payment Method',
      cod: 'Cash on Delivery',
      bankTransfer: 'Bank Transfer',
      qrCode: 'QR Code',
      placeOrder: 'Place Order',
      
      // Orders
      orderHistory: 'Order History',
      orderNumber: 'Order Number',
      date: 'Date',
      status: 'Status',
      total: 'Total',
      viewOrder: 'View Order',
      confirmed: 'Confirmed',
      preparing: 'Preparing',
      delivering: 'Delivering',
      completed: 'Completed',
      cancelled: 'Cancelled',
      
      // Auth
      emailAddress: 'Email Address',
      password: 'Password',
      confirmPassword: 'Confirm Password',
      name: 'Name',
      loginToAccount: 'Login to Your Account',
      createAccount: 'Create Account',
      dontHaveAccount: "Don't have an account?",
      alreadyHaveAccount: 'Already have an account?',
      
      // Admin
      dashboard: 'Dashboard',
      users: 'Users',
      products: 'Products',
      orderManagement: 'Order Management',
      totalUsers: 'Total Users',
      totalOrders: 'Total Orders',
      totalRevenue: 'Total Revenue',
      recentOrders: 'Recent Orders',
      
      // Common
      search: 'Search',
      save: 'Save',
      cancel: 'Cancel',
      edit: 'Edit',
      delete: 'Delete',
      create: 'Create',
      update: 'Update',
      submit: 'Submit',
      back: 'Back',
      loading: 'Loading...',
      price: 'Price',
      
      // Footer
      aboutUs: 'About Us',
      contactUs: 'Contact Us',
      followUs: 'Follow Us',
      
      // About
      ourMission: 'Our Mission',
      missionText: 'To provide healthy, nutritious meals that help you achieve your fitness goals.',
      ourStory: 'Our Story',
      storyText: 'EAT CLEAN started with a simple belief: healthy eating should be convenient and delicious.',
    }
  },
  vi: {
    translation: {
      // Navigation
      home: 'Trang Chủ',
      menu: 'Thực Đơn',
      mealPlans: 'Gói Ăn',
      about: 'Về Chúng Tôi',
      cart: 'Giỏ Hàng',
      login: 'Đăng Nhập',
      register: 'Đăng Ký',
      logout: 'Đăng Xuất',
      profile: 'Hồ Sơ',
      orders: 'Đơn Hàng',
      admin: 'Quản Trị',
      
      // Home Page
      heroTitle: 'Ăn Sạch, Sống Khỏe',
      heroSubtitle: 'Bữa ăn dinh dưỡng giao tận nơi',
      orderNow: 'Đặt Hàng Ngay',
      bestSellers: 'Bán Chạy Nhất',
      whyChooseUs: 'Tại Sao Chọn EAT CLEAN?',
      
      // Menu
      allMeals: 'Tất Cả',
      weightLoss: 'Giảm Cân',
      maintain: 'Duy Trì',
      muscleGain: 'Tăng Cơ',
      addToCart: 'Thêm Vào Giỏ',
      viewDetails: 'Xem Chi Tiết',
      
      // Product Details
      calories: 'Calo',
      protein: 'Protein',
      carbs: 'Carb',
      fat: 'Chất Béo',
      ingredients: 'Thành Phần',
      relatedMeals: 'Món Ăn Liên Quan',
      
      // Cart
      yourCart: 'Giỏ Hàng Của Bạn',
      emptyCart: 'Giỏ hàng trống',
      totalPrice: 'Tổng Tiền',
      totalCalories: 'Tổng Calo',
      quantity: 'Số Lượng',
      remove: 'Xóa',
      proceedToCheckout: 'Tiến Hành Thanh Toán',
      
      // Checkout
      checkout: 'Thanh Toán',
      shippingInfo: 'Thông Tin Giao Hàng',
      fullName: 'Họ và Tên',
      phone: 'Số Điện Thoại',
      email: 'Email',
      address: 'Địa Chỉ',
      city: 'Thành Phố',
      district: 'Quận/Huyện',
      ward: 'Phường/Xã',
      note: 'Ghi Chú',
      paymentMethod: 'Phương Thức Thanh Toán',
      cod: 'Thanh Toán Khi Nhận Hàng',
      bankTransfer: 'Chuyển Khoản Ngân Hàng',
      qrCode: 'Mã QR',
      placeOrder: 'Đặt Hàng',
      
      // Orders
      orderHistory: 'Lịch Sử Đơn Hàng',
      orderNumber: 'Mã Đơn',
      date: 'Ngày',
      status: 'Trạng Thái',
      total: 'Tổng',
      viewOrder: 'Xem Đơn',
      confirmed: 'Đã Xác Nhận',
      preparing: 'Đang Chuẩn Bị',
      delivering: 'Đang Giao',
      completed: 'Hoàn Thành',
      cancelled: 'Đã Hủy',
      
      // Auth
      emailAddress: 'Địa Chỉ Email',
      password: 'Mật Khẩu',
      confirmPassword: 'Xác Nhận Mật Khẩu',
      name: 'Họ Tên',
      loginToAccount: 'Đăng Nhập Tài Khoản',
      createAccount: 'Tạo Tài Khoản',
      dontHaveAccount: 'Chưa có tài khoản?',
      alreadyHaveAccount: 'Đã có tài khoản?',
      
      // Admin
      dashboard: 'Tổng Quan',
      users: 'Người Dùng',
      products: 'Sản Phẩm',
      orderManagement: 'Quản Lý Đơn Hàng',
      totalUsers: 'Tổng Người Dùng',
      totalOrders: 'Tổng Đơn Hàng',
      totalRevenue: 'Tổng Doanh Thu',
      recentOrders: 'Đơn Hàng Gần Đây',
      
      // Common
      search: 'Tìm Kiếm',
      save: 'Lưu',
      cancel: 'Hủy',
      edit: 'Sửa',
      delete: 'Xóa',
      create: 'Tạo',
      update: 'Cập Nhật',
      submit: 'Gửi',
      back: 'Quay Lại',
      loading: 'Đang Tải...',
      price: 'Giá',
      
      // Footer
      aboutUs: 'Về Chúng Tôi',
      contactUs: 'Liên Hệ',
      followUs: 'Theo Dõi',
      
      // About
      ourMission: 'Sứ Mệnh',
      missionText: 'Cung cấp bữa ăn lành mạnh, giàu dinh dưỡng giúp bạn đạt được mục tiêu sức khỏe.',
      ourStory: 'Câu Chuyện',
      storyText: 'EAT CLEAN bắt đầu với niềm tin: ăn uống lành mạnh phải tiện lợi và ngon miệng.',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'vi', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;

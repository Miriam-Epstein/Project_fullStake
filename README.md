# 🎮 GameShop - Premium E-Commerce Platform

<div align="center">

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![.NET](https://img.shields.io/badge/.NET-6.0-512BD4?logo=dotnet)
![SQL Server](https://img.shields.io/badge/SQL%20Server-2022-CC2927?logo=microsoft-sql-server)
![License](https://img.shields.io/badge/license-MIT-green.svg)

**A modern, full-stack e-commerce platform for online game shopping**

[Features](#-key-features) • [Installation](#-installation) • [Architecture](#-architecture) • [Demo](#-demo)

</div>

---

## 📸 Project Preview

### 🏠 Home Page - Beautiful Product Cards
Modern, responsive product cards with stunning blue gradient themes, animated badges, and smooth hover effects.

### 🛒 Shopping Experience
Seamless shopping cart with real-time quantity updates, interactive buttons, and intuitive checkout process.

### 👤 Personal Area
Comprehensive customer dashboard with purchase history, detailed transaction information, and order tracking.

### 🔧 Admin Dashboard
Full-featured admin panel for managing products, categories, inventory, and sales analytics.

---

## ✨ Key Features

### 🎯 Customer Features
- ✅ **User Authentication** - Secure login and registration system
- ✅ **Product Catalog** - Beautiful grid display with search and filter
- ✅ **Smart Shopping Cart** - Add/remove items with quantity management
- ✅ **Purchase Flow** - Complete checkout process with payment validation
- ✅ **Order History** - Detailed view of all past purchases
- ✅ **Responsive Design** - Perfect experience on all devices

### 🛠️ Admin Features
- ✅ **Product Management** - Add, update, delete products with validation
- ✅ **Category Management** - Organize products by categories
- ✅ **Inventory Control** - Real-time stock quantity updates
- ✅ **Sales Analytics** - View detailed purchase information
- ✅ **Modern UI** - Professional admin interface with icons-only actions

### 🎨 Design Highlights
- 🌈 **Modern Gradients** - Beautiful blue color scheme throughout
- ✨ **Smooth Animations** - Elegant transitions and hover effects
- 🎭 **Icon-Based UI** - Clean, minimalist interface
- 📱 **Fully Responsive** - Mobile-first design approach
- 🎯 **Loading States** - Professional loading indicators
- 💫 **Badge System** - Premium products & stock indicators

---

## 🏗️ Architecture

### Frontend Layer
```
React Application
├── Components (UI Layer)
│   ├── Public Pages (Home, Login, Signup)
│   ├── Customer Pages (Shopping, Personal Area)
│   └── Admin Pages (Management Dashboards)
├── Redux Store (State Management)
│   ├── Customer State
│   ├── Cart State
│   ├── Game State
│   └── Category State
└── Axios Services (API Communication)
```

### Backend Layer
```
ASP.NET Core Web API
├── Controllers (REST Endpoints)
│   ├── Customer API
│   ├── Game API
│   ├── Category API
│   ├── Shopping API
│   └── Purchase Details API
├── BLL (Business Logic Layer)
│   ├── Customer Logic
│   ├── Game Logic
│   └── Purchase Logic
├── DAL (Data Access Layer)
│   ├── Customer Repository
│   ├── Game Repository
│   └── Database Context
└── DTO (Data Transfer Objects)
```

### Database Schema
```
SQL Server Database
├── Customer (Authentication & Info)
├── Games (Product Catalog)
├── Category (Product Organization)
├── Shopping (Orders)
└── PurchaseDetails (Order Items)
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI Framework |
| **Redux Toolkit** | 2.7.0 | State Management |
| **React Router** | 6.27.0 | Navigation |
| **Axios** | 1.7.9 | HTTP Client |
| **React Icons** | 5.4.0 | Icon Library |
| **React Bootstrap** | 2.10.9 | UI Components |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **.NET** | 6.0 | Runtime |
| **ASP.NET Core** | 6.0 | Web Framework |
| **Entity Framework Core** | 6.0 | ORM |
| **AutoMapper** | 6.0 | Object Mapping |
| **Swagger** | 6.2.3 | API Documentation |

### Database
| Technology | Version | Purpose |
|------------|---------|---------|
| **SQL Server** | 2022 | Relational Database |
| **Entity Framework** | 6.0 | Database Access |

---

## 🚀 Installation

### Prerequisites
- ⚙️ **Node.js** (v14 or higher)
- ⚙️ **.NET SDK** (v6.0 or higher)
- ⚙️ **SQL Server** (any recent version)
- ⚙️ **Git** (for cloning repository)

### Step 1: Clone Repository
```bash
git clone https://github.com/Miriam-Epstein/Project_fullStake.git
cd Project_fullStake
```

### Step 2: Setup Database
```sql
-- Open SQL Server Management Studio
-- Connect to your server
-- Run the script: Server/ServerGame.sql
```

This will create:
- Database: `GameStoreDB`
- Tables: Category, Games, Customer, Shopping, PurchaseDetails
- Sample data

### Step 3: Configure Connection String
Edit `WebApiGames/WebApiGames/Program.cs` (line 38):

```csharp
// Update with your SQL Server instance
options.UseSqlServer("Server=YOUR_SERVER_NAME;Database=GameStoreDB;TrustServerCertificate=True;Trusted_Connection=True;");
```

### Step 4: Install Frontend Dependencies
```bash
cd myproject-react
npm install
```

### Step 5: Run Backend Server
```bash
cd WebApiGames/WebApiGames
dotnet run
```

✅ Backend running on: `https://localhost:7035`

### Step 6: Run Frontend Application
```bash
cd myproject-react
npm start
```

✅ Frontend running on: `http://localhost:3000`

---

## 🎮 Usage Guide

### 👤 Customer Flow
1. **Browse Products** - View all available games on home page
2. **Search & Filter** - Use search bar or category filter
3. **Add to Cart** - Click "הוסף" button on any product
4. **View Cart** - Click cart icon in menu
5. **Checkout** - Click "השלם רכישה" and enter payment details
6. **View Orders** - Access personal area to see purchase history

### 🔑 Admin Login
- **Username:** `manager`
- **Password:** `1234`

### 🛠️ Admin Functions
- **Add Product** - Fill form and click "שמור משחק"
- **Update Product** - Click edit icon and modify details
- **Delete Product** - Click trash icon
- **Manage Categories** - Similar operations for categories

---

## 📊 Project Structure

```
Project_fullStake/
│
├── 📱 myproject-react/          # Frontend Application
│   ├── public/                  # Static assets
│   ├── src/
│   │   ├── components/          # React components
│   │   │   ├── home.jsx        # Product catalog
│   │   │   ├── shoppingbasket.jsx
│   │   │   ├── personalarea.jsx
│   │   │   ├── menu.jsx
│   │   │   └── ... (admin components)
│   │   ├── redux/              # State management
│   │   ├── axios/              # API services
│   │   └── App.js
│   └── package.json
│
├── 🖥️ WebApiGames/              # Backend API
│   ├── Controllers/            # API endpoints
│   ├── BLL/                    # Business logic
│   ├── DAL/                    # Data access
│   ├── DTO/                    # Data models
│   └── WebApiGames.csproj
│
├── 💾 Server/                  # Database scripts
│   └── ServerGame.sql
│
└── 📄 README.md
```

---

## 🎨 Design System

### Color Palette
- **Primary Blue:** `#3b82f6` - Main actions and accents
- **Deep Blue:** `#2563eb` - Darker accents
- **Light Blue:** `#dbeafe` - Backgrounds and borders
- **Orange:** `#f59e0b` - Premium badges
- **White:** `#ffffff` - Cards and content

### Typography
- Headers: Bold, gradient colors
- Body: Clean, readable fonts
- Buttons: Medium weight, clear hierarchy

### Components
- ✅ Modern cards with gradients
- ✅ Icon-only action buttons
- ✅ Smooth animations
- ✅ Loading states
- ✅ Empty states
- ✅ Error handling

---

## 🔧 Key Functionalities

### 1. Real-Time Inventory Management
- Automatic stock deduction on purchase
- Stock quantity validation
- Out-of-stock indicators

### 2. Advanced Shopping Cart
- Persistent cart state with Redux
- Quantity increase/decrease
- Dynamic price calculation
- Cart validation

### 3. User Authentication
- Secure login system
- User registration
- Session management
- Role-based access (Customer/Admin)

### 4. Order Management
- Complete purchase flow
- Order history tracking
- Detailed purchase information
- Export capabilities

---

## 🐛 Troubleshooting

### Backend Issues
**Problem:** API not responding
```bash
# Check if backend is running
# Verify connection string in Program.cs
# Check SQL Server is accessible
```

### Frontend Issues
**Problem:** Products not loading
```bash
# Verify backend is running on port 7035
# Check browser console for errors
# Clear browser cache
```

### Database Issues
**Problem:** Connection failed
```bash
# Update connection string with correct server name
# Ensure SQL Server is running
# Check database exists (GameStoreDB)
```

---

## 📈 Performance Optimizations

- ✅ Lazy loading for images
- ✅ Redux state caching
- ✅ Optimized re-renders
- ✅ Code splitting
- ✅ Memoized components

---

## 🔒 Security Features

- ✅ Input validation on all forms
- ✅ SQL injection prevention (Entity Framework)
- ✅ CORS configuration
- ✅ Secure authentication
- ✅ Password protection

---

## 🚀 Deployment

### Frontend Deployment
```bash
cd myproject-react
npm run build
# Deploy 'build' folder to hosting service
```

### Backend Deployment
```bash
cd WebApiGames/WebApiGames
dotnet publish -c Release
# Deploy published files to server
```

---

## 📝 API Endpoints

### Customer
- `GET /api/customer/haveCustomer` - User authentication
- `PUT /api/customer/addCustomer` - User registration

### Games
- `GET /api/game/Getlist` - Get all products
- `PUT /api/game/addgame` - Add product
- `POST /api/game/updategame/{id}` - Update product
- `DELETE /api/game/dellgame/{id}` - Delete product
- `POST /api/game/saveAmount` - Update inventory

### Shopping
- `PUT /api/shopping/save/{customerId}` - Create order
- `GET /api/shopping/getBuysByCustId/{id}` - Get user orders

---

## 👨‍💻 Developer

**מרים אפשטיין** - Full Stack Developer

- 📧 Email: m0533123308@gmail.com
- 📱 Phone: 053-312-3308
- 💼 LinkedIn: [Miriam Epstein](https://linkedin.com/in/miriam-epstein)

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- Built with ❤️ using React and .NET
- Modern UI/UX best practices
- Clean code architecture
- Professional development standards

---

<div align="center">

**Made with 💙 by Miriam Epstein**

⭐ Star this repo if you find it helpful!

</div>

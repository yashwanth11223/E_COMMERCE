# 🛒 Local Store - E-commerce Web Application

A modern **full-stack E-commerce web application** built using **Next.js, NextAuth, MongoDB, and Tailwind CSS**.  
This platform allows users to browse products, manage carts, and securely authenticate using multiple login methods.

---

## 🚀 Features

### 👤 Authentication
- Email & Password login
- Google OAuth login
- GitHub OAuth login
- Secure authentication using **NextAuth**
- Forgot password & reset password system

### 🛍️ E-commerce Functionality
- Browse product listings
- View individual product pages
- Add products to cart
- Increase / decrease cart quantity
- Persistent cart using LocalStorage

### 📦 Product Management
- Product data stored in `data/products.js`
- Dynamic product routing (`/product/[id]`)
- Product images stored in `/public/products`

### 📊 User Dashboard
- User profile page
- Secure protected routes
- Middleware authentication

### 🎨 UI/UX
- Responsive design
- Styled using **Tailwind CSS**
- Modern login and registration pages
- Sticky navigation bar
- Icons and UI components

---

## 🏗️ Tech Stack

| Technology | Usage |
|-------------|--------|
| **Next.js 16** | Fullstack framework |
| **NextAuth.js** | Authentication |
| **MongoDB** | Database |
| **Tailwind CSS** | Styling |
| **React Icons** | UI Icons |
| **Node.js** | Backend runtime |

---

## 📁 Project Structure
```
ecom
│
├── app
│ ├── about
│ ├── blogs
│ ├── cart
│ ├── dashboard
│ ├── login
│ ├── register
│ ├── profile
│ ├── products
│ ├── product/[id]
│ ├── forgot-password
│ ├── reset-password
│ ├── api
│ │ ├── auth
│ │ ├── register
│ │ ├── forgot-password
│ │ └── reset-password
│
├── components
│ ├── Nav.js
│ ├── ProductCard.js
│ ├── Session.js
│ ├── AuthWrapper.js
│ └── Sign.js
│
├── data
│ └── products.js
│
├── lib
│ ├── mongodb.js
│ └── sendEmail.js
│
├── models
│ └── User.js
│
├── public
│ └── products (product images)
│
├── middleware.js
└── next.config.mjs
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root:
```
MONGODB_URI=your_mongodb_connection_string

NEXTAUTH_SECRET=your_secret

NEXTAUTH_URL=http://localhost:3000

GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_secret

GOOGLE_ID=your_google_client_id
GOOGLE_SECRET=your_google_secret

EMAIL_USER=your_email
EMAIL_PASS=your_email_password
```

---

## 🖥️ Installation

Clone the repository:
```
git clone
```

Move into the project:


cd local-store


Install dependencies:


npm install


Run the development server:


npm run dev


Open in browser:


http://localhost:3000


---

## 🔐 Authentication Flow

1. User registers an account
2. Password is securely stored in MongoDB
3. User logs in using:
   - Email & Password
   - Google OAuth
   - GitHub OAuth
4. Session managed using **NextAuth**

---

## 📸 Screens

Pages included:

- Home Page
- Products Page
- Product Details
- Cart Page
- Login Page
- Register Page
- Profile Page
- Dashboard
- Forgot Password
- Reset Password
- About Page
- Services Page

---

## 📈 Future Improvements

- Payment gateway integration
- Order management
- Product reviews
- Admin dashboard
- Product search & filters
- Wishlist functionality

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
Move into the project:

```
cd local-store
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

Open in browser:

```
http://localhost:3000
```

---

## 🔐 Authentication Flow

1. User registers an account
2. Password is securely stored in MongoDB
3. User logs in using:
   - Email & Password
   - Google OAuth
   - GitHub OAuth
4. Session managed using **NextAuth**

---

## 📸 Screens

Pages included:

- Home Page
- Products Page
- Product Details
- Cart Page
- Login Page
- Register Page
- Profile Page
- Dashboard
- Forgot Password
- Reset Password
- About Page
- Services Page

---

## 📈 Future Improvements

- Payment gateway integration
- Order management
- Product reviews
- Admin dashboard
- Product search & filters
- Wishlist functionality

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

Developed by **Yashwanth**

# 🍽️ Food Delivery App

A full-stack food delivery web application with two separate user interfaces: one for **Admin** and one for **Customers (Frontend)**. Both interfaces are connected to a single shared **Backend** for managing data, APIs, and authentication.

This project is structured into three main folders:

- `backend/` – Node.js/Express server handling all API routes and database communication.
- `admin/` – Admin dashboard to manage food items, orders, and customers.
- `frontend/` – Customer-facing UI to browse food, place orders, and track deliveries.

---

## 🔧 Project Structure

/food-delivery-app  
├── backend/ → Express backend (APIs, DB, Auth)  
├── admin/ → Admin Panel  
├── frontend/ → User Frontend  
└── README.md

---

## 🚀 How to Run the Project

### Step 1: Clone the Repository

`git clone https://github.com/your-username/food-delivery-app.git`  
`cd food-delivery-app`

### Step 2: Install Dependencies

**For Backend:**  
`cd backend`  
`npm install`

**For Admin Panel:**  
`cd ../admin`  
`npm install`

**For Frontend:**  
`cd ../frontend`  
`npm install`

### Step 3: Start the Development Servers

**Start Backend:**  
`cd ../backend`  
`npm start`

**Start Admin Panel:**  
`cd ../admin`  
`npm run dev`

**Start Frontend:**  
`cd ../frontend`  
`npm run dev`

Make sure the backend is running before starting frontend/admin so they can connect to the APIs properly.

---

## 🔗 Local Access Links

- Admin Panel: (https://delivery-app-admin-tnt2.onrender.com)  
- Frontend: (https://delivery-app-frontend-yrrg.onrender.com)

These links may vary based on deploy the setup.

---

## 🛠️ Tech Stack

- **Frontend:** React or HTML/CSS/JS  
- **Admin Panel:** React or custom JS dashboard  
- **Backend:** Node.js + Express  
- **Database:** MongoDB or MySQL  
- **Communication:** RESTful API

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend/` folder with the following keys:

`PORT=5000`  
`MONGODB_URI=your_mongodb_connection_string`  
`JWT_SECRET=your_jwt_secret_key`

Make sure both the admin and frontend projects have proper API base URLs configured to talk to the backend (can be set via their own `.env` files if needed).

---

## 👤 Author

Bharat(https://github.com/bharatmudgil0)

---

## 📄 License

This project is licensed under the MIT License.

# 🌐 LingoConnect

**LingoConnect** is a full-stack language exchange platform that connects users worldwide for **chat and video calls**, enabling them to **practice new languages** and make **global friendships**.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure signup/login with JWT & cookie-based auth  
- 📝 **User Onboarding** – Profile setup with name, bio, languages, and location  
- 👤 **Profile Management** – Update user info easily  
- 🎨 **Theme Selection** – Personalize the interface with dynamic themes  
- 🤝 **Friend Management** – Send, accept, and manage friend requests  
- 🔍 **User Discovery** – Get matched with recommended users  
- 💬 **Real-time Chat** – Seamless messaging via Stream Chat API  
- 📹 **Video Calls** – One-click calls from chat using Stream Video SDK  

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- **React** – UI library  
- **Vite** – Lightning-fast dev server  
- **Tailwind CSS + DaisyUI** – Modern, utility-first styling  
- **React Router** – Routing  
- **TanStack Query** – Data fetching & caching  
- **Zustand** – Lightweight state management  
- **Lucide React** – Elegant icon pack  
- **Stream SDKs** – Chat & Video integrations  
- **Axios** – API requests  
- **React Hot Toast** – Notifications  

### 🧠 Backend
- **Node.js + Express** – Server framework  
- **MongoDB + Mongoose** – Database & ODM  
- **JWT + Bcrypt** – Authentication & password hashing  
- **Cookie Parser, CORS, Dotenv** – Middleware & env management  
- **Stream Chat API** – Real-time communication  

---

## 🧪 Getting Started

Follow these steps to run LingoConnect locally:

### ✅ Prerequisites
- Node.js (v18+)
- MongoDB Atlas or local MongoDB
- Stream.io account (Chat & Video API keys)

### 📦 Installation

1. **Clone the repository**  
    ```bash
    git clone https://github.com/rupeshmerotha/LingoConnect.git
    cd LingoConnect
    ```

2. **Install Backend Dependencies**  
    ```bash
    cd backend
    npm install
    ```

3. **Install Frontend Dependencies**  
    ```bash
    cd ../frontend
    npm install
    ```

4. **Set up Environment Variables**

    In `backend/.env`:
    ```
    PORT=5000
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET_KEY=your_jwt_secret
    STREAM_API_KEY=your_stream_api_key
    STREAM_API_SECRET=your_stream_api_secret
    NODE_ENV=development
    ```

    In `frontend/.env`:
    ```
    VITE_STREAM_API_KEY=your_stream_api_key
    ```

---

### ▶️ Running the App

1. **Start Backend**
    ```bash
    cd backend
    npm run server
    ```
    Runs at `http://localhost:5000`

2. **Start Frontend**
    ```bash
    cd ../frontend
    npm run dev
    ```
    Runs at `http://localhost:5173`

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/signup` | Register user |
| `POST` | `/api/auth/login` | Login user |
| `POST` | `/api/auth/logout` | Logout user |
| `GET`  | `/api/auth/me` | Get logged-in user |
| `POST` | `/api/auth/onboarding` | Complete profile |
| `GET`  | `/api/users` | Get recommended users |
| `GET`  | `/api/users/friends` | Get friend list |
| `POST` | `/api/users/friend-request/:id` | Send friend request |
| `PUT`  | `/api/users/friend-request/:id/accept` | Accept friend request |
| `GET`  | `/api/users/friend-requests` | Incoming & accepted requests |
| `GET`  | `/api/users/outgoing-friend-requests` | Outgoing requests |
| `GET`  | `/api/chat/token` | Get Stream token |

---

## 📬 Contact

Made with ❤️ by [@rupeshmerotha](https://github.com/rupeshmerotha)  

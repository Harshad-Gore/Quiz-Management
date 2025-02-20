# Quiz Management System

## 📂 Project Folder Structure
```
quiz-management/
│── 📂 public/              # Stores static HTML, CSS, JS files
│   ├── 📜 index.html       # Main frontend page
│   ├── 📜 quiz.html        # Quiz page
│   ├── 📜 styles.css       # Stylesheet
│   ├── 📜 script.js        # Frontend JS logic
│
│── 📂 src/                 # Backend source code
│   ├── 📂 models/          # Mongoose models
│   │   ├── 📜 Quiz.js      # Quiz Schema
│   │   ├── 📜 User.js      # User Schema (if needed)
│   │
│   ├── 📂 routes/          # API routes
│   │   ├── 📜 quizRoutes.js # Quiz API endpoints
│   │   ├── 📜 userRoutes.js # User authentication (optional)
│   │
│   ├── 📂 controllers/     # Controller logic for APIs
│   │   ├── 📜 quizController.js  
│   │   ├── 📜 userController.js  
│   │
│   ├── 📂 middleware/      # Middleware (Auth, Logging, etc.)
│   │   ├── 📜 authMiddleware.js
│   │
│   ├── 📜 server.js        # Main Express server
│
│── 📂 config/              # Configuration files
│   ├── 📜 db.js            # Database connection setup
│   ├── 📜 dotenv           # Environment variables
│
│── 📂 utils/               # Utility functions (helper functions)
│   ├── 📜 errorHandler.js  
│
│── 📂 node_modules/        # Installed dependencies (auto-generated)
│── 📜 .env                 # Environment variables file
│── 📜 .gitignore           # Ignore unnecessary files
│── 📜 package.json         # Project dependencies & scripts
│── 📜 README.md            # Project documentation
```

## 🚀 Installation & Setup

### 1️⃣ Install Dependencies
```sh
npm install mysql2 dotenv express cors body-parser
npm install --save-dev nodemon
```

### 2️⃣ Configure package.json
Add the following script in `package.json`:
```json
"scripts": {
  "dev": "nodemon src/server.js"
}
```

### 3️⃣ Start the Server
```sh
nodemon src/server.js
# OR
npm run dev
```

## 📊 Summary Table
| Folder/File | Description |
|------------|-------------|
| `public/` | Stores static frontend files like HTML, CSS, JS |
| `src/models/` | Mongoose schemas for Quiz & User |
| `src/routes/` | Defines API endpoints for quiz and user authentication |
| `src/controllers/` | Handles API logic and request handling |
| `src/middleware/` | Contains middleware functions like authentication |
| `src/server.js` | Main Express.js server file |
| `config/db.js` | Database connection setup |
| `utils/errorHandler.js` | Utility functions for error handling |
| `.env` | Stores environment variables |
| `package.json` | Defines project dependencies and scripts |
| `README.md` | Project documentation |

This repository serves as a simple quiz management system using Node.js, Express, and MySQL.

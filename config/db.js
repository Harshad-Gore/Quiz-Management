const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

// Create a MySQL connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
        process.exit(1);
    } else {
        console.log("✅ MySQL Connected Successfully!");
    }
});

module.exports = db;

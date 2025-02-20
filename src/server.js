const express = require("express");
const path = require("path");
const app = express();
const port = 5000;
const { v4: uuidv4 } = require('uuid');

// Middleware to serve static files from the "public" folder
app.use(express.static("public"));

app.get("/api/add-quiz", (req, res) => {
  const quizId = uuidv4();
  res.json({ quizId });
});

app.get("/accounts-login-signup", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/accounts.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
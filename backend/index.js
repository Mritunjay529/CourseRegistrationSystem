const express = require('express');
require('dotenv').config();
const applyRouter= require("./routes/applyroute") // Load .env file
const connectDB = require('./confi/db'); // Connect MongoDB
const cors= require("cors")
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

// mioddlreware:
app.use(express.json())
app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))


// route:
app.use("/apply",applyRouter)

app.listen(PORT, () => {
  console.log(`✅ App listening on port ${PORT}`);
});

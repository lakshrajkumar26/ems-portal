const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080
const cors = require("cors");
const db = require("./Config/db");
const authRoutes = require("./routes/authRoute");
require("dotenv").config();
const errorHandler = require("./middleware/ErrorHandler.middleware");

app.use(express.json());

app.use("/api/auth",authRoutes);

app.get("/",(req,res) => {
    res.send("hi come here")
})

// Error handler should be last   global 
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
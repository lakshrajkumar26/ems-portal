const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080
const cors = require("cors");
const db = require("./Config/db");``
const authRoutes = require("./routes/authRoute");
const userRoutes = require("./routes/userRoute");
const employeeRoutes = require("./routes/employeeRoute");
const workAssignmentRoute = require("./routes/workAssignmentRoute");
const leaveRoute = require("./routes/leavesRoute");
require("dotenv").config();
const errorHandler = require("./middleware/ErrorHandler.middleware");
const attendanceRoute = require("./routes/attendaceRoute");
const allowedOrigin = ["http://localhost:5173","*"];

app.use(cors({
    origin:allowedOrigin,
    methods: ["GET","POST"]
}))

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);
app.use("/api/employee",employeeRoutes);
app.use("/api/attendance",attendanceRoute);
app.use("/api/workAssignment",workAssignmentRoute);
app.use("/api/leave",leaveRoute);

app.get("/",(_,res) => {
    res.send("hi come here")
})


// Error handler should be last   global 
app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
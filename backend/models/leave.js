const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
  employee: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Employee", 
    required: true 
  },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["Pending", "Approved", "Rejected"], 
    default: "Pending" 
  },
  appliedAt: { type: Date, default: Date.now }
}, { timestamps: true });

const Leave = mongoose.model("Leave", leaveSchema);
module.exports =  Leave;
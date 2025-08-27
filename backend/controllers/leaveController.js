const { success } = require("zod");
const Leave = require("../models/leave");
const ApiError = require("../utils/ApiError");
const { asyncHandler } = require("../utils/AsyncHandler");

// @desc    Apply for leave
// @route   POST /api/leaves/apply
// @access  Employee
// think edge cases
const applyLeave = asyncHandler(async (req, res, next) => {
  const { startDate, endDate, reason } = req.body;
  const { userId } = req.user;

  const overlap = await Leave.findOne({
    employee: userId,
    $and: [{ startDate: { $lte: endDate } }, { endDate: { $gte: startDate } }],
  });

  if (overlap) {
    return next(new ApiError("Leave already applied for these dates", 400));
  }

  const newLeave = await Leave.create({
    employee: userId,
    startDate,
    endDate,
    reason,
  });

  if (!newLeave) {
    return next(new ApiError("Leave creation failed", 500));
  }
  res.status(201).json({
    message: "Leave created Successfully",
    success: true,
    data: newLeave,
  });
});

const EditLeave = asyncHandler(async (req, res, next) => {
  const { leaveid } = req.params;
  const { startDate, endDate, reason } = req.body;

  const leave = await Leave.findById(leaveid);

  if (!leave) {
    return next(new ApiError("leave not found", 404));
  }
  const updatedLeave = {};
  if (startDate) updatedLeave.startDate = startDate;
  if (endDate) updatedLeave.endDate = endDate;
  if (reason) updatedLeave.reason = reason;

  const final = await Leave.findByIdAndUpdate(leaveid, updatedLeave, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({message:"leave updated successfully",success:true,data:final})
});

// @desc    Get all leave requests
// @route   GET /api/leaves
// @access  Admin/HR
const getAllLeaves = asyncHandler(async (req, res, next) => {
  const leaves = await Leave.find()
    .populate({ path: "employee", select: "name email" })
    .sort({ appliedAt: -1 });
  if (leaves.length === 0) {
    return next(new ApiError("no Leaves found", 404));
  }
  res
    .status(200)
    .json({ message: "Leaves found", success: true, data: leaves });
});

// @desc    Get leave by ID
// @route   GET /api/leaves/:id
// @access  Protected
const getLeavesById = asyncHandler(async (req, res, next) => {
  const leave = await Leave.findById(req.params.leaveid).populate(
    "employee",
    "name email"
  );
  if (!leave) return next(new ApiError("Leave not found", 404));
  res.status(200).json({ success: true, data: leave });
});

// @desc    Approve leave
// @route   PUT /api/leaves/:id/approve
// @access  Admin/HR
const approveLeave = asyncHandler(async (req, res, next) => {
  const leave = await Leave.findOne({
    _id: req.params.leaveid,
    status: { $nin: ["Approved", "Rejected"] },
  });
  if (!leave)
    return next(new ApiError("Leave not found or already status updated", 404));
  leave.status = "Approved";
  await leave.save();
  res.status(200).json({
    success: true,
    message: "Leave approved successfully",
    data: leave,
  });
});

// @desc    Reject leave
// @route   PUT /api/leaves/:id/reject
// @access  Admin/HR
const rejectLeave = asyncHandler(async (req, res, next) => {
  const { leaveid } = req.params;

  const leave = await Leave.findOne({
    _id: leaveid,
    status: { $nin: ["Approved", "Rejected"] },
  });
  if (!leave)
    return next(new ApiError("Leave not found or already status updated", 404));

  leave.status = "Rejected";
  await leave.save();
  res
    .status(200)
    .json({ success: true, message: "Leave rejected", data: leave });
});

const deleteLeave = asyncHandler(async (req, res, next) => {
  const { leaveid } = req.params;
  const leave = await Leave.findByIdAndDelete(leaveid);
  if (!leave) {
    return next(new ApiError("leave not found", 404));
  }
  res.status(200).json({
    message: "Leave deleted  successfully",
    success: true,
    data: leave,
  });
});
module.exports = {
  applyLeave,
  getAllLeaves,
  getLeavesById,
  approveLeave,
  rejectLeave,
  deleteLeave,
  EditLeave
};

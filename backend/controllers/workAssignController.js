const WorkAssign = require("./../models/workAssign");
const Employee = require("../models/employee");
const { asyncHandler } = require("../utils/AsyncHandler");
const ApiError = require("../utils/ApiError");
const { success } = require("zod");

// Create a new work assignment
const createWorkAssign = asyncHandler(async (req, res, next) => {
  const { userId } = req.user;
  //takes userId
  const { assignedTo, title, description, dueDate, priority } = req.body;

  const user = await Employee.findById(assignedTo);

  if (!user) {
    return next(new ApiError("User not found", 404));
  }

  const work = await WorkAssign.create({
    title,
    description,
    dueDate,
    priority,
    assignedTo: user,
    assignedBy: userId,
    status: "pending",
  });

  res
    .status(201)
    .json({ message: "Work assigned successfully", success: true, data: work });
});

// Get all assignments
const getAllAssignment = asyncHandler(async (req, res, next) => {
  const works = await WorkAssign.find()
    .populate({ path: "assignedTo", select: "name email position" })
    .populate({ path: "assignedBy", select: "name email" });
  //or inside a array Both will Work
  // .populate([{ path:"assignedBy",select : "name email"},{ path:"assignedBy",select : "name email"}])
  if (!works) {
    return next(new ApiError("Assignment not Found", 404));
  }
  res.status(200).json({ message: "Work found", data: works, success: true });
});

// Get single assignment
const getAllAssignmentById = asyncHandler(async (req, res, next) => {
  const { workid } = req.params;
  const work = await WorkAssign.findById(workid).populate([
    { path: "assignedTo", select: "name email" },
    { path: "assignedBy", select: "name email" },
  ]);
  if (!work) {
    return next(new ApiError("work not found", 404));
  }
  res.status(200).json({ message: "work found", success: true, data: work });
});

// Update assignment
const updateAssignment = asyncHandler(async (req, res, next) => {
  const { workid } = req.params;
  const {
    title,
    description,
    dueDate,
    priority,
    assignedTo,
    assignedBy,
    status,
  } = req.body;

  const work = await WorkAssign.findById(workid);

  if (!work) {
    return next(new ApiError("work not found", 404));
  }

  const updatedWork = {};
  if (title) {
    updatedWork.title = title;
  }
  if (description) {
    updatedWork.description = description;
  }
  if (dueDate) {
    updatedWork.dueDate = dueDate;
  }
  if (assignedTo) {
    updatedWork.assignedTo = assignedTo;
  }
  if (assignedBy) {
    updatedWork.assignedBy = assignedBy;
  }
  if (status) {
    updatedWork.status = status;
  }
  if (priority) {
    updatedWork.priority = priority;
  }

  const finalWork = await WorkAssign.findByIdAndUpdate(workid, updatedWork, {
    new: true,
    runValidators: true,
  }).populate([
    { path: "assignedTo", select: "name email" },
    { path: "assignedBy", select: "name email" },
  ]);

  res.status(200).json({
    message: "Assignment updated successfully",
    success: true,
    data: finalWork,
  });
});

const deleteAssignment = asyncHandler(async (req, res, next) => {
  const { workid } = req.params;

  const deleted = await WorkAssign.findByIdAndDelete(workid).populate([
    { path: "assignedTo", select: "name email" },
    { path: "assignedBy", select: "name email" },
  ]);

  if (!deleted) {
    return next(new ApiError("work not found"));
  }
  res.status(200).json({
    message: "Work deleted Successfully",
    success: true,
    data: deleted,
  });
});

const updateAssignmentStatus = asyncHandler(async (req, res, next) => {
  const { status } = req.body;
  const { workid } = req.params;
  //further check with zod
  const validStatus = ["pending", "progress", "completed"];
  if (!validStatus.includes(status)) {
    return res.status(400).json({ message: "Invalid status value" });
  }
  const work = await WorkAssign.findOne({
    $and: [{ _id: { $eq: workid } }, { status: { $ne: "completed" } }],
  });

  if (!work) {
    return next(
      new ApiError("Pending work not found or already completed", 404)
    );
  }

  const updated = await WorkAssign.findByIdAndUpdate(
    workid,
    { status },
    { new: true }
  ).populate([
    { path: "assignedTo", select: "name email" },
    { path: "assignedBy", select: "name email" },
  ]);
  if (!updated) {
    return next(new ApiError("work not found", 404));
  }
  res.status(200).json({
    message: "Work status updated now cannot be Changed",
    success: true,
    data: updated,
  });
});

module.exports = {
  createWorkAssign,
  getAllAssignment,
  getAllAssignmentById,
  updateAssignment,
  deleteAssignment,
  updateAssignmentStatus,
};

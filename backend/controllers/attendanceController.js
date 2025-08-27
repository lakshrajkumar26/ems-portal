const Attendance = require("../models/attendance");
const ApiError = require("../utils/ApiError");
const { asyncHandler } = require("../utils/AsyncHandler");

// @desc    Employee Check-In
// @route   POST /api/attendance/checkin
// @access  Employee
const checkIn = asyncHandler(async (req, res, next) => {
  const { userId } = req.user;
  const today = new Date();
  today.setHours(0, 0, 0, 0); //we want all attendance records created Today

  const exisitng = await Attendance.findOne({
    employee: userId,
    date: { $gte: today },
  });
  if (exisitng) {
    return next(new ApiError("Already checked in today", 400));
  }

  const attendance = await Attendance.create({
    employee: userId,
    checkInTime: new Date(),
  });
  res.status(201).json({
    message: "Checked in successfully",
    success: true,
    data: attendance,
  });
});

// @desc    Employee Check-Out
// @route   POST /api/attendance/checkout
// @access  Employee
const checkOut = asyncHandler(async (req, res, next) => {
  const { userId } = req.user;

  const today = new Date().setHours(0, 0, 0, 0);

const attendance = await Attendance.findOne(
    {
      employee :userId,
      date : {$gte : today}
    }).populate({ path:"employee",select:"-role -status -position"})
  if (!attendance) {
    return next(new ApiError("no check-in found for today", 400));
  }
//   attendance.checkOutTime = new Date();
//   await attendance.save();

  res.status(200).json({
    success: true,
    message: "Checked out successfully",
    data: attendance,
  });
});

// @desc    Get Attendance of a Single Employee
// @route   GET /api/attendance/:employeeId
// @access  Admin/HR
const getAttendaceByEmployee = asyncHandler(async (req, res, next) => {
  const { employeeId } = req.params;

  const records = await Attendance.findOne({
    employee : employeeId
  }).populate({ path:"employee" , select : "-createdAt -updatedAt"});

    if (!records) {
      return next(new ApiError(`no records found for UserId :${employeeId} `));
    }

  res.status(200).json({
    message: "records found",
    success: true,
    data: records,
    count: records?.length,
  });
});
const getAllAttendace = asyncHandler(async (req, res, next) => {
  const attendance = await Attendance.find();

  res
    .status(200)
    .json({ message: "Records found", success: true, data: attendance });
});

module.exports = { checkIn, checkOut, getAttendaceByEmployee, getAllAttendace };

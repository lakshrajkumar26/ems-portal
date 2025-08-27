const router = require("express").Router();

const {
  checkIn,
  checkOut,
  getAttendaceByEmployee,
  getAllAttendace,
} = require("./../controllers/attendanceController");
const { verifyJWT } = require("./../middleware/auth.Middleware");

router.use(verifyJWT);

router.post("/checkin", checkIn);
router.post("/checkout", checkOut);
router.get("/:employeeId", getAttendaceByEmployee);
router.get("/", getAllAttendace);
module.exports = router;

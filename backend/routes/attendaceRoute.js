const router = require("express").Router();

const {
  checkIn,
  checkOut,
  getAttendaceByEmployee,
  getAllAttendace,
} = require("./../controllers/attendanceController");
const { verifyJWT } = require("./../middleware/auth.Middleware");

const {verifyRole} = require("../middleware/roleBased.Middleware")
router.use(verifyJWT);

router.post("/checkin", checkIn);
router.post("/checkout", checkOut);
router.get("/:employeeId", getAttendaceByEmployee);
router.get("/",verifyRole("admin","hr") ,getAllAttendace);
module.exports = router;

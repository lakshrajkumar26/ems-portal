const router = require("express").Router();
const {
  createWorkAssign,
  getAllAssignment,
  getAllAssignmentById,
  updateAssignment,
  deleteAssignment,
  updateAssignmentStatus,
  getPendingWorkAssignedToMe,
  getCompletedWorkAssignedToMe
  
} = require("../controllers/workAssignController");
const { verifyJWT } = require("../middleware/auth.Middleware");
const { verifyRole } = require("../middleware/roleBased.Middleware");

router.use(verifyJWT);

router.patch("/:workid", updateAssignmentStatus);
router.get("/getmypendingwork", getPendingWorkAssignedToMe);

router.get("/getmycompletedwork", getCompletedWorkAssignedToMe);



router.use(verifyRole("admin"));

router.post("/", createWorkAssign);
router.get("/", getAllAssignment);
router.get("/:workid", getAllAssignmentById);
router.put("/:workid", updateAssignment);
router.delete("/:workid", deleteAssignment);



module.exports = router;

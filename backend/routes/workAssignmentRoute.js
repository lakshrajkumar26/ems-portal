const router = require("express").Router();
const {
  createWorkAssign,
  getAllAssignment,
  getAllAssignmentById,
  updateAssignment,
  deleteAssignment,
  updateAssignmentStatus,
} = require("../controllers/workAssignController");
const { verifyJWT } = require("../middleware/auth.Middleware");
const { verifyRole } = require("../middleware/roleBased.Middleware");

router.use(verifyJWT);
router.use(verifyRole("admin"));

router.post("/", createWorkAssign);
router.get("/", getAllAssignment);
router.get("/:workid", getAllAssignmentById);
router.put("/:workid", updateAssignment);
router.delete("/:workid", deleteAssignment);
router.patch("/:workid", updateAssignmentStatus);

module.exports = router;

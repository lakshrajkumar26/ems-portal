const router = require("express").Router();
const {
 applyLeave,
 getAllLeaves,
 getLeavesById,
approveLeave,
rejectLeave,
deleteLeave,
EditLeave
} = require("./../controllers/leaveController");
const { verifyJWT } = require("./../middleware/auth.Middleware");

router.use(verifyJWT);

router.post("/applyleave", applyLeave);
router.post("/editleave/:leaveid", EditLeave);
router.get("/leaves", getAllLeaves);
router.get("/:leaveid", getLeavesById);
router.post("/approved/:leaveid", approveLeave);
router.post("/reject/:leaveid", rejectLeave);
router.delete("/deleteleave/:leaveid", deleteLeave);


module.exports = router;

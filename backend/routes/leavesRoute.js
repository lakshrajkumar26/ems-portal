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
const {verifyRole} = require("../middleware/roleBased.Middleware")
const { verifyJWT } = require("./../middleware/auth.Middleware");

router.use(verifyJWT);


router.post("/applyleave", applyLeave);
router.post("/editleave/:leaveid", EditLeave);
router.get("/:leaveid", getLeavesById);
router.delete("/deleteleave/:leaveid", deleteLeave);

router.get("/leaves",verifyRole("admin","hr"), getAllLeaves);
router.post("/approved/:leaveid", verifyRole("admin","hr"),approveLeave);
router.post("/reject/:leaveid", verifyRole("admin","hr"),rejectLeave);



module.exports = router;

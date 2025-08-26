const {getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee} = require("../controllers/employeeController");
const router = require("express").Router();
const {verifyJWT} = require('../middleware/auth.Middleware')
const {verifyRole} = require('../middleware/roleBased.Middleware')

router.use(verifyJWT);
router.use(verifyRole("admin"));

router.get('/',getAllEmployees);
router.get('/:id',getEmployeeById);
router.put('/:id',updateEmployee);
router.delete('/:id',deleteEmployee);



module.exports = router;

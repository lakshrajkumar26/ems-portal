# POST   /api/auth/register        → Register new employee (Admin or HR only)
# POST   /api/auth/login           → Login (Employee/Admin/HR)
# POST   /api/auth/logout          → Logout
# GET    /api/auth/profile         → Get logged-in user profile (protected)
# POST    /api/auth/profile         → Update logged-in user profile (protected)   (Left)

2. Employee Routes
# GET    /api/employees            → Get all employees (Admin/HR)
# GET    /api/employees/:id        → Get single employee details
# POST   /api/employees            → Add new employee (Admin/HR)
# PUT    /api/employees/:id        → Update employee details (Admin/HR)
# DELETE /api/employees/:id        → Delete employee (Admin)


3. Department & Role Management
# GET    /api/departments          → List all departments
# POST   /api/departments          → Add department (Admin)
# PUT    /api/departments/:id      → Update department (Admin)
# DELETE /api/departments/:id      → Delete department (Admin)

# GET    /api/roles                → List all roles
# POST   /api/roles                → Add role (Admin)
# PUT    /api/roles/:id            → Update role (Admin)
# DELETE /api/roles/:id            → Delete role (Admin)

4. Attendance Routes
# POST   /api/attendance/checkin   → Employee check-in
# POST   /api/attendance/checkout  → Employee check-out
# GET    /api/attendance/:id       → Get attendance of employee
# GET    /api/attendance           → Get all attendance records (Admin/HR)

5. Leave Management
# POST   /api/leaves/apply         → Apply for leave (Employee) (edge cases) 
# GET    /api/leaves               → Get all leave requests (Admin/HR)
# GET    /api/leaves/:id           → Get leave details
# PUT    /api/leaves/:id/approve   → Approve leave (Admin/HR)
# PUT    /api/leaves/:id/reject    → Reject leave (Admin/HR)
# DELETE /api/leave/:id            → Delete leave 
# POST   /api/leave/:id            → update leave  (edge cases) 

6. Payroll (Optional)
# GET    /api/payroll              → Get all payroll data (Admin/HR)
# GET    /api/payroll/:id          → Get employee payroll
# POST   /api/payroll/generate     → Generate salary (Admin/HR)

7. Admin Panel
# GET    /api/admin/stats          → Get dashboard stats (total employees, leaves, etc.)

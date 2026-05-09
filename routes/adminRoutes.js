const express = require("express");
const {
  getAllUsers,
  toggleUserStatus,
  changeUserRole,
  getDashboardStats,
  assignCaregiverToPatient,
  removeAssignment,
  getUsersByRole
} = require("../controllers/adminController");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/dashboard-stats", protect, authorize("admin"), getDashboardStats);
router.get("/users", protect, authorize("admin"), getAllUsers);
router.get("/users-by-role", protect, authorize("admin"), getUsersByRole);
router.patch("/users/:id/status", protect, authorize("admin"), toggleUserStatus);
router.patch("/users/:id/role", protect, authorize("admin"), changeUserRole);
router.post("/assign-caregiver", protect, authorize("admin"), assignCaregiverToPatient);
router.delete("/assign-caregiver", protect, authorize("admin"), removeAssignment);

module.exports = router;
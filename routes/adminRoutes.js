const express = require("express");
const {
  getAllUsers,
  toggleUserStatus,
  changeUserRole
} = require("../controllers/adminController");

const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/users", protect, authorize("admin"), getAllUsers);
router.patch("/users/:id/status", protect, authorize("admin"), toggleUserStatus);
router.patch("/users/:id/role", protect, authorize("admin"), changeUserRole);

module.exports = router;
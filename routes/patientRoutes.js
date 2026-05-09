const express = require("express");
const {
  getPatientTasks,
  completeTask,
  getPatientHistory,
  getPatientDashboard
} = require("../controllers/patientController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

// Patient Dashboard Routes
router.get("/dashboard", protect, authorize("user"), getPatientDashboard);
router.get("/tasks", protect, authorize("user"), getPatientTasks);
router.post("/tasks/:taskId/complete", protect, authorize("user"), completeTask);
router.get("/history", protect, authorize("user"), getPatientHistory);

module.exports = router;

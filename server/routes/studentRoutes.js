const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { isStudent } = require("../middleware/roleMiddleware");
const { getAllJobs, applyJob } = require("../controllers/studentController");

router.get("/jobs", auth, isStudent, getAllJobs);
router.post("/apply/:id", auth, isStudent, applyJob);

module.exports = router;
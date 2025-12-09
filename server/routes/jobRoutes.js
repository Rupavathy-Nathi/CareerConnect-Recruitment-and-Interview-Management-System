const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { isRecruiter } = require("../middleware/roleMiddleware");
const { createJob, getMyJobs } = require("../controllers/jobController");

router.post("/", auth, isRecruiter, createJob);
router.get("/my", auth, isRecruiter, getMyJobs);

module.exports = router;
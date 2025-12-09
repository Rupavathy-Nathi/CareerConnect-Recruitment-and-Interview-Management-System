const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { isRecruiter, isStudent } = require("../middleware/roleMiddleware");

router.get("/student", auth, isStudent, (req, res) => {
    res.json({ message: "Welcome Student" });
});

router.get("/recruiter", auth, isRecruiter, (req, res) => {
    res.json({ message: "Welcome Recruiter" });
});

module.exports = router;
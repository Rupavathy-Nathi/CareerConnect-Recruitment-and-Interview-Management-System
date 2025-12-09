exports.isRecruiter = (req, res, next) => {
    if (req.user.role !== "recruiter") {
        return res.status(403).json({ message: "Recruiter access only" });
    }
    next();
};

exports.isStudent = (req, res, next) => {
    if (req.user.role !== "student") {
        return res.status(403).json({ message: "Student access only" });
    }
    next();
};
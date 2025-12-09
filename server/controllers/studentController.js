const Job = require("../models/Job");
const Application = require("../models/Application");

exports.getAllJobs = async(req, res) => {
    const jobs = await Job.find().populate("postedBy", "name");
    res.json(jobs);
};

exports.applyJob = async(req, res) => {
    const jobId = req.params.id;

    const alreadyApplied = await Application.findOne({
        job: jobId,
        student: req.user.id
    });

    if (alreadyApplied)
        return res.status(400).json({ message: "Already applied to this job" });

    const application = await Application.create({
        job: jobId,
        student: req.user.id
    });

    res.status(201).json(application);
};
import { useEffect, useState } from "react";
import api from "../services/api";

export default function StudentDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await api.get("/student/jobs");
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  const applyJob = async (jobId) => {
    try {
      await api.post(`/student/apply/${jobId}`);
      alert("Applied successfully");
    } catch {
      alert("Already applied");
    }
  };

  return (
    <div>
      <h2>Available Jobs</h2>
      {jobs.map(job => (
        <div key={job._id}>
          <h4>{job.title}</h4>
          <p>{job.location}</p>
          <button onClick={() => applyJob(job._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";
import api from "../services/api";

export default function RecruiterDashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await api.get("/jobs/my");
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <div>
      <h2>My Jobs</h2>
      {jobs.map((job) => (
        <div key={job._id}>
          <h4>{job.title}</h4>
          <p>{job.location}</p>
        </div>
      ))}
    </div>
  );
}

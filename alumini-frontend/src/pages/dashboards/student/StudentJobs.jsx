import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function StudentJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios
      .get("https://alumni-project-8aoi.onrender.com/api/jobs")
      .then((res) => setJobs(res.data));
  }, []);

  return (
    <DashboardLayout role="student">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Job Opportunities</h2>

        <div className="row">
          {jobs.map((j) => (
            <div className="col-md-4 mb-4" key={j.id}>
              <div className="card shadow p-3">
                <h4>{j.title}</h4>

                <p>{j.company}</p>

                <p>{j.description}</p>

                <button className="btn btn-success">Apply</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentJobs;

import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function Mentorship() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/mentors")
      .then((res) => setMentors(res.data));
  }, []);

  return (
    <DashboardLayout role="student">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Alumni Mentors</h2>

        <div className="row">
          {mentors.map((m) => (
            <div className="col-md-4 mb-4" key={m.id}>
              <div className="card shadow p-3">
                <h4>{m.alumniName}</h4>

                <p>
                  <b>Expertise :</b> {m.expertise}
                </p>

                <p>
                  <b>Availability :</b> {m.availability}
                </p>

                <button className="btn btn-primary">Request Mentorship</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Mentorship;

import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/students")
      .then((res) => setStudents(res.data));
  }, []);

  return (
    <DashboardLayout role="alumni">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Students Directory</h2>

        <div className="row">
          {students.map((s) => (
            <div className="col-md-4 mb-4" key={s.id}>
              <div className="card shadow p-3">
                <h4>{s.name}</h4>

                <p>Department : {s.department}</p>

                <p>Year : {s.year}</p>

                <p>Skills : {s.skills}</p>

                <button className="btn btn-primary">Connect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ViewStudents;

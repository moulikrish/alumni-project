import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function ViewAlumni() {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/auth/alumni")
      .then((res) => {
        console.log(res.data); // debug
        setAlumni(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <DashboardLayout role="student">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Alumni Network</h2>

        <div className="row">
          {alumni.length === 0 ? (
            <p className="text-center">No Alumni Found</p>
          ) : (
            alumni.map((a) => (
              <div className="col-md-4 mb-4" key={a.id}>
                <div className="card shadow p-3">
                  <img
                    src="https://i.pinimg.com/736x/33/f8/26/33f8266681c946cd80de486c499fe992.jpg"
                    className="card-img-top mb-2"
                  />
                  <h4>{a.name}</h4>

                  <p>
                    <b>Department :</b> {a.department}
                  </p>

                  <p>
                    <b>Company :</b> {a.company}
                  </p>

                  <p>
                    <b>Role :</b> {a.designation}
                  </p>

                  <p>
                    <b>Location :</b> {a.location}
                  </p>

                  <button className="btn btn-success">Connect</button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ViewAlumni;

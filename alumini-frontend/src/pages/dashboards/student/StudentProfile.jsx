import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function StudentProfile() {
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    year: "",
    skills: "",
  });

  const studentId = 1; // temporary (later login la localStorage use pannalam)

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`http://localhost:8080/api/students/${id}`)
      .then((res) => setProfile(res.data));
  }, []);

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const updateProfile = () => {
    const id = localStorage.getItem("id");

    axios
      .put(`http://localhost:8080/api/students/${id}`, profile)
      .then(() => alert("Profile Updated"));
  };

  return (
    <DashboardLayout role="student">
      <div className="container mt-4">
        <h2 className="text-center mb-4">Student Profile</h2>

        <div className="card p-4 shadow col-md-6 mx-auto">
          <input
            className="form-control mb-3"
            name="name"
            placeholder="Enter name"
            value={profile.name || ""}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="email"
            value={profile.email || ""}
            readOnly
            style={{ backgroundColor: "#e9ecef" }}
          />

          <input
            className="form-control mb-3"
            name="department"
            placeholder="Department"
            value={profile.department || ""}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="year"
            placeholder="Year"
            value={profile.year || ""}
            onChange={handleChange}
          />

          <input
            className="form-control mb-3"
            name="skills"
            placeholder="Skills"
            value={profile.skills || ""}
            onChange={handleChange}
          />

          <button className="btn btn-success w-100" onClick={updateProfile}>
            Update Profile
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default StudentProfile;

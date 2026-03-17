import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function AlumniProfile() {
  const [profile, setProfile] = useState({
    id: "",
    name: "",
    email: "",
    department: "",
    company: "",
    designation: "",
    location: "",
  });

  useEffect(() => {
    const id = localStorage.getItem("id");

    axios
      .get(`http://localhost:8080/auth/alumni/${id}`)
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
      .put(`http://localhost:8080/auth/alumni/${id}`, profile)
      .then(() => alert("Profile Updated"));
  };

  return (
    <DashboardLayout role="alumni">
      <div className="container mt-4">
        <h2 className="text-center mb-4">My Profile</h2>

        <div className="card p-4 shadow col-md-6 mx-auto">
          {/* NAME */}
          <input
            className="form-control mb-3"
            name="name"
            value={profile.name}
            onChange={handleChange}
            placeholder="Enter name"
          />

          {/* EMAIL - READ ONLY */}
          <input
            className="form-control mb-3"
            name="email"
            value={profile.email}
            placeholder="email"
            style={{ backgroundColor: "#e9ecef" }}
            readOnly
          />

          {/* DEPARTMENT */}
          <input
            className="form-control mb-3"
            name="department"
            value={profile.department}
            onChange={handleChange}
            placeholder="Department"
          />

          {/* COMPANY */}
          <input
            className="form-control mb-3"
            name="company"
            value={profile.company}
            onChange={handleChange}
            placeholder="Company"
          />

          {/* DESIGNATION */}
          <input
            className="form-control mb-3"
            name="designation"
            value={profile.designation}
            onChange={handleChange}
            placeholder="Designation"
          />

          {/* LOCATION */}
          <input
            className="form-control mb-3"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="Location"
          />

          <button className="btn btn-primary w-100" onClick={updateProfile}>
            Update Profile
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AlumniProfile;

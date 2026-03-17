import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function AdminDashboard() {

  const [analytics, setAnalytics] = useState({
    totalUsers: 0,
    totalAlumni: 0,
    totalStudents: 0,
    totalEvents: 0
  });

  const [users, setUsers] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8080/admin/analytics")
      .then(res => setAnalytics(res.data))
      .catch(err => console.log(err));

    axios.get("http://localhost:8080/api/admin/users")
      .then(res => setUsers(res.data.slice(0,5)))
      .catch(err => console.log(err));

  }, []);

  return (

    <DashboardLayout role="admin">

      <h2>Admin Dashboard</h2>

      <div className="cards">

        <div className="card">
          <h3>Total Users</h3>
          <p>{analytics.totalUsers}</p>
        </div>

        <div className="card">
          <h3>Total Alumni</h3>
          <p>{analytics.totalAlumni}</p>
        </div>

        <div className="card">
          <h3>Students</h3>
          <p>{analytics.totalStudents}</p>
        </div>

        <div className="card">
          <h3>Events</h3>
          <p>{analytics.totalEvents}</p>
        </div>

      </div>

      <h3>Recent Users</h3>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>

          {users.map(user => (

            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>

  );
}

export default AdminDashboard;
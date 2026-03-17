import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://alumni-project-8aoi.onrender.com/api/admin/users")
      .then((res) => setUsers(res.data));
  };

  const deleteUser = (id) => {
    axios
      .delete(`https://alumni-project-8aoi.onrender.com/api/admin/user/${id}`)
      .then(() => fetchUsers());
  };

  return (
    <DashboardLayout role="admin">
      <h2>Manage Users</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>

              <td>
                <button onClick={() => deleteUser(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}

export default ManageUsers;

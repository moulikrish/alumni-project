import { useEffect, useState } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function ApproveAlumni(){

  const [alumni,setAlumni] = useState([]);

  const fetchAlumni = () => {

    axios.get("http://localhost:8080/api/admin/users")
      .then(res => {

        const pending = res.data.filter(
          u => u.role === "alumni" && !u.approved
        );

        setAlumni(pending);

      });

  };

  useEffect(()=>{
    fetchAlumni();
  },[]);

  const approve = (id) => {

    axios.put(`http://localhost:8080/api/admin/approve/${id}`)
      .then(()=>{
        setAlumni(alumni.filter(a => a.id !== id));
      });

  };

  return(

    <DashboardLayout role="admin">

      <h2>Approve Alumni</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {alumni.map(a => (

            <tr key={a.id}>

              <td>{a.name}</td>
              <td>{a.email}</td>

              <td>
                <button onClick={()=>approve(a.id)}>
                  Approve
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </DashboardLayout>

  );

}

export default ApproveAlumni;
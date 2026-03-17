import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function ManageStudents(){

  const [students,setStudents] = useState([]);
  const [search,setSearch] = useState("");

  const [editId,setEditId] = useState(null);

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [department,setDepartment] = useState("");

  // GET STUDENTS
  const fetchStudents = async () => {

    const res = await axios.get("https://alumni-project-8aoi.onrender.com/api/students");

    setStudents(res.data);

  }

  useEffect(()=>{
    fetchStudents();
  },[])


  // DELETE
  const deleteStudent = async(id)=>{

    await axios.delete(`https://alumni-project-8aoi.onrender.com/api/students/${id}`);

    alert("Student Deleted");

    fetchStudents();

  }


  // EDIT
  const editStudent = (student)=>{

    setEditId(student.id);

    setName(student.name);
    setEmail(student.email);
    setDepartment(student.department);

  }


  // UPDATE
  const updateStudent = async(e)=>{

    e.preventDefault();

    await axios.put(`https://alumni-project-8aoi.onrender.com/api/students/${editId}`,{
      name,
      email,
      department
    });

    alert("Student Updated");

    setEditId(null);
    setName("");
    setEmail("");
    setDepartment("");

    fetchStudents();

  }


  // SEARCH FILTER
  const filteredStudents = students.filter((s)=>
    s.name.toLowerCase().includes(search.toLowerCase())
  );


  return(

    <DashboardLayout role="staff">

      <div className="container">

        <h2 className="text-center mb-4">Manage Students</h2>


        {/* Search */}

        <div className="row justify-content-center mb-4">

          <div className="col-md-6">

            <input
            className="form-control"
            placeholder="Search Student..."
            onChange={(e)=>setSearch(e.target.value)}
            />

          </div>

        </div>


        {/* Edit Form */}

        {editId && (

          <div className="row justify-content-center mb-4">

            <div className="col-md-6">

              <div className="card p-4 shadow">

                <h5 className="mb-3">Edit Student</h5>

                <form onSubmit={updateStudent}>

                  <div className="mb-3">
                    <input
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <input
                    className="form-control"
                    placeholder="Department"
                    value={department}
                    onChange={(e)=>setDepartment(e.target.value)}
                    />
                  </div>

                  <button className="btn btn-primary w-100">
                    Update Student
                  </button>

                </form>

              </div>

            </div>

          </div>

        )}


        {/* Students Table */}

        <div className="table-responsive">

          <table className="table table-bordered table-striped">

            <thead className="table-dark">

              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredStudents.map((student)=>(
                
                <tr key={student.id}>

                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.department}</td>

                  <td>

                    <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={()=>editStudent(student)}
                    >
                      Edit
                    </button>

                    <button
                    className="btn btn-danger btn-sm"
                    onClick={()=>deleteStudent(student.id)}
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>

  )

}

export default ManageStudents
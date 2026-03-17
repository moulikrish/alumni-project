import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function MentorStudents(){

  const [name,setName] = useState("");
  const [expertise,setExpertise] = useState("");
  const [availability,setAvailability] = useState("");

  const [mentors,setMentors] = useState([]);
  const [editId,setEditId] = useState(null);

  // GET mentors
  const fetchMentors = async () => {

    const res = await axios.get("http://localhost:8080/api/mentors");
    setMentors(res.data);

  }

  useEffect(()=>{
    fetchMentors();
  },[])


  const handleMentor = async(e)=>{

    e.preventDefault();

    try{

      if(editId){

        await axios.put(`http://localhost:8080/api/mentors/${editId}`,{
          alumniName:name,
          expertise:expertise,
          availability:availability
        });

        alert("Mentor Updated");
        setEditId(null);

      }else{

        await axios.post("http://localhost:8080/api/mentors",{
          alumniName:name,
          expertise:expertise,
          availability:availability
        });

        alert("Mentor Registered");

      }

      setName("");
      setExpertise("");
      setAvailability("");

      fetchMentors();

    }catch(error){
      console.log(error);
      alert("Error");
    }

  }


  // DELETE mentor
  const deleteMentor = async(id)=>{

    await axios.delete(`http://localhost:8080/api/mentors/${id}`);

    alert("Mentor Deleted");

    fetchMentors();

  }


  // EDIT mentor
  const editMentor = (mentor)=>{

    setEditId(mentor.id);

    setName(mentor.alumniName);
    setExpertise(mentor.expertise);
    setAvailability(mentor.availability);

  }


  return(

    <DashboardLayout role="alumni">

      <div className="container">

        <h2 className="text-center mb-4">Mentor Students</h2>

        {/* Mentor Form */}

        <div className="row justify-content-center">

          <div className="col-md-3">

            <div className="card shadow p-4 mb-5">

              <form onSubmit={handleMentor}>

                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                  className="form-control"
                  placeholder="Enter Your Name"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Expertise</label>
                  <input
                  className="form-control"
                  placeholder="Java, React"
                  value={expertise}
                  onChange={(e)=>setExpertise(e.target.value)}
                  required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Availability</label>
                  <input
                  className="form-control"
                  placeholder="Weekends / Evenings"
                  value={availability}
                  onChange={(e)=>setAvailability(e.target.value)}
                  required
                  />
                </div>

                <button className="btn btn-primary w-100">
                  {editId ? "Update Mentor" : "Become Mentor"}
                </button>

              </form>

            </div>

          </div>

        </div>


        {/* Mentor List */}

        <h3 className="text-center mb-4">Available Mentors</h3>

        <div className="row">

          {mentors.map((mentor)=>(
            
            <div className="col-md-4 mb-4" key={mentor.id}>

              <div className="card shadow">

                <div className="card-body">

                  <h5 className="card-title">{mentor.alumniName}</h5>

                  <p className="card-text">
                    <strong>Expertise:</strong> {mentor.expertise}
                  </p>

                  <p className="card-text">
                    <strong>Availability:</strong> {mentor.availability}
                  </p>

                  <button
                    className="btn btn-warning me-2"
                    onClick={()=>editMentor(mentor)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={()=>deleteMentor(mentor.id)}
                  >
                    Delete
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>

  )

}

export default MentorStudents;
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function ManageJobs(){

  const [title,setTitle] = useState("");
  const [company,setCompany] = useState("");
  const [location,setLocation] = useState("");
  const [description,setDescription] = useState("");

  const [jobs,setJobs] = useState([]);
  const [editId,setEditId] = useState(null);

  // GET JOBS
  const fetchJobs = async () => {

    const res = await axios.get("http://localhost:8080/api/jobs");
    setJobs(res.data);

  };

  useEffect(()=>{
    fetchJobs();
  },[]);


  const postJob = async(e)=>{

    e.preventDefault();

    try{

      if(editId){

        await axios.put(`http://localhost:8080/api/jobs/${editId}`,{
          title,
          company,
          location,
          description
        });

        alert("Job Updated");

        setEditId(null);

      }else{

        await axios.post("http://localhost:8080/api/jobs",{
          title,
          company,
          location,
          description
        });

        alert("Job Posted");

      }

      setTitle("");
      setCompany("");
      setLocation("");
      setDescription("");

      fetchJobs();

    }catch(error){
      console.log(error);
      alert("Error");
    }

  }


  // DELETE JOB
  const deleteJob = async(id)=>{

    await axios.delete(`http://localhost:8080/api/jobs/${id}`);

    alert("Job Deleted");

    fetchJobs();

  }


  // EDIT JOB
  const editJob = (job)=>{

    setEditId(job.id);

    setTitle(job.title);
    setCompany(job.company);
    setLocation(job.location);
    setDescription(job.description);

  }

  return(

    <DashboardLayout role="staff">

      <div className="container">

        <h2 className="d-flex justify-content-center mb-4">Manage Jobs</h2>

        {/* JOB FORM */}

        <div className="p-4 mb-5 d-flex justify-content-center">

          <form onSubmit={postJob} style={{border:"1px black solid", padding:"20px", borderRadius:"10px", boxShadow:"2px 2px 2px 2px  black"}}> 

            <div className="mb-3">
              <label className="form-label">Job Title</label>
              <input
                className="form-control"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                className="form-control"
                value={company}
                onChange={(e)=>setCompany(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Location</label>
              <input
                className="form-control"
                value={location}
                onChange={(e)=>setLocation(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e)=>setDescription(e.target.value)}
                required
              />
            </div>

            <button className="btn btn-primary">
              {editId ? "Update Job" : "Post Job"}
            </button>

          </form>

        </div>

        {/* JOB LIST */}

        <h3 className="mb-3 d-flex justify-content-center">Posted Jobs</h3>

        <div className="row">

          {jobs.map((job)=>(
            
            <div className="col-md-3 mb-4" key={job.id}>

              <div className="card shadow">

                <div className="card-body">

                  <h5 className="card-title">{job.title}</h5>

                  <p className="card-text text-dark">
                    <strong>Company:</strong> {job.company}
                  </p>

                  <p className="card-text text-dark">
                    <strong>Location:</strong> {job.location}
                  </p>

                  <p className="card-text text-dark">{job.description}</p>

                  <button
                    className="btn btn-warning me-2"
                    onClick={()=>editJob(job)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={()=>deleteJob(job.id)}
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

export default ManageJobs
import { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../../../components/DashboardLayout";

function Donate(){

  const [name,setName] = useState("");
  const [amount,setAmount] = useState("");
  const [message,setMessage] = useState("");

  const [donations,setDonations] = useState([]);
  const [editId,setEditId] = useState(null);

  // GET DONATIONS
  const fetchDonations = async () => {

    const res = await axios.get("http://localhost:8080/api/donations");
    setDonations(res.data);

  }

  useEffect(()=>{
    fetchDonations();
  },[])

  const handleDonate = async(e)=>{

    e.preventDefault();

    try{

      if(editId){

        await axios.put(`http://localhost:8080/api/donations/${editId}`,{
          alumniName:name,
          amount:amount,
          message:message
        });

        alert("Donation Updated");
        setEditId(null);

      }else{

        await axios.post("http://localhost:8080/api/donations",{
          alumniName:name,
          amount:amount,
          message:message
        });

        alert("Donation Successful");

      }

      setName("");
      setAmount("");
      setMessage("");

      fetchDonations();

    }catch(error){
      console.log(error);
      alert("Donation Failed");
    }

  }

  // DELETE
  const deleteDonation = async(id)=>{

    await axios.delete(`http://localhost:8080/api/donations/${id}`);
    alert("Donation Deleted");

    fetchDonations();

  }

  // EDIT
  const editDonation = (donation)=>{

    setEditId(donation.id);

    setName(donation.alumniName);
    setAmount(donation.amount);
    setMessage(donation.message);

  }

  return(

    <DashboardLayout role="alumni">

      <div className="container">

        <h2 className="text-center mb-4">Donate to College</h2>

        {/* Donation Form */}

        <div className="row justify-content-center">

          <div className="col-md-3">

            <div className="card shadow p-4 mb-5">

              <form onSubmit={handleDonate}>

                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input
                  className="form-control"
                  value={name}
                  onChange={(e)=>setName(e.target.value)}
                  required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e)=>setAmount(e.target.value)}
                  required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea
                  className="form-control"
                  rows="3"
                  value={message}
                  onChange={(e)=>setMessage(e.target.value)}
                  />
                </div>

                <button className="btn btn-success w-100">
                  {editId ? "Update Donation" : "Donate"}
                </button>

              </form>

            </div>

          </div>

        </div>

        {/* Donation List */}

        <h3 className="text-center mb-4">Donation History</h3>

        <div className="row">

          {donations.map((donation)=>(
            
            <div className="col-md-4 mb-4" key={donation.id}>

              <div className="card shadow">

                <div className="card-body">

                  <h5 className="card-title">{donation.alumniName}</h5>

                  <p className="card-text">
                    <strong>Amount:</strong> ₹{donation.amount}
                  </p>

                  <p className="card-text">{donation.message}</p>

                  <button
                    className="btn btn-warning me-2"
                    onClick={()=>editDonation(donation)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={()=>deleteDonation(donation.id)}
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

export default Donate;
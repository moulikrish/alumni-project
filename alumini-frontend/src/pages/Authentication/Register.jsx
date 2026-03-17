import { useState } from "react";
import "../Styles/register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

  const navigate = useNavigate();

  const[name, setName] = useState("")
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    const user = {
      name,
      role,
      email,
      password
    };

    try{

      await axios.post("https://alumni-project-8aoi.onrender.com/auth/register", user);

      alert("Registration Successful");

      navigate("/login");

    }catch(error){

      console.log(error);
      alert("Registration Failed");

    }

  };

  return (

    <div className="register-container">

      <div className="register-card">

        <h4 className="text-center mb-3">REGISTER</h4>

        <div className="role-buttons">

          <button type="button"
            className={role === "student" ? "active" : ""}
            onClick={() => setRole("student")}
          >
            Student
          </button>

          <button type="button"
            className={role === "alumni" ? "active" : ""}
            onClick={() => setRole("alumni")}
          >
            Alumni
          </button>

          <button type="button"
            className={role === "staff" ? "active" : ""}
            onClick={() => setRole("staff")}
          >
            Staff
          </button>

          <button type="button"
            className={role === "admin" ? "active" : ""}
            onClick={() => setRole("admin")}
          >
            Admin
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <label>Name</label>
          
          <input
            type="text"
            className="form-control mb-3"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />

          <label>Email</label>
          
          <input
            type="email"
            className="form-control mb-3"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            className="form-control mb-3"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />

          <label>Confirm Password</label>

          <input
            type="password"
            className="form-control mb-3"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn register-btn w-100">
            Register Now
          </button>

          <p className="text-center mt-3">
            Already have an account?
            <Link to="/login" className="login-link"> Login</Link>
          </p>

        </form>

      </div>

    </div>
  );
}

export default Register;
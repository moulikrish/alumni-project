import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://alumni-project-8aoi.onrender.com/auth/login", {
        email,
        password,
      });

      if (res.data.error) {
        alert(res.data.error);
        return;
      }

      const { token, role, name } = res.data;

      localStorage.setItem("token", token);
      localStorage.setItem("role", role.toLowerCase());
      localStorage.setItem("name", name);
      localStorage.setItem("id", res.data.id);

      alert("Login Successful");

      // redirect based on role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "student") {
        navigate("/student-dashboard");
      } else if (role === "alumni") {
        navigate("/alumni-dashboard");
      } else if (role === "staff") {
        navigate("/staff-dashboard");
      }

      // trigger navbar re-render
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login Form</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>

          <p className="register-text">Welcome to Kathir Alumni</p>
        </form>
      </div>
    </div>
  );
}

export default Login;





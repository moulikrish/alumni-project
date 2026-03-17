import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../assets/logo-dark.webp";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const role = localStorage.getItem("role");
  const name = localStorage.getItem("name");

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > lastScroll) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();

    navigate("/login");

    window.location.reload();
  };

  return (
    <nav className={`navbar ${show ? "show" : "hide"}`}>
      <div className="logo">
        <img src={logo} alt="Logo" height="50" />
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/institutions">Our Institutions</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="auth-buttons">
        {!role && (
          <Link to="/login" className="login">
            Login
          </Link>
        )}

        {role === "admin" && (
          <>
            <Link
              to="/admin-dashboard"
              className="dashboard-link"
              style={{
                textDecoration: "none",
                color: "#c79112",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "6px",
              }}
            >
              Admin Home
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
            <span className="welcome" style={{ color: "lightgray" }}>
              Welcome, {name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "white",
                color: "#ce9818",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}

        {role === "staff" && (
          <>
            <Link
              to="/staff-dashboard"
              className="dashboard-link"
              style={{
                textDecoration: "none",
                color: "#c79112",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "6px",
              }}
            >
              Staff Home
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
            <span className="welcome" style={{ color: "lightgray" }}>
              Welcome, {name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "white",
                color: "#ce9818",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}

        {role === "alumni" && (
          <>
            <Link
              to="/alumni-dashboard"
              className="dashboard-link"
              style={{
                textDecoration: "none",
                color: "#c79112",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "6px",
              }}
            >
              Alumni Home
            </Link>
            <span className="welcome" style={{ color: "lightgray" }}>
              Welcome, {name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "white",
                color: "#ce9818",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}

        {role === "student" && (
          <>
            <Link
              to="/student-dashboard"
              className="dashboard-link"
              style={{
                textDecoration: "none",
                color: "#c79112",
                backgroundColor: "white",
                padding: "5px",
                borderRadius: "6px",
              }}
            >
              Student Home
            </Link>
            <span className="welcome" style={{ color: "lightgray" }}>
              Welcome, {name}
            </span>
            <button
              onClick={handleLogout}
              style={{
                backgroundColor: "white",
                color: "#ce9818",
                padding: "8px 15px",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

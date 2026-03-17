import "./Styles/home.css";
import { FaCalendarAlt, FaUserGraduate, FaBriefcase } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Alumni Portal</h1>

          <p>Connecting Students, Alumni and Staff Together</p>

          {/* <button className="explore-btn">Explore</button> */}
        </div>
      </section>

      {/* CARDS SECTION */}
      {/* CARDS SECTION */}
      <section className="cards-section">
        <div className="card">
          <FaCalendarAlt className="card-icon" />

          <h2>Events</h2>

          <p className="p">
            Stay updated with upcoming alumni meetups, seminars and networking
            events.
          </p>

          <button className="card-btn">View Events</button>
        </div>

        <div className="card">
          <FaUserGraduate className="card-icon" />

          <h2>Alumni</h2>

          <p className="p">
            Connect with our strong alumni network across different industries.
          </p>

          <button className="card-btn">Explore Alumni</button>
        </div>

        <div className="card">
          <FaBriefcase className="card-icon" />

          <h2>Jobs</h2>

          <p className="p">
            Discover job opportunities shared by alumni and partner companies.
          </p>

          <button className="card-btn">View Jobs</button>
        </div>
      </section>
    </div>
  );
}

export default Home;

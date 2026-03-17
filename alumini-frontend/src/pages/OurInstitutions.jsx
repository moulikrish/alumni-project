import "./Styles/ourinstitutions.css";
import {
  FaUniversity,
  FaCapsules,
  FaUserNurse,
  FaStethoscope,
  FaHeartbeat,
} from "react-icons/fa";

function OurInstitutions() {
  return (
    <div className="institutions-page">
      <h1 className="page-title">Our Institutions</h1>

      <div className="institutions-container">
        {/* Engineering */}
        <div className="institution-card">
          <div className="institution-icon">
            <FaUniversity />
          </div>

          <div className="institution-content">
            <h2>Engineering and Technology</h2>

            <p>
              Provides high quality technical education with modern laboratories
              and experienced faculty.
            </p>

            <a href="https://engineering.shanmugha.edu.in/" target="_blank">
              <button className="visit-btn">Visit Website</button>
            </a>
          </div>
        </div>

        {/* Pharmacy */}
        <div className="institution-card">
          <div className="institution-icon">
            <FaCapsules />
          </div>

          <div className="institution-content">
            <h2>Pharmacy</h2>

            <p>
              Focused on pharmaceutical education and healthcare innovation.
            </p>

            <a href="https://shanmughapharmacy.edu.in/" target="_blank">
              <button className="visit-btn">Visit Website</button>
            </a>
          </div>
        </div>

        {/* Nursing */}
        <div className="institution-card">
          <div className="institution-icon">
            <FaUserNurse />
          </div>

          <div className="institution-content">
            <h2>Nursing</h2>

            <p>
              Training compassionate and skilled nurses to serve healthcare
              systems globally.
            </p>

            <a
              href="https://shanmughanursing.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="visit-btn">Visit Website</button>
            </a>
          </div>
        </div>

        {/* Medical Science */}
        <div className="institution-card">
          <div className="institution-icon">
            <FaStethoscope />
          </div>

          <div className="institution-content">
            <h2>Medical Science</h2>

            <p>
              Advanced medical education with focus on research and clinical
              excellence.
            </p>

            <a
              href="https://medicalscience.shanmugha.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="visit-btn">Visit Website</button>
            </a>
          </div>
        </div>

        {/* Health Science */}
        <div className="institution-card">
          <div className="institution-icon">
            <FaHeartbeat />
          </div>

          <div className="institution-content">
            <h2>Health Science</h2>

            <p>
              Offers allied health science programs that support modern
              healthcare systems.
            </p>

            <a
              href="https://alliedhealthsciences.shanmugha.edu.in/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="visit-btn">Visit Website</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurInstitutions;

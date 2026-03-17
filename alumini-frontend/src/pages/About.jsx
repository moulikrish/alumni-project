import "./Styles/about.css";
import { FaBullseye, FaEye } from "react-icons/fa";

function About(){

  return(

    <div className="about-page">

      {/* ABOUT OUR INSTITUTION */}

      <section className="about-section">

        <div className="about-content">
          <h1>About Our Institution</h1>

          <p>
            Shanmugha Educational Institutions are committed to providing
            high-quality education and fostering innovation, leadership,
            and professional excellence. Our institutions focus on
            academic growth, research, and community development while
            preparing students to face global challenges.
          </p>
        </div>

      </section>


      {/* MISSION VISION */}

      <section className="mission-vision">

        <h1>Mission & Vision</h1>

        <div className="mv-container">

          {/* Mission */}
          <div className="mv-card">

            <FaBullseye className="mv-icon"/>

            <h2>Mission</h2>

            <ul>
              <li>To achieve excellence in education through continuous innovation and quality learning.</li>
              <li>To prepare learners to meet global challenges with competence and confidence.</li>
              <li>To nurture ethical values, leadership qualities, and social responsibility.</li>
              <li>To promote research and development for the benefit of society.</li>
            </ul>

          </div>


          {/* Vision */}
          <div className="mv-card">

            <FaEye className="mv-icon"/>

            <h2>Vision</h2>

            <ul>
              <li>To provide an atmosphere that facilitates high quality learning.</li>
              <li>To impart training for relevant hard and soft skills.</li>
              <li>To instill industrial adaptability and entrepreneurship.</li>
              <li>To promote research and development for the benefit of society.</li>
            </ul>

          </div>

        </div>

      </section>

    </div>

  )

}

export default About
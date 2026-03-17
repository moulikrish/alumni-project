import "./Styles/contact.css";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-page">
      {/* CONTACT INTRO */}

      <section className="contact-hero">
        <div className="contact-overlay">
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Reach out for any queries or
            support.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}

      <section className="contact-section">
        {/* LEFT SIDE */}
        <div className="get-touch">
          <h2>Get In Touch</h2>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>Pullipalayam, Morur(P.O),Sankari (T.K). Salem (D.T.), Tamil Nadu – 637304.</p>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <p>+91 73392 45999</p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>info@shanmugha.edu.in</p>
          </div>

          <div className="contact-item">
            <FaClock className="icon" />
            <p>Mon - Fri : 9:00 AM - 5:00 PM (Sunday: Closed)</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="send-message">
          <h2>Send Us a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" />

            <input type="email" placeholder="Email Address" />

            <input type="tel" placeholder="Phone Number" />

            <textarea placeholder="Message" rows="5"></textarea>

            <button type="submit">Submit Now</button>
          </form>
        </div>
      </section>

      {/* GOOGLE MAP */}

      <section className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.6264537788943!2d77.8796876!3d11.4346356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba961284b77fe25%3A0x6bc69b28b6037366!2sSri%20Shanmugha%20Educational%20Institution!5e0!3m2!1sen!2sin!4v1772772287684!5m2!1sen!2sin" 
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </section>
    </div>
  );
}

export default Contact;

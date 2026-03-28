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
            <p>Neelambur, Coimbatore, Tamil Nadu – 637304.</p>
          </div>

          <div className="contact-item">
            <FaPhone className="icon" />
            <p>+91 73392 45999</p>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>info@kathir.edu.in</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62656.67312754701!2d76.98597568119906!3d11.035470513115133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8f8a1a1102167%3A0x68a77d6cb82f55a6!2sKathir%20College%20of%20Education!5e0!3m2!1sen!2sin!4v1774689650978!5m2!1sen!2sin" 
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

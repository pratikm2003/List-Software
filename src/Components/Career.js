import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import growthImg from "../Assets/Grow.png";
import cbsHeroImg from "../Assets/about.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./Footer";

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", position: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  function openForm() {
    setShowForm(true);
  }

  function closeForm() {
    setShowForm(false);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.position) {
      alert("Please fill Name, Email, and Position");
      return;
    }

    setSubmitting(true);

    const subject = encodeURIComponent(`Job Application | ${form.position}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPosition: ${form.position}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:info@listspl.co.in?subject=${subject}&body=${body}`;

    setSuccessMessage("Thank you! We have received your application.");

    setTimeout(() => {
      setSubmitting(false);
      setShowForm(false);
      setForm({ name: "", email: "", position: "", message: "" });
    }, 600);

    setTimeout(() => setSuccessMessage(""), 5000);
  }

  return (
    <div className="career-wrapper">
      <Navbar />

      {/* HERO PARALLAX */}
      <header
        className="career-hero parallax-bg"
        style={{ backgroundImage: `url(${cbsHeroImg})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title shimmer-text">Build Your Future With Us</h1>
          <p className="hero-subtext">
            Discover opportunities, grow your skills, and thrive with our team.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="career-intro" data-aos="fade-up">
        <div className="career-intro-card glass-card">
          <img src={growthImg} alt="Career Growth" />
          <div>
            <h2 className="shimmer-text">Grow Your Career with List Software</h2>
            <p>
              At LIST Software Pvt. Ltd., we build a culture where talent thrives,
              creativity is celebrated, and ideas grow into innovations.
            </p>
            <p>
              Join a passionate team delivering impactful software solutions to clients globally.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="career-features">
        <h3 data-aos="fade-up" className="shimmer-text" style={{ marginLeft: "120px" }}>
          Your Journey Begins Here
        </h3>

        <div className="featur-grid">
          <div className="feature-card glass-card" data-aos="zoom-in">
            <h4>Our Work Culture</h4>
            <ul>
              <li>Creative & innovative environment</li>
              <li>Collaborative team spirit</li>
              <li>Continuous learning</li>
              <li>Healthy work–life balance</li>
            </ul>
          </div>

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="200">
            <h4>Why Join Us?</h4>
            <ul>
              <li>Career growth & mentorship</li>
              <li>Training & development</li>
              <li>Community participation</li>
              <li>Social impact programs</li>
            </ul>
          </div>

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400">
            <h4>Life at List Software</h4>
            <ul>
              <li>Fun & collaborative workspace</li>
              <li>Open communication</li>
              <li>Workshops & tech talks</li>
              <li>Team-building activities</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="career-cta glass-card" data-aos="fade-up">
        <h3 className="shimmer-text">Career Opportunities</h3>
        <p>Your next big career move starts here.</p><br />

        <button className="btn-main" onClick={openForm}>Apply Now</button>
        <a href="https://www.linkedin.com/company/listspl/" className="btn-outline" target="_blank">
          Visit LinkedIn
        </a>
      </div>

      {/* FORM MODAL */}
      {showForm && (
        <div className="apply-modal">
          <div className="apply-box glass-card" data-aos="zoom-in">
            <button className="close-btn" onClick={closeForm}>×</button>

            <h3 className="shimmer-text">Apply Now</h3>

            <form onSubmit={handleSubmit}>
              <label>Name*</label>
              <input name="name" value={form.name} onChange={handleChange} />

              <label>Email*</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} />

              <label>Position*</label>
              <input name="position" value={form.position} onChange={handleChange} />

              <label>Message</label>
              <textarea name="message" rows={4} value={form.message} onChange={handleChange}></textarea>

              <label>Upload Resume</label>
              <input type="file" />

              <button className="btn-main" disabled={submitting}>
                {submitting ? "Submitting..." : "Send Application"}
              </button>
            </form>
          </div>
        </div>
      )}

      {successMessage && (
        <div className="success-toast">{successMessage}</div>
      )}

      <Footer />
    </div>
  );
};

export default Career;




















{/* <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="about-hero"
          style={{
            backgroundImage: `url(${cbsHeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="about-hero-inner custom-hero-box">
            <Typography variant="h3" className="hero-title">
              Careers at List Software
            </Typography>

            <Typography variant="body1" className="hero-subtitle">
              At List Software, we believe in bold ideas, collaborative teamwork, and shaping tomorrow.
            </Typography>
          </div>
        </motion.section> */}
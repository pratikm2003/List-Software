import React from "react";
import "../App.css";
import Navbar from "./Navbar";
import heroImg from "../Assets/about.jpg";
import { motion } from "framer-motion";
import Footer from "./Footer";


const CustomerSupport = () => {
  return (
    <div className="corp-page">

        <Navbar />
        
        
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="about-hero"
          style={{
            backgroundImage: `url(${heroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            marginTop: "0px",
          }}
        >
          <div className="about-hero-inner custom-hero-box">
            <h1 className="hero-title">Customer Support Services</h1>
            <p className="hero-subtitle">
                We provide structured, reliable, and scalable support services
          designed for corporate and institutional customers.
            </p>
          </div>
        </motion.section><br /><br />   


      {/* SERVICES */}
      <section className="corp-section">
        <h2>Our Support Offerings</h2>

        <div className="corp-grid">
          <div className="corp-card">
            <h3>Operational Support</h3>
            <p>
              Assistance for day-to-day operational queries, system usage,
              and process clarification.
            </p>
          </div>

          <div className="corp-card">
            <h3>Technical Assistance</h3>
            <p>
              Support for application-related issues, configuration guidance,
              and controlled troubleshooting.
            </p>
          </div>

          <div className="corp-card">
            <h3>Service Requests</h3>
            <p>
              Structured handling of service requests with defined resolution
              timelines and accountability.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="corp-section corp-light">
        <h2>How Our Support Works</h2>

        <ol className="corp-steps">
          <li>Request is received through authorized channels</li>
          <li>Initial assessment and categorization</li>
          <li>Resolution or escalation as per service scope</li>
          <li>Closure with confirmation</li>
        </ol>
      </section>

      {/* CONTACT */}
      <section className="corp-section">
        <h2>Contact & Engagement</h2>

        <div className="corp-contact">
          <div>
            <strong>Email</strong>
            <p>support@companydomain.com</p>
          </div>

          <div>
            <strong>Business Hours</strong>
            <p>Monday to Saturday, 09:00 AM – 6:00 PM</p>
          </div>

          <div>
            <strong>Service Scope</strong>
            <p>Corporate and Institutional Clients</p>
          </div>
        </div>
      </section>


            <Footer/>
    </div>
  );
};

export default CustomerSupport;

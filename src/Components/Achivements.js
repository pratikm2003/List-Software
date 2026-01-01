import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import growthImg from "../Assets/Achievements.png";
import cbsHeroImg from "../Assets/about.jpg";
import b1 from "../Assets/b1.jpg";
import b2 from "../Assets/b2.jpg";
import b3 from "../Assets/b3.jpg";
import b4 from "../Assets/b4.jpg";
import b5 from "../Assets/b5.jpg";
import b6 from "../Assets/b6.jpg";
import b7 from "../Assets/b7.jpg";
import b8 from "../Assets/b8.jpg";
import b9 from "../Assets/b9.jpg";
import b10 from "../Assets/b10.jpg";
import b11 from "../Assets/b11.jpg";
import b12 from "../Assets/b12.jpg";
import b13 from "../Assets/b13.jpg";

import management from "../Assets/best-finance-management-2017.jpg";
import besthr from "../Assets/best-hr-2014.jpg";
import business from "../Assets/business-excellence-award-by-tlc.jpg";
import iso from "../Assets/iso-9001-2015.jpg";

import man from "../Assets/man.jpg";

import "aos/dist/aos.css";
import AOS from "aos";
import Footer from "./Footer";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";





const Achivements = () => {
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
          <h1 className="hero-title shimmer-text">Our Achievements</h1>
          <p className="hero-subtext">
            Celebrating milestones and successes that define our journey.
          </p>
        </div>
      </header>

      {/* INTRO */}
      <section className="career-intro" data-aos="fade-up">
        <div className="career-intro-card glass-card">
          <img src={growthImg} alt="Career Growth" />
          <div>
            <h2 className="shimmer-text">Achievements  </h2>
            <p>
                At List Software, our achievements reflect our commitment to excellence and innovation in software development.
            </p>
            <p>
                From industry awards to successful project deliveries, we take pride in the milestones we've reached together with our clients and team.
            </p>
            <p>
                Join us as we continue to push boundaries and set new standards in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="career-features">
        <h3 data-aos="fade-up" className="shimmer-text" style={{ marginLeft: "120px" }}>
          <h2>Trusted by 100+ Banks  </h2>
        </h3>

        <div className="featur-grid">
          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b1} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b2} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b3} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b4} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b5} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b6} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b7} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b8} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b9} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b10} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b11} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b12} alt="Banks " style={{ height: "130px" }} />
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "160px" }}>
            <img src={b13} alt="Banks " style={{ height: "130px" }} />
          </div>    
        </div>
      </section>

      {/* SUB HEADER */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="sub-header"
        >
          <div className="sub-header-content" >
            <Typography variant="h3" className="font-bold"style={{fontFamily: 'Garamond'}}>
              Awards and Recognition
            </Typography>

            <Typography variant="body1" className="mt-4 opacity-90 text-lg" style={{fontFamily: 'Garamond'}}>
                Honoring our dedication to excellence in software solutions.
            </Typography>
          </div>
        </motion.section><br/>

        <section className="career-features">
        <h3 data-aos="fade-up" className="shimmer-text" style={{ marginLeft: "120px" }}>
          Awards and Recognition
        </h3>

        <div className="featur-grid">
          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "420px" }}>
            <img src={management} alt="Banks " style={{ height: "330px" }} />
            <h3>Best Financial Management Award by TLC</h3>
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "420px" }}>
            <img src={besthr} alt="Banks " style={{ height: "330px" }} />
            <h3>Best HR Practices Award by TLC</h3>
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "420px" }}>
            <img src={business} alt="Banks " style={{ height: "330px" }} />
            <h3>Business Excellence Award by TLC</h3>
          </div> 

          <div className="feature-card glass-card" data-aos="zoom-in" data-aos-delay="400" style={{ height: "420px" }}>
            <img src={iso} alt="Banks " style={{ height: "330px" }} />
            <h3>ISO 9001:2015 Certification</h3>
          </div>
        </div>
      </section>







      <section className="corp-section">
  <h2>LIST 2.0 - Leadership</h2>

  <div className="corp-grid">
    
    <div className="corp-card" style={{ display: "flex", gap: "34px" }}>
       

      <div
        className="feature-card glass-card"
        data-aos="zoom-in"
        data-aos-delay="400"
        style={{ height: "340px", width: "100%" }}
      >
        <img src={man} alt="Banks" style={{ height: "230px", borderRadius: "10%" }} />
        <h3>Gireesh P Balaganur</h3>
        <p>CEO, CTO & Director</p>
        <p>26+ Years of Industry Experience</p>
      </div>

      <div
        className="feature-card glass-card"
        data-aos="zoom-in"
        data-aos-delay="400"
        style={{ height: "340px", width: "100%" }}
      >
        <img src={man} alt="Banks" style={{ height: "230px", borderRadius: "10%" }} />
        <h3>Santosh R Deshpande</h3>
        <p>Chief Business Officer & Director</p>
        <p>25+ Years of Industry Experience</p>
      </div>

    </div>
  </div><br/><br/>






    <h2>Our Team</h2>

    <div className="corp-grid">
  <div
    className="corp-card"
    style={{
      display: "flex",
      gap: "34px",
      flexWrap: "wrap",
      justifyContent: "center",
      maxWidth: "1100px",
      margin: "0 auto"
    }}
  >
    {/* Card 1 */}
    <div
      className="feature-card glass-card"
      data-aos="zoom-in"
      data-aos-delay="100"
      style={{ height: "300px", width: "308px", textAlign: "center" }}
    >
      <img
        src={man}
        alt="Sanjeev S. Kulkarni"
        style={{
          height: "180px",
          width: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <h3>Sanjeev S. Kulkarni</h3>
      <p>Customer Partner</p>
      <p>10+ Years with LIST</p>
    </div>

    {/* Card 2 */}
    <div
      className="feature-card glass-card"
      data-aos="zoom-in"
      data-aos-delay="200"
      style={{ height: "300px", width: "308px", textAlign: "center" }}
    >
      <img
        src={man}
        alt="Ravindra D. Nashikkar"
        style={{
          height: "180px",
          width: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <h3>Ravindra D. Nashikkar</h3>
      <p>Sr. Product Leader</p>
      <p>20+ Years with LIST</p>
    </div>

    {/* Card 3 */}
    <div
      className="feature-card glass-card"
      data-aos="zoom-in"
      data-aos-delay="300"
      style={{ height: "300px", width: "308px", textAlign: "center" }}
    >
      <img
        src={man}
        alt="Vikrant V. Kulkarni"
        style={{
          height: "180px",
          width: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <h3>Vikrant V. Kulkarni</h3>
      <p>Product Engineering Lead</p>
      <p>20+ Years with LIST</p>
    </div>

    {/* Card 4 */}
    <div
      className="feature-card glass-card"
      data-aos="zoom-in"
      data-aos-delay="400"
      style={{ height: "300px", width: "308px", textAlign: "center" }}
    >
      <img
        src={man}
        alt="Tejkumar Bankar"
        style={{
          height: "180px",
          width: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <h3>Tejkumar Bankar</h3>
      <p>CFO and Operations Lead</p>
      <p>1+ Years with LIST</p>
    </div>

    {/* Card 5 */}
    <div
      className="feature-card glass-card"
      data-aos="zoom-in"
      data-aos-delay="500"
      style={{ height: "300px", width: "308px", textAlign: "center" }}
    >
      <img
        src={man}
        alt="Dayanand D. Lavhate"
        style={{
          height: "180px",
          width: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <h3>Dayanand D. Lavhate</h3>
      <p>Customer Care Lead</p>
      <p>20+ Years with LIST</p>
    </div>

    {/* Card 6 */}
    <div
      className="feature-card glass-card"
      data-aos="zoom-in"
      data-aos-delay="600"
      style={{ height: "300px", width: "308px", textAlign: "center" }}
    >
      <img
        src={man}
        alt="Vaibhav S. Deshpande"
        style={{
          height: "180px",
          width: "180px",
          objectFit: "cover",
          borderRadius: "50%"
        }}
      />
      <h3>Vaibhav S. Deshpande</h3>
      <p>Cloud and Partner Ecosystem</p>
      <p>20+ Years with LIST</p>
    </div>
  </div>
</div>



</section>


      

      <Footer />
    </div>
  );
};

export default Achivements;
import React, { useState } from "react";
import Navbar from "./Navbar";
import heroImg from "../Assets/about.jpg";
import sideImg from "../Assets/team.jpeg";

import {
  CssBaseline,
  TextField,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import { motion } from "framer-motion";
import Footer from "./Footer";

const Contact = () => {
  // FORM STATES
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ERROR STATES
  const [errors, setErrors] = useState({});

  // SUCCESS TOAST
  const [toastOpen, setToastOpen] = useState(false);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Remove error when typing
  };

  // VALIDATION LOGIC
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim() || formData.message.length < 2)
      newErrors.message = "Message must be at least 10 characters long";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // SUBMIT
  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Form Submitted:", formData);
      setToastOpen(true);
      setTimeout(() => setToastOpen(false), 2000);

      // Clear form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <>
      <CssBaseline />

      {/* SUCCESS TOAST */}
      <Snackbar open={toastOpen} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
        <Alert severity="success" variant="filled">Message Sent Successfully!</Alert>
      </Snackbar>

      <div className="contact-wrapper">

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
            <h1 className="hero-title">Get in Touch</h1>
            <p className="hero-subtitle">
              We empower banks with innovative, future-ready technology solutions.
            </p>
          </div>
        </motion.section>

        {/* CONTACT GRID */}
        <div className="contact-grid">

          {/* LEFT INFO PANEL */}
          <motion.div
            className="info-panel"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="info-title">Contact Information</h2>

            <div className="info-card">
              <LocationOnIcon className="icon" />
              <div>
                <h4>Address</h4>
                <p>Sangli, Maharashtra – List Software pvt ltd</p>
              </div>
            </div>

            <div className="info-card">
              <EmailIcon className="icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:  career@listspl.co.in" className="text-blue-600 underline">  career@listspl.co.in</a> <br />
                <a href="mailto: bankingsales@listspl.co.in" className="text-blue-600 underline"> bankingsales@listspl.co.in</a>
              </div>
            </div>

            <div className="info-card">
              <PhoneIcon className="icon" />
              <div>
                <h4>Phone</h4>
                <a href="tel:+91 95299 23868" > +91 95299 23868</a>
              </div>
            </div>

            <img src={sideImg} className="contact-side-img" alt="team" />
          </motion.div>

          {/* FORM PANEL */}
          <motion.div
            className="form-panel"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="form-header">Send Us a Message</h2>

            <div className="dual-input">
              <TextField
                label="Full Name"
                name="fullName"
                fullWidth
                value={formData.fullName}
                onChange={handleChange}
                error={!!errors.fullName}
                helperText={errors.fullName}
              />

              <TextField
                label="Email Address"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>

            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              margin="normal"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
            />

            <TextField
              label="Subject"
              name="subject"
              fullWidth
              margin="normal"
              value={formData.subject}
              onChange={handleChange}
              error={!!errors.subject}
              helperText={errors.subject}
            />

            <TextField
              label="Message"
              name="message"
              fullWidth
              margin="normal"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
            />
            

            <Button variant="contained" className="send-btn" onClick={handleSubmit}>
              Send Message
            </Button>
            <br /><br />
            {/* WHATSAPP FLOAT BUTTON */}
        <a href="https://wa.me/919876543210" className="send-btn1" target="_blank">
          WHATSAPP US
        </a>
          </motion.div>

        </div>

        {/* OFFICE BRANCHES */}
        <motion.div
          className="branches-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="branch-title">Our Office Branches</h2>

          <div className="branch-grid">

            <div className="branch-card">
              <h3>🏢 Head Office – Sangli</h3>
              <p>Rahul Complex. Opp. Tata Petrol Pump, Guest House, Vishrambag, Sangli - 416 415.</p>
              <p><strong>Phone:</strong> +91 233 2304 306
              +91 233 2303 221</p>
            </div>

            <div className="branch-card">
              <h3>📍 Pune Branch</h3>
              <p>1601, Saji Nivas. House No. 834, Opp. to SBI. Warje Malwadi, Pune.</p>
              <p><strong>Phone:</strong> 07875449833</p>
            </div>

            <div className="branch-card">
              <h3>🏬 Kolhapur Branch</h3>
              <p>F-2, Business House, E-652, Shahupuri. 2nd Lane, Opp. Hariprasad Mangal Karyalaya, Kolhapur - 416001.</p>
              <p><strong>Phone:</strong> +91 231 2669164 / 65 / 66</p>
            </div>

          </div>
        </motion.div>

        {/* MAP */}
        <motion.div className="new-map" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2>Our Location</h2>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.552554872774!2d74.58708!3d16.8503617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11879a428aa59%3A0x70a6b3b54fc1f476!2sLIST%20Software%20Pvt.%20Ltd.%3A%20Core%20Banking%20Software%20Company!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </motion.div>

        

      </div>

      <Footer />
    </>
  );
};

export default Contact;

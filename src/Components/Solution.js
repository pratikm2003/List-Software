import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import heroImg from "../Assets/about.jpg";
import hands from "../Assets/hands.webp";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Footer from "./Footer";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  Switch,
  IconButton,
  Typography
} from "@mui/material";

const Solution = () => {
 

  return (
    <div>
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
            <h1 className="hero-title">Our Solutions</h1>
            <p className="hero-subtitle">
              We empower banks with innovative, future-ready technology solutions.
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Our Solutions</h2>

                <p className="mt-2">
                  <b>C-KYC</b> enables centralized customer identity verification across banking systems.
                </p><br />
                <p className="mt-2">
                  <b>Anti-Money Laundering</b> monitors transactions to detect and prevent financial fraud.
                </p><br />
                <p className="mt-2">
                  <b>CTS Interface</b> provides seamless electronic cheque clearing integration.
                </p><br />
                <p className="mt-2">
                  <b>Audit Module</b> ensures regulatory compliance through detailed activity tracking.
                </p><br />
                <p className="mt-2">
                  <b>Credit Appraisal System</b> evaluates loan eligibility and assesses financial risk.
                </p><br />
                <p className="mt-2">
                  <b>ABPS, DBTL, and NACH</b> support automated subsidy transfers and mandate processing.
                </p><br />
                <p className="mt-2">
                  <b>Agency Banking</b> allows banks to deliver services through authorized agents.
                </p><br />
                <p className="mt-2">
                  <b>Mobile Banking</b> offers secure banking services via mobile applications.
                </p><br />
                <p className="mt-2">
                  <b>Internet Banking</b> provides customers with a safe and convenient online banking platform.
                </p><br />
                <p className="mt-2">
                  <b>Loan Document</b> Printing automates the generation of loan-related documents.
                </p><br />
                <p className="mt-2">
                  <b>Statement</b> on Email enables customers to receive account statements digitally.
                </p><br />
                <p className="mt-2">
                  <b>E-Passbook</b> maintains a digital record of customer transactions.
                </p>
              </CardContent>
            </Card><br /><br />


            
                    {/* SEAMLESS INTEGRATION & TRUSTED SECURITY */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  style={{
    width: "100%",
    background: "linear-gradient(180deg, #cfeeff 0%, #eaf7ff 100%)",
    padding: "80px 0",
    marginTop: "80px"
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      padding: "0 24px"
    }}
  >
    {/* LEFT TEXT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "#1d1b4c",
          lineHeight: "1.2"
        }}
      >
        SEAMLESS <br /> INTEGRATION
      </h2>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "#334155",
          maxWidth: "420px"
        }}
      >
        Our solutions integrate effortlessly with existing banking
        ecosystems, ensuring smooth data flow, real-time connectivity,
        and zero operational disruption.
      </p>
    </div>

    {/* CENTER ILLUSTRATION */}
    <div style={{ flex: 1, textAlign: "center" }}>
      <img
        src={hands}
        alt="Seamless Integration and Trusted Security"
        style={{
          width: "100%",
          maxWidth: "520px"
        }}
      />
    </div>

    {/* RIGHT TEXT */}
    <div style={{ flex: 1, textAlign: "right" }}>
      <h2
        style={{
          fontSize: "42px",
          fontWeight: "800",
          color: "#1d1b4c",
          lineHeight: "1.2"
        }}
      >
        TRUSTED <br /> SECURITY
      </h2>

      <p
        style={{
          marginTop: "20px",
          fontSize: "18px",
          color: "#334155",
          marginLeft: "auto",
          maxWidth: "420px"
        }}
      >
        Built with enterprise-grade security, encryption, and compliance
        controls to protect customer data and meet RBI and regulatory
        standards.
      </p>
    </div>
  </div>
</motion.section><br />



<br />

                    
      <Footer />
    </div>
  );
};

export default Solution;


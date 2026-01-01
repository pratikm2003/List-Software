import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import heroImg from "../Assets/about.jpg";
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
import ideologyImg from "../Assets/ckyc.png";




const Ckyc = () => {
 

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
            <h1 className="hero-title">C-KYC</h1>
            <p className="hero-subtitle">
              We empower banks with innovative, future-ready technology solutions.
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Ckyc</h2>

                <p className="mt-2">
                        CKYC” is a web based application, which is used to upload the KYC details of Bank Customer to CESAI to get Centralized KYC Id. 
                        This system also used to get KYC details of new customers of bank by CKYC ID. Central KYC Registry is a centralized repository 
                        of KYC records of customers in the financial sector with uniform KYC norms and inter-usability of the KYC records across the 
                        sector with an objective to reduce the burden of producing KYC documents and getting those verified every time when the customer 
                        creates a new relationship with a financial entity.
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of C-KYC</h2>
            
                          {[
                            {
                              content:
                                "Helps to provide bank customer’s centralized KYC information.",
                            },
                            {
                              content:
                                "Allow Customers to access CKYC details from other banks also.",
                            },
                            {
                              content:
                                "No need to re-enter existing customer’s information while making new KYC registration.",
                            },
                            {
                              content:
                                "Facility to map downloaded data from another software",
                            },
                            {
                              content:
                                "Facility to view different CKYC reports.",
                            },
                            {
                              content:
                                "Facility to conversion of bulk amount of customers at a time in CESAI acceptable format",
                            },
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              className="ideology-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow"
                            >
                              <h3 className="font-semibold text-primary">{item.title}</h3>
                              <p className="text-sm mt-1">{item.content}</p>
                            </motion.div>
                          ))}
                        </div>
            
                        {/* Image */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          className="ideology-img"
                        >
                          <img
                            src={ideologyImg}
                            alt="Core Ideology"
                            className="rounded-lg shadow-lg"
                            style={{  marginTop: "50px" }}
                          />
                        </motion.div>
                      </div><br /><br /><br />

      <Footer />
    </div>
  );
};

export default Ckyc;


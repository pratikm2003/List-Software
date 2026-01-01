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
import ideologyImg from "../Assets/creadit.png";




const Creadit = () => { 
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
            <h1 className="hero-title">Credit Appraisal System</h1>
            <p className="hero-subtitle">
                Simplifying Loan Approvals with Comprehensive Credit Analysis
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Audit Module</h2><br/>

                <p className="mt-2">
                    LIST credit appraisal system is a smart banking system to analyze credit worthiness of borrower. 
                    This system helps to get decision while disbursing loan to any proponent. It calculates risk ratios 
                    according borrowers financial behavior and relation with bank. Credit Appraisal is a helps to discover 
                    the risks associated with the extension of the credit facility. It is generally carried by the financial 
                    institutions which are involved in providing financial funding to its customers. In LIST credit appraisal 
                    system Financial risk is assessed in terms of static ratios; it helps to measure performance & financial 
                    indicators of borrower.
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of CAS</h2>
            
                          {[
                            {
                              content:
                                "Low risk arises in credit disbursement by proper analysis of borrower.",
                            },
                            {
                              content:
                                "Comprehensive web based data management system with web based Reporting Engine and easy to use menu driven application.",
                            },
                            {
                              content:
                                "Dynamic hierarchy creation. User can create his own hierarchy as per organizational structure.",
                            },
                            {
                              content:
                                "Supports tracking of exposures at various levels to minimize risk. ",
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
                        </motion.div><br /><br />
                        
                      </div><br /><br /><br />

      <Footer />
    </div>
  );
};

export default Creadit;


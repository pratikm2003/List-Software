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
import ideologyImg from "../Assets/Loan.png";




const LoanDocument = () => {
 

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
            <h1 className="hero-title">Loan Document Printing</h1>
            <p className="hero-subtitle">
                Streamlining Loan Documentation: Efficient Printing Solutions for Financial Institutions
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Loan Document Printing</h2><br/>

                <p className="mt-2">
                    Loan Document Printing is a web based application, developed to generate & print documents required in and 
                    after loan sanctioning process. The system is tightly integrated to CBS, where customer data will be imported 
                    from CBS & will be used while generating documents.
                </p><br />
                <p className="mt-2">
                    This Loan document printing application has been designed to standardize the legal document formats by the 
                    bank drafted in consultation with their legal consultants and to avoid the manual mistakes that occur while 
                    preparing these documents manually. And also it helps to control unwanted alteration done inadvertently. 
                    System has facility to Print One or More Document at a Time.
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of Loan document printing</h2>
            
                          {[
                            {
                              content:
                                "Bank as well as customer will save time while using this system.",
                            },
                            {
                              content:
                                "System will maintain the standardization of legal documents over the whole bank.",
                            },
                            {
                              content:
                                "Helps to avoid unwanted modifications which may occur by mistake.",
                            },
                            {
                              content:
                                "Reduces chances of missing to print any legal document required for a proposal.",
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

export default LoanDocument;


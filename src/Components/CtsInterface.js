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
import ideologyImg from "../Assets/cts.png";




const CtsInterface = () => {
 

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
            <h1 className="hero-title">Cts Interface</h1>
            <p className="hero-subtitle">
                Seamless Integration for Enhanced Banking Operations
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">CTS Interface</h2><br/>

                <p className="mt-2">
                    Cheque truncation means stopping the flow of the physical cheques issued by a drawer to the drawee branch. 
                    The physical instrument is truncated at some point en route to the drawee branch and an electronic image of 
                    the cheque is sent to the drawee branch along with the relevant information like the MICR fields, date of 
                    presentation, presenting banks etc. This would eliminate the need to move the physical instruments across branches
                    , except in exceptional circumstances, resulting in an effective reduction in the time required for payment of 
                    cheques, the associated cost of transit and delays in processing, etc., thus speeding up the process of collection 
                    or realization of cheques.
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of CTS interface</h2>
            
                          {[
                            {
                              content:
                                "CTS interface eliminates the time, money and manpower wasted during physical movement of cheques (from banks to clearing house).",
                            },
                            {
                              content:
                                "Thus, Cheque Truncation System (CTS) is a process of stopping the flow of physical cheques and replacing it with electronic images.",
                            },
                            {
                              content:
                                "Faster clearing cycle – Cheque Truncation System (CTS) significantly reduces the time taken for cheque clearing, leading to quicker fund availability for customers.",
                            },
                            {
                              content:
                                "Cheque Truncation system reduces the scope for clearing-related frauds, as physical cheques are not moved between banks.",
                            },
                            {
                              content:
                                "There is no fear of losing cheque in transit. – Since physical cheques are not moved between banks, there is no risk of cheques being lost or misplaced during transit.",
                            },
                            {
                              content:
                                "Simple and user-friendly graphical user interface – The CTS interface is designed to be intuitive and easy to use, making it accessible for bank staff with varying levels of technical expertise.",
                            },
                            {
                              content:
                                "Bitonal Front & Back, Grey scale images – The CTS interface supports both bitonal and greyscale images, ensuring high-quality image capture and processing.",
                            },
                            {
                              content:
                                "Automatic encoding and endorsing of cheques – The CTS interface automates the encoding and endorsing of cheques, reducing manual effort and minimizing errors.",
                            },
                            {
                              content:
                                "Data file encryption before transmission to service branch/Clearing House – The CTS interface ensures that all data files are encrypted before transmission, enhancing security and protecting sensitive information.",
                            },
                            {
                              content:
                                "Enables user to avoid duplicate MICR cheques – The CTS interface includes features to detect and prevent duplicate MICR cheques, reducing the risk of fraud and errors.",
                            },
                            {
                              content:
                                "Enables high productivity because of its easy to use feature – The CTS interface is designed to enhance productivity through its user-friendly features and efficient workflows.",
                            },
                            {
                              content:
                                "Also suitable for sub member banks. – The CTS interface is adaptable and can be effectively utilized by sub member banks, ensuring broad accessibility and usability across different banking institutions.",
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

export default CtsInterface;


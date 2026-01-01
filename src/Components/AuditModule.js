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
import ideologyImg from "../Assets/audit.png";




const AuditModule = () => {
 

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
            <h1 className="hero-title">Audit Module</h1>
            <p className="hero-subtitle">
                Streamlining Financial Audits with Precision and Efficiency
                </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Audit Module</h2><br/>

                <p className="mt-2">
                    LIST audit module is specially made for audits & audit related work. Every single audit point can be tracked
                     & the software will display if the same audit point is getting repeat in frequent audits. The software 
                     follows all audit standards like Concurrent Audit / Internal Audit / Statutory Audit etc. and yet it can be 
                     customized your way by using some easy parameters. The module generates many useful audit reports.
                </p>
                <p>
                    This is a web based module. It conducts the audit process in a systematic & automated format. 
                    This module is used for effective audit compliance & maintains the batch wise audit records. While using 
                    this module, the flow of audit will be carried out in batch wise manner. There are different stages like
                     Delegation, Compliance, Verification and Confirmation etc. After confirming every audit compliance point, 
                     you can say the audit of that specific batch is done successfully.
                </p>
                <br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of LIST Audit module</h2>
            
                          {[
                            {
                              content:
                                "LIST audit module gives facility to define static & dynamic heads for audit points as.",
                            },
                            {
                              content:
                                "This module is used to report abnormalities in functioning / transactions in branches.",
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

export default AuditModule;


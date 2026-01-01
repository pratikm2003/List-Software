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
import ideologyImg from "../Assets/antimoney.png";




const AntiMoney = () => {
 

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
            <h1 className="hero-title">Anti-Money</h1>
            <p className="hero-subtitle">
                Anti-Money Laundering (AML) refers to a set of procedures, laws, and regulations designed to stop the practice of generating income through illegal actions.
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Anti Money Laundering</h2><br/>

                <p className="mt-2">
                        <li> LIST Anti Money Laundering is a web based application, to identify & control money laundering & financial terrorism activities which conduct high risk to financial institutions.</li><br/>
                        <li> AML gives a view of approximate or exact matching of banned entities with bank customers called as Name Screening.</li><br/>
                        <li> Customer Risk management also built up in this system, where categorization of risk, updating customer risks etc are included.</li><br/>
                        <li> System also generates statutory reports for Financial Intelligence Unit- India (FIU-IND) in its prescribed format.</li><br/>
                        <li> LIST’s Anti Money laundering software is one of most worthy, flexible & effective tool for financial institutes to identify Financing Terrorism & money laundering activities and report it to government.</li><br/>
                        <li> The AML application provides functionalities for detection, investigation of suspicious transactions and other activities that are in accordance with the statutory Reporting.</li><br/>
                        <li> AML is tightly integrated with our own CBS application, and can be integrated with any other CBS application deployed in the organization / financial institution.</li>
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights OF AML</h2>
            
                          {[
                            {
                              content:
                                "AML System helps banks / financial institute to trace out illegal activates like money laundering, financing terrorism etc and report it to FIU-IND in their prescribed format with automated process.",
                            },
                            {
                              content:
                                "Effective management to control money laundering & terrorism financing.",
                            },
                            {
                              content:
                                "AML Facility keeps watch on customer to verify whether he exist in banned list or not.",
                            },
                            {
                              content:
                                "Automated of alert generation engine which runs periodically at set frequency & generates alerts.",
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

export default AntiMoney;


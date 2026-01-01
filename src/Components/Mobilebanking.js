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
import ideologyImg from "../Assets/Mobile.png";




const Mobilebanking = () => {
 

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
            <h1 className="hero-title">Mobile Banking</h1>
            <p className="hero-subtitle">
                Banking at Your Fingertips: Secure, Convenient, and Instant Access to Your Finances
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Mobile Banking</h2><br/>

                <p className="mt-2">
                    The “LIST- Mobile Banking System” is a mobile banking application which allows you to perform 
                    non-financial as well as financial transactions. It includes funds transfer, account balance summary, 
                    view mini statement, send cheque book request & register your email for receiving transaction updates etc.
                </p><br />
                <p className="mt-2">
                    The customer can enjoy the mobile banking service 24x7. The application is very easy to use, secure, convenient & simple.
                </p><br />
                <p className="mt-2">
                    The customer can view his account balance, last 5 transactions, Cheque related queries & other requests can do fund transfers, 
                    recharge services for Mobile, DTH as well as Data Card, can pay Bill payment of Electricity, Insurance & Telecom, etc.
                </p><br /> 
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of Mobile Banking</h2>
            
                          {[
                            {
                              content:
                                "Helps to provide bank customers 24x7 Mobile banking services.",
                            },
                            {
                              content:
                                "Allows to facilitate customers automated facilities like balance enquiry, mini statement, cheque book related transactions etc.",
                            },
                            {
                              content:
                                "Facility to provide account statement on customer’s registered email id.",
                            },
                            {
                              content:
                                "Enables customers to do fund transfer through IMPS, NEFT & RTGS.",
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

export default Mobilebanking;


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
import ideologyImg from "../Assets/Agency.png";




const AgencyBanking = () => {
 

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
            <h1 className="hero-title">Agency Banking</h1>
            <p className="hero-subtitle">
                Expanding Financial Services through Local Agents
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Agency Banking</h2><br/>

                <p className="mt-2">
                    Agency Banking provides limited scale banking and financial services to the members through engaged agents 
                    under a valid agency agreement, rather than a teller/ cashier. It is the agency of an outlet who conducts 
                    banking transactions on behalf of a bank.
                </p><br />
                <p className="mt-2">
                    We provide a user friendly and comfortable application to make agency banking flow smoothly.
                </p><br />
                <p className="mt-2">
                    This application is designed for agents. Here agents can create new customers, can do different types of transactions as per the request are stored in web applications.
                </p><br />
                <p className="mt-2">
                    Doorstep Banking is the term used for providing limited scale banking and financial services to the members through the employee of the Bank / Engaged Agents under a valid agency agreement.
                </p><br />
                <p className="mt-2">
                    The facility is a very economical way for providing services to the customers in remote areas via employee of the Bank / Agents rather than opening of a branch. It is the agency 
                    (Business Correspondent / Franchise) of an outlet who conducts banking transactions on behalf of the bank.
                </p><br />
                <p className="mt-2">
                    We have provided a very user friendly application to make agency banking flow smoothly.
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of Agency banking module</h2>
            
                          {[
                            {
                              content:
                                "The customer will get the services at its door step by the employee of the Bank or by an appointed agent of the Bank.",
                            },
                            {
                              content:
                                "The new customers from remote location will be added into the Bank’s Customer Base which otherwise may become the customer of other Bank or may remain away from Banking.",
                            },
                            {
                              content:
                                "The Customers which are physically challenged / unable to walk into the branch will get the services for Deposit / Withdrawal of Cash.",
                            },
                            {
                              content:
                                "The customers will be able to get the banking services at their door step without visiting the branch and thus saving their time and cost of travel.",
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

export default AgencyBanking;


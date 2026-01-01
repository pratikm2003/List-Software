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
import ideologyImg from "../Assets/E-Passbook.png";




const Epassbook = () => {
 

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
            <h1 className="hero-title">E-Passbook</h1>
            <p className="hero-subtitle">
                Digital Banking Made Easy: Instant Access to Your E-Passbook Anytime, Anywhere
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">E-Passbook</h2><br/>

                <p className="mt-2">
                    LIST e-Passbook is a mobile application developed to provide electronic passbook to bank customer. 
                    To use the application there is no need internet connection for every time as it provides online as well 
                    as offline service. Once registration done successfully, it requires internet connectivity to sync the 
                    application to the main system (or CBS) to get updated data.
                </p><br />
                <p className="mt-2">
                    The application mainly developed for providing electronic passbook though mobile phones, along with that user 
                    can get account details, account statement, bank holidays list and a facility to generate his personal ledger.
                     The application can use offline as well as in online mode.
                </p><br />
                <p className="mt-2">
                    LIST e-Passbook can be used in two modes offline & online. While login to the application, select either 
                    offline or online mode. While registration, user can set different MPIN to both offline & online login. And 
                    while login, provide the set MPIN. Using this application user can view updated account summary or current 
                    balance by login with online mode, user can create a personal ledger, where he can store his income & 
                    expenditures, user can get holiday list of bank
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of E-passbook</h2>
            
                          {[
                            {
                              content:
                                "It reduces Passbook printing & stationary cost.",
                            },
                            {
                              content:
                                "Online and offline access 24X7. ",
                            },
                            {
                              content:
                                "Faster service can be providing to bank customers.",
                            },
                            {
                              content:
                                "Search transaction history based on date, amount and transaction description.",
                            },
                            {
                              content:
                                "Statements can be obtained on mail in pdf /xls format.",
                            },
                            {
                              content:
                                "Personal Ledger can be created.",
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

export default Epassbook;


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
import ideologyImg from "../Assets/abps.png";




const Abps = () => {
 

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
            <h1 className="hero-title">ABPS/ DBTL/ NACH</h1>
            <p className="hero-subtitle">
                Automating Banking Processes for Seamless Transactions and Enhanced Efficiency 
            </p>
          </div>
        </motion.section><br /><br />   



        <Card className="about-card p-6 shadow-xl" style={{ width: "80%", margin: "0 auto" }}>
              <CardContent>
                <h2 className="text-xl font-bold text-primary">ABPS/ DBTL/ NACH</h2><br/>

                <p className="mt-2">
                    It is a centralized electronic transfer system to get direct mandates from correspondent credit banks for 
                    the purpose of disbursing allowance using Aadhaar number. To get benefit under this system, adhaar number must 
                    be mapped to CBS bank account of same customer. This process of mapping is called as Mandate initiating. 
                    To make mandates using this application, mandate entries should be done. These mandates would approve by 
                    NPCI, for that a mapper file should be provided to NPCI. Arista Payment solution generates those mapper files. 
                    And after approving them, it will be update to CBS also.
                </p><br />
                <p className="mt-2">
                    DBTL scheme enables the LPG customers to get subsidy directly to their respective bank accounts. 
                    You can link your aadhaar card to the bank account to get the direct benefit of the subsidy.
                </p><br />
                <p className="mt-2">
                    Same as APBS, DBTL also need to approve mandates. The process of approving mandates is same for DBTL. 
                    Only it needs additional information regarding LPG connection.
                </p><br />
                
              </CardContent>
            </Card><br /><br /><br />


            {/* CORE IDEOLOGY */}
                      <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center" style={{ width: "80%", margin: "0 auto" }}>
                        <div className="ideology-text space-y-4">
            
                          <h2 className="text-2xl font-bold text-primary">Highlights of ABPS/DBTL</h2>
            
                          {[
                            {
                              content:
                                "It excludes unnecessary delays & paper work involved in existing process.",
                            },
                            {
                              content:
                                "Arista Payment Solutions makes simplification of the mandate acceptance and recording process.",
                            },
                            {
                              content:
                                "Process of transferring subsidies & benefits into aadhaar mapped bank account will become seamless.",
                            },
                            {
                              content:
                                "This application enables smooth conversion of downloaded file & generation of return file to be uploaded.",
                            },
                            {
                              content:
                                "Banks can provide faster service to their customers by adopting this system.",
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

export default Abps;


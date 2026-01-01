import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";

import cbsHeroImg from "../Assets/about.jpg";
import study1 from "../Assets/rajapurbank.jpg";
import study2 from "../Assets/samarthbank.jpg";

// MUI
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Animations
import { motion } from "framer-motion";
import Footer from "./Footer";

const CaseStudy = () => {
  const [darkMode, setDarkMode] = useState(false);

  // MUI THEME
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#0b74d1" },
        },
        typography: {
          fontFamily: `"Garamond", "Baskerville", "Times New Roman", serif`,
        },
      }),
    [darkMode]
  );

  const caseStudies = [
    {
      
      id: 1,
      title: "Rajapur Urban Bank",
      description:
        "Rajapur Urban Bank achieved exponential growth using Custodian Core Banking Solution as a core resource.",
      image: study1,
      link: "#",
    },
    {
      id: 2,
      title: "Samarth Bank, Solapur",
      description:
        "Samarth Sahakari Bank became one of the fastest-growing banks powered by Custodian CBS, delivering remarkable efficiency and digital excellence.",
      image: study2,
      link: "#",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={`${darkMode ? "bg-gray-900" : "bg-white"}`}>

       

        <Navbar />

        {/* HERO BANNER */}

        <motion.section
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="about-hero"
                  style={{
                    backgroundImage: `url(${cbsHeroImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop: "0px",
                  }}
                >
                  <div className="about-hero-inner custom-hero-box">
                    <h1 className="hero-title">Case Studies</h1>
                    <p className="hero-subtitle">
                      Real success stories powered by LIST Core Banking Solutions.
                    </p>
                  </div>
                </motion.section><br/>
     
        

        {/* SUB HEADER */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="sub-header"
        >
          <div className="sub-header-content">
            <Typography variant="h3" className="font-bold">
              Our Impact
            </Typography>

            <Typography variant="body1" className="mt-4 opacity-90 text-lg">
              Discover how our CBS solutions transformed cooperative banks across India.
            </Typography>
          </div>
        </motion.section>

        {/* CASE STUDY GRID */}
        <section className="case-grid">
          <div className="grid-layout">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="case-card">
                  <div className="case-img">
                    <img 
                      src={study.image}
                      alt={study.title}
                      className="img-hover"
                    />
                  </div>

                  {/* TEXT */}
                  <CardContent>
                    <Typography variant="h5" className="case-title">
                      {study.title}
                    </Typography>

                    <Typography variant="body2" className="case-desc">
                      {study.description}
                    </Typography>

                    <a href={study.link} className="read-more">
                      READ MORE →
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div><br/>


{/* SALES CTA */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mt-12">
            <Card className="glass-card">
              <CardContent>
                <h2 className="section-title">Looking for Core Banking Software?</h2>

                <p className="section-text">
                  Whether migrating or adopting CBS for the first time — we’re here to help.
                </p>

                <p>📞 <a href="tel:+91 95299 23868" > +91 95299 23868</a></p>
                <p>📧 <a href="mailto: bankingsales@listspl.co.in" className="text-blue-600 underline"> bankingsales@listspl.co.in</a></p>

                <button className="demo-btn" onClick={() => window.location.href = "/contact"}>
                 Request a Demo
                </button>
              </CardContent>
            </Card>
          </motion.div>

          
        </section>

        
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default CaseStudy;

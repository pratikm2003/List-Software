import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import aboutImg from "../Assets/about.jpg";
import ideologyImg from "../Assets/idology.png";
import ourteam from "../Assets/team.jpeg";
import custodian from "../Assets/custodian.jpg";
// MUI
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

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

// Animations
import { motion } from "framer-motion";
import Footer from "./Footer";

const About = () => {
  const [darkMode, setDarkMode] = useState(false);

  // MUI Theme
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


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <div className={`about-page ${darkMode ? "bg-gray-900" : "bg-white"}`}>
        
        {/* NAVBAR */}
        <div className="flex justify-end p-4 fixed top-0 right-0 z-50">
          <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </div>

        <Navbar />

        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="about-hero"
          style={{
            backgroundImage: `url(${aboutImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="about-hero-inner custom-hero-box">
  <Typography variant="h3" className="hero-title">
    About LIST Software Pvt. Ltd.
  </Typography>

  <Typography variant="body1" className="hero-subtitle">
    Delivering secure, scalable, and automation-driven Core Banking
    Software for Co-Operative Banks since 1997.
  </Typography>
</div>

        </motion.section>

        {/* MAIN CONTENT */}
        <section className="about-container max-w-6xl mx-auto px-4">

          {/* COMPANY CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="about-card p-6 shadow-xl">
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Who We Are</h2>

                <p className="mt-2">
                  LIST Software Pvt. Ltd. specializes exclusively in Core
                  Banking Application development for Co-Operative Banks and
                  Credit Societies.
                </p>

                <p className="mt-2">
                  For over two decades, we have partnered with{" "}
                  <b>100+ Banks</b> and <b>800+ branches</b> across Maharashtra.
                </p>

                <p className="mt-2">
                  Our ISO 9001:2015 certified processes ensure quality,
                  consistency, and customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* STATS GRID */}
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              ["27+ Years", "Industry Expertise"],
              ["100+ Banks", "Trusted Institutions"],
              ["800+ Branches", "CBS Powered"],
              ["ISO Certified", "9001:2015 Quality"],
            ].map(([title, subtitle], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className="stat-card bg-primary text-white p-5 rounded-lg text-center shadow-lg"
              >
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-sm opacity-90">{subtitle}</p>
              </motion.div>
            ))}
          </div>

          {/* CORE IDEOLOGY */}
          <div className="ideology-section mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="ideology-text space-y-4">

              <h2 className="text-2xl font-bold text-primary">Our Core Ideology</h2>

              {[
                {
                  title: "Core Values",
                  content:
                    "Reliability • Empathy • Integrity — We commit to trust and transparent service.",
                },
                {
                  title: "Core Purpose",
                  content:
                    "Empowering individuals and organizations with digital excellence.",
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

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="ideology-card bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow"
              >
                <h3 className="font-semibold text-primary">Mission</h3>
                <ul className="list-disc ml-5 text-sm mt-2">
                  <li>User-friendly design</li>
                  <li>Error-free development</li>
                  <li>Timely implementation</li>
                  <li>Responsive support</li>
                </ul>
                <p className="mt-2 text-sm">
                  Helping clients work smarter and faster.
                </p>
              </motion.div>
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
              />
            </motion.div>
          </div>

          {/* QUALITY POLICY */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Card className="about-card p-6 shadow-xl">
              <CardContent>
                <h2 className="text-xl font-bold text-primary">Quality Policy</h2>

                <p className="mt-2">
                  We are committed to strong Quality Management Systems.
                </p>

                <ul className="list-disc ml-5 mt-3 space-y-1">
                  <li>User-friendly software</li>
                  <li>Error-free performance</li>
                  <li>Timely deployment</li>
                  <li>24×7 support</li>
                </ul>

                <p className="mt-3">
                  Our solutions reflect reliability, consistency, and excellence.
                </p>
                
              </CardContent>
            </Card>
          </motion.div>
          {/* OUR TEAM SECTION */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-14"
>
  <Card className="about-card p-6 shadow-xl">
    <CardContent>

      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        Our Team
      </h2>

      {/* GRID FIXED */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT = TEXT */}
        <div className="our-team">

          <p className="text-lg leading-relaxed">
            LIST’s employees are the cream of its talent crop, coming in from some of the
            finest universities and institutions. We hone their skills through intensive
            training programs and exposure to cutting-edge technologies.
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            Our industry-certified developers bring diverse backgrounds, perspectives, and
            skills, contributing to our continuous effort to provide best-in-class software
            solutions and guidance to our esteemed customers.
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            Today, LIST has a dedicated team of experienced professionals across Science,
            Engineering, and Commerce — and the team continues to grow every month.
          </p>

        </div>

        {/* RIGHT = IMAGE */}
        <div className="flex justify-center items-start flex-shrink-0">
          <img
            src={ourteam}
            alt="Our Team"
            className="section-image"
          />
        </div>

      </div>

    </CardContent>
  </Card>
</motion.div>
{/* CUSTODIAN – CORE BANKING SOFTWARE SECTION */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-14"
>
  <Card className="about-card p-6 shadow-xl">
    <CardContent>

      <h2 className="text-2xl font-bold text-primary mb-6 text-center">
        CUSTODIAN: Browser-less Core Banking Software
      </h2>

      {/* GRID FIXED */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* LEFT = TEXT */}
        <div className="our-team">

          <p className="text-lg leading-relaxed">
            Our Core Banking Software <b>CUSTODIAN</b> is the result of deep innovative
            thinking combined with top-notch technologies. These hybrid technologies have
            redefined banking operations.
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            We launched our browser-less CBS solution to help banks adopt Core Banking
            long before the RBI deadline — offering unmatched speed, security, and
            stability.
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            The system is fully hosted in a centralized Datacenter, where all branches
            connect via VPN, RF, MPLS, leased lines, or other networks.
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            Reports, delivery channels, and policy systems all operate directly from the
            datacenter — ensuring seamless operations.
          </p>

          <p className="mt-3 text-lg leading-relaxed">
            Our customers trust CUSTODIAN because we provide consistent service, fast
            development cycles, and strict compliance with regulatory requirements.
          </p>

        </div>

        {/* RIGHT = IMAGE */}
        <div className="flex justify-center items-start flex-shrink-0">
          <img
            src={custodian}
            alt="Core Banking"
            className="section-image"
          />
        </div>

      </div>

    </CardContent>
  </Card>
</motion.div>


        </section>
        
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default About;

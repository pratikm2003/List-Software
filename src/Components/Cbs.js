import React, { useState, useMemo } from "react";
import Navbar from "./Navbar";
import cbsHeroImg from "../Assets/about.jpg";
import keymodule from "../Assets/keyModule1.png";

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
import { motion } from "framer-motion";
import Footer from "./Footer";

const Cbs = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: { main: "#0A66C2" },
        },
        typography: {
          fontFamily: `"Inter", "Garamond", "Baskerville", serif`,
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* PAGE WRAPPER */}
      <div className={`cbs-page ${darkMode ? "dark-bg" : "light-bg"}`}>

        

        <Navbar />

        {/* HERO SECTION */}
          <header
                  className="career-hero parallax-bg"
                  style={{ backgroundImage: `url(${cbsHeroImg})` }}
                >
                  <div className="hero-overlay">
                    <h1 className="hero-title shimmer-text">Core Banking Software</h1>
                    <p className="hero-subtext">
                      Transforming co-operative banking with secure, scalable and modern CBS.
                    </p>
                  </div>
                </header>

       

        {/* MAIN CONTENT */}
        <div className="content-container">

          {/* OVERVIEW */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card">
              <CardContent>
                <h2 className="section-title">CUSTODIAN: A Tailor-made Core Banking Software for Co-Operative Banks</h2>
                <p className="section-text">
                  Our CBS delivers a complete digital banking ecosystem—from customer onboarding to accounts, deposits, loans, reporting, and compliance.
                </p>

                <p className="section-text">
                  Custodian core banking solution is a wide-ranging, modular business solution that successfully addresses the banks requirements. Our Core Banking Software, Custodian helps bank to face day-to-day business challenges and is a helping tool for strategizing business plans. The dynamic, flexible and parameterized nature of Custodian Core Banking Software suits to adapt the banks for satisfying innovative business needs. Custodian is a set of robust functional components that support a wide range of business within the banking environment.
                </p>
                 <p className="section-text">
                  Today, Banks across the globe face a major challenge posed by Private and Nationalized banks. These institutions have to retain & enhance their clientele, comply with regulatory bodies & keep in pace with new technologies. This is where Custodian fits in, it enables you to counter these challenges and achieve increased productivity & improved customer satisfaction. Service Based Architecture located in the back-end of the system utilizes fully all the enhancements of high-end Technologies, thus covering all demands of new generation corporate solutions. Our latest offering for Core Banking Solution is Custodian. Moreover, the company is apt at developing frameworks, based on a service-based architecture which helps in converting a design into a strong product quickly and efficiently. This gives the company the ability to develop products and projects, which have high magnitude of complexities, large volume of data and are mission critical.We believe in creating better opportunities for our customers, business associates and employees.
                </p>
                <p className="section-text">
                  Designed for co-operative banks to boost productivity, reporting accuracy, security, and customer experience.
                </p>
              </CardContent>
            </Card>
          </motion.div><br />

          {/* KEY MODULES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <Card className="glass-card">
              <CardContent>
                <h2 className="section-title center">Key Modules</h2>

                <div className="grid-2col">
                  <ul className="module-list">
                    <li>Customer & Account Management</li>
                    <li>Deposits & FD Operations</li>
                    <li>Loans & Advances</li>
                    <li>Payments & Clearing</li>
                    <li>General Ledger</li>
                    <li>Automated Reporting</li>
                    <li>99.9% income leakage prevention</li>
                  </ul>

                  <motion.img
                    src={keymodule}
                    alt="CBS Key Modules"
                    className="module-image"
                    whileHover={{ scale: 1.05 }}
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div><br />

          {/* BENEFITS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <Card className="glass-card">
              <CardContent>
                <h2 className="section-title">Benefits</h2>

                <ul className="module-list">
                  <li>High-speed, scalable, and compliant architecture.</li>
                  <li>Custodian 14.x Core Banking Software supports Oracle Database 11g, WebLogic 11g, Linux 5.5, Solaris 11, VM 3.0, Exadata Database Machine, ExaLogic Elastic Cloud, SPARC Super Cluster and Exalytics</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* FEATURE GRID */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="feature-grid-section">
  <h2 className="section-title center">CBS Features</h2>

  <div className="feature-grid-new">
    {[
      {
        title: "Tailor-made for co-operative banks in India",
        desc: "CUSTODIAN CBS is specially designed and developed keeping in mind the needs of co-operative banks. It incorporates all the specific requirements on co-operative banks such as Share management, Dividend management, Staff Payroll, RBI statements for co-operative banks, state government reports and statements etc.",
        icon: "🏦",
      },
      {
        title: "Increased delivery channels",
        desc: "ATM, Internet, Mobile, POS, KIOSK based delivery channels can be used for improvised services to customer, acquiring new customers, providing new age services to customers. CUSTODIAN CBS can accommodate all these provisions in a very cost effective manner.",
        icon: "📡",
      },
      {
        title: "Cost effective, high performance and fully secured",
        desc: "CUSTODIAN CBS needs occupies very less system resources. Its sophisticated system architecture delivers increased throughput, thereby reducing system resources usage. It is ISO Audit certified and follows security guidelines published by RBI.",
        icon: "🔐",
      },
      {
        title: "Anywhere Banking",
        desc: "Customers can avail banking services across the bank and Channel network irrespective of location where their account is maintained.",
        icon: "🌍",
      },
      {
        title: "Improvised control on your business",
        desc: "On implementing CUSTODIAN CBS the bank can concentrate on their banking activities and focus on their business. Technology and automation will be taken care of by the robust architecture of CUSTODIAN CBS.",
        icon: "⚙️",
      },
      {
        title: "More accurate regulatory compliance",
        desc: "RBI, State government and other regulatory requirements and statutory reports are automated and timely delivered accurately. CUSTODIAN CBS is an efficient provider of reports.",
        icon: "📄",
      },
    ].map((item, i) => (
      <motion.div
        key={i}
        className="feature-card-new"
        whileHover={{ scale: 1.05, translateY: -5 }}
      >
        <div className="feature-icon">{item.icon}</div>
        <h3 className="feature-title">{item.title}</h3>
        <p className="feature-desc">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</motion.div><br />

    {/* CUSTODIAN Modules */}

<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="feature-grid-section">
            <h2 className="section-title">CUSTODIAN Modules</h2>
            <h2 className="section-title center">Branch Module</h2>

            <div className="feature4-grid">
              {[
                "Savings Deposits",
                "Current Deposits",
                "Fixed Deposits",
                "Reinvestment Deposits",
                "Recurring Deposits",
                "Pigmy Deposits",
                "Call Deposits",
                "Locker Module",
                "Operative Loan accounts",
                "Term loans",
                "Bank Guarantees and LC",
                "Clearing",
                "Remittances",
                "GST Module",
                "TDS calculations",
                "Cash Module",
                "Reports periodical inclusive Balance sheet, P & L a/cs. & RBI Reports",
                "Signature and Photo scanning and retrieval",
                "Passbook, FD receipts, Remittance, Voucher printing",
                "Standing Instructions Execution & Related Registers and statements",
                "Bills- For collection & Purchased / Discounted",
                "NPA identification & provisioning",
                

              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> 

              {/* HO Module */}

              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="feature-grid-section">
            
            <h2 className="section-title center">HO Module</h2>

            <div className="feature-grid">
              {[
                "H.O. Daily transactions",
                "Shares Accounting",
                "Banker Reconciliation",
                "RBI Returns & MIS Reports",
                "Investment Module",
                "Inventory",
                "Payroll",
                "CIBIL",
                "SMS Alerts",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> 

          {/* Add on product */}
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="feature-grid-section">
            
            <h2 className="section-title center">Add-On Products</h2>

            <div className="feature4-grid">
              {[
                "Inventory",
                "Payroll",
                "Credit Appraisal System",
                "Loan Document Printing",
                "C-KYC",
                "e-Passbook",
                "Audit Module",
                "RTGS Host to Host",
                "BCBF Management",
                "Anti Money Laundering",
                "Statement on E-mail",
                "Microfinance Module",
                "Mobile based Pigmy Collection",
                "NACH Dr/Cr, ABPS & DBTL, ECS MMS",
                "Business Intelligence",
                "Microfinance Collection on TAB",
                "Mobile Banking (Non- Financial Transactions)",
                "Internet Banking (Non-Financial Transactions)",
                "Prime Minister Insurance Scheme Management",
                "CTS Interface (Scanner & CHI)",
                "Loan Recovery Management",
                "Doorstep Banking Module",
                "Interface with EFT Switch (ATM Transactions / IMPS / E-commerce etc.)",
                "Interface to E-lobby Equipments (Cash Deposit Machines / Passbook Printers, etc.)",
              
              
              ].map((text, i) => (
                <motion.div
                  key={i}
                  className="feature-card"
                  whileHover={{ scale: 1.05 }}
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div> 
        

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

        </div>
      </div>
      <Footer />
    </ThemeProvider>
  );
};

export default Cbs;

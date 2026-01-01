import React from "react";
import logo from '../Assets/listLogo.png'
import { FaInstagram , FaLinkedinIn, FaYoutube } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-col brand">
          <img src={logo} alt="LIST Software" className="footer-logo" />

          <p>
            LIST is well-equipped and fully capable of meeting the operational and 
            regulatory requirements of Urban Co-operative Banks and Credit Societies.
          </p>

          <div className="social-icons">
              <a href="https://www.instagram.com/list_software/?utm_source=ig_web_button_share_sheet&igsh=MWd0ZHZ3OThtc2FibQ%3D%3D#" target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>            

              <a href="https://www.linkedin.com/company/listspl/" target="_blank" rel="noreferrer">
                <FaLinkedinIn />
              </a>

              <a href="https://www.youtube.com/@List_Software_Pvt_Ltd" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>
            </div>
        </div>

        {/* USEFUL LINKS */}
        <div className="footer-col">
          <h3>USEFUL LINKS</h3>
          <span className="line"></span>
          <ul>
            <li onClick={() => window.location.href = "/cbs"}>Core Banking Software</li>
            <li onClick={() => window.location.href = "/ckyc"}>C-KYC</li>
            <li onClick={() => window.location.href = "/antimoney"}>Anti Money Laundering</li>
            <li onClick={() => window.location.href = "/ctsinterface"}>CTS Interface</li>
            <li onClick={() => window.location.href = "/auditmodule"}>Audit Module</li>
            <li onClick={() => window.location.href = "/creadit"}>Credit Appraisal System</li>
            <li onClick={() => window.location.href = "/abps"}>ABPS / DBTL / NACH</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="footer-col">
          <h3>&nbsp;</h3>
          <span className="line invisible"></span>
          <ul>
            <li onClick={() => window.location.href = "/agencybanking"}>Agency Banking</li>
            <li onClick={() => window.location.href = "/mobilebanking"}>Mobile Banking</li>
            <li onClick={() => window.location.href = "/internetbanking"}>Internet Banking</li>
            <li onClick={() => window.location.href = "/loandocument"}>Loan Document Printing</li>
            <li onClick={() => window.location.href = "/statementonemail"}>Statement On Email</li>
            <li onClick={() => window.location.href = "/epassbook"}>E-Passbook</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>CONTACT DETAILS</h3>
          <span className="line"></span>

          <h4>Address</h4>
          <p>
            Rahul Complex, Opp. Tata Petrol Pump,<br />
            Guest House Gandhi Nagar, Vishrambag,<br />
            Sangli, Maharashtra 416415
          </p>

          <h4>Phone & Email</h4>
          <p className="link" href="tel:+91 233 2304 306" >+91 233 2304 306</p>
          <p className="link" href="tel:+91 233 2303 221">+91 233 2303 221</p>
          <p className="link" href="mailto: bankingsales@listspl.co.in" >bankingsales@listspl.co.in</p>

          <h4>Working Hours</h4>
          <p>Mon – Sat 9.00 am to 6.00 pm</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

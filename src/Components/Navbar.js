import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/listLogo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">

      {/* LEFT = BUTTONS */}
      <div className="navbar-links-container">

        <button onClick={() => navigate("/")}>HOME</button>
        <button onClick={() => navigate("/about")}>ABOUT</button>
        <button onClick={() => navigate("/cbs")}>CBS</button>
        <button onClick={() => navigate("/achivements")}>ACHIVEMENTS</button>

        {/* SOLUTIONS DROPDOWN */}
        <ul className="nav-menu">
          <li className="nav-item dropdown">
            <button className="nav-link" onClick={()=>navigate("/solution")}>
              SOLUTIONS <span className="caret">▾</span>
            </button>

            <ul className="dropdown-menu">
              <li><button onClick={() => navigate("/ckyc")}>C-KYC</button></li>
              <li><button onClick={() => navigate("/antimoney")}>ANTI-MONEY LAUNDERING</button></li>
              <li><button onClick={() => navigate("/ctsinterface")}>CTS INTERFACE</button></li>
              <li><button onClick={() => navigate("/auditmodule")}>AUDIT MODULE</button></li>
              <li><button onClick={() => navigate("/creadit")}>CREDIT APPRAISAL SYSTEM</button></li>
              <li><button onClick={() => navigate("/abps")}>ABPS / DBTL / NACH</button></li>
              <li><button onClick={() => navigate("/agencybanking")}>AGENCY BANKING</button></li>
              <li><button onClick={() => navigate("/mobilebanking")}>MOBILE BANKING</button></li>
              <li><button onClick={() => navigate("/internetbanking")}>INTERNET BANKING</button></li>
              <li><button onClick={() => navigate("/loandocument")}>LOAN DOCUMENT PRINTING</button></li>
              <li><button onClick={() => navigate("/statementonemail")}>STATEMENT ON EMAIL</button></li>
              <li><button onClick={() => navigate("/epassbook")}>E-PASSBOOK</button></li>
            </ul>
          </li>
        </ul>

        <button onClick={() => navigate("/customersupport")}>CUSTOMER SUPPORT</button>
        <button onClick={() => navigate("/casestudy")}>CASE STUDIES</button>
        <button onClick={() => navigate("/career")}>CAREER</button>
        <button onClick={() => navigate("/contact")}>CONTACT US</button>
      </div>

      {/* RIGHT = LOGO */}
      <div className="nav-logo-container">
        <button
          onClick={() => navigate("/")}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <img className="nav-logo" src={logo} alt="List Software Logo" />
        </button>
      </div>

    </nav>
  );
};

export default Navbar;

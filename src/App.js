import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Cbs from './Components/Cbs';
import Career from './Components/Career';
import Contact from './Components/Contact';
import CaseStudy from "./Components/CaseStudy";
import Solution from './Components/Solution';
import Ckyc from './Components/Ckyc';
import AntiMoney from './Components/AntiMoney';
import CtsInterface from './Components/CtsInterface';
import AuditModule from './Components/AuditModule';
import Creadit from './Components/Creadit';
import Abps from './Components/Abps';
import AgencyBanking from './Components/AgencyBanking';
import Mobilebanking from './Components/Mobilebanking';
import InternetBanking from './Components/InternetBanking';
import LoanDocument from './Components/LoanDocument';
import StatementOnEmail from './Components/StatementOnEmail';
import Epassbook from './Components/Epassbook';
import CustomerSupport from './Components/CustomerSupport';
import Achivements from './Components/Achivements';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          {/* MAIN ROUTES */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cbs" element={<Cbs />} />
          <Route path="/achivements" element={<Achivements />} />
          <Route path="/solution" element={<Solution />} />

          {/* SOLUTIONS */}
          <Route path="/ckyc" element={<Ckyc />} />
          <Route path="/antimoney" element={<AntiMoney />} />
          <Route path="/ctsinterface" element={<CtsInterface />} />
          <Route path="/auditmodule" element={<AuditModule />} />
          <Route path="/creadit" element={<Creadit />} />
          <Route path="/abps" element={<Abps />} />
          <Route path="/agencybanking" element={<AgencyBanking />} />
          <Route path="/mobilebanking" element={<Mobilebanking />} />
          <Route path="/internetbanking" element={<InternetBanking />} />
          <Route path="/loandocument" element={<LoanDocument />} />
          <Route path="/statementonemail" element={<StatementOnEmail />} />
          <Route path="/epassbook" element={<Epassbook />} />

          {/* OTHER */}
          <Route path="/customersupport" element={<CustomerSupport />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casestudy" element={<CaseStudy />} />

          {/* FALLBACK */}
          <Route path="*" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

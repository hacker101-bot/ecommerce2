import { BrowserRouter, Routes, Route } from 'react-router-dom';
import OilAndGasHomepage from './components1/OilandGas';
import AboutUsPage from './Pages/Aboutus';
// Import other pages as you create them
// import OperationsPage from './components1/OperationsPage';
// import SustainabilityPage from './components1/SustainabilityPage';
// import InvestorsPage from './components1/InvestorsPage';
// import ContactPage from './components1/ContactPage';
// import CareersPage from './components1/CareersPage';
// import ReportsPage from './components1/ReportsPage';

import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Homepage */}
        <Route path="/" element={<OilAndGasHomepage />} />
        
        {/* Company Pages */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} /> {/* Keeping both for compatibility */}
        

   
        <Route path="/contact" element={<div>Contact Us - Coming Soon</div>} />
        
        
        

      </Routes>
    </BrowserRouter>
  );
}

export default App;
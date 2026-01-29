import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { CheckoutPage } from './Pages/checkout/CheckoutPage';
import { OrdersPage } from './Pages/OrdersPage';
import {TrackingPage} from './Pages/TrackingPage'
import AboutUsPage from './Pages/Aboutus'
import TermsConditionPage from './Pages/Terms_conditions'
import RefundPolicyPage from './Pages/Refundpolicy'
import './App.css';
import './index.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path='/tracking' element={<TrackingPage/>} />
        <Route path='/aboutus' element={<AboutUsPage/>} />
        <Route path='/terms-condition' element={<TermsConditionPage/>} />
        <Route path='/refund-policy' element={<RefundPolicyPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

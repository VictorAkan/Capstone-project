import './App.css';
import { Routes,Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
import { ContactUs } from './Pages/contact/ContactUs';
import { Error } from './Pages/Error/Error';
import { LoginPage } from './Pages/login/LoginPage';
import { AdminSignUp } from './Pages/signup/AdminSignUp';
import { AdminDashboard } from './Pages/Dashboard/admin/AdminDashboard';
import { CarDealerShip } from './Pages/Dashboard/admin/car-dealership';
import { Other } from './Pages/Dashboard/admin/Other';
import { Dealership } from './Pages/dealership/Dealership';

function App() {
  return (
    <div className="">
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/dealership" element={<Dealership />} />

        <Route path="/adminDashboard" element={<AdminDashboard />} />

        <Route path="/carDealership" element={<CarDealerShip />} />

        <Route path="/other" element={<Other />} />

        <Route path="/contact" element={<ContactUs />} />

        <Route path="/signup" element={<AdminSignUp />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="*" element={<Error />} />

      </Routes>
    </div>
  );
}

export default App;

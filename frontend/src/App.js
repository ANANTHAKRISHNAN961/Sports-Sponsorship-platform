import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AthleteProfile from './pages/AthleteProfile';
import SponsorDashboard from './pages/SponsorDashboard';
import Footer from './components/Footer'; // Import your Footer component
import './App.css';

function App() {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100"> {/* Full height for flexbox layout */}
                <Navbar />
                <div className="custom-container flex-fill"> {/* Take remaining space for the content */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/athlete/:id" element={<AthleteProfile />} />
                        <Route path="/sponsor" element={<SponsorDashboard />} />
                    </Routes>
                </div>
                <Footer /> {/* Always visible at the bottom */}
            </div>
        </Router>
    );
}

export default App;

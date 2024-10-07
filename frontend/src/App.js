import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AthleteProfile from './pages/AthleteProfile';
import SponsorDashboard from './pages/SponsorDashboard';
import './App.css';

function App() {
    return (
        <Router>
            <Navbar />
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/athlete/:id" element={<AthleteProfile />} />
                    <Route path="/sponsor" element={<SponsorDashboard />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

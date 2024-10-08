import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Optional: for custom styling

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3 footer">
            <div className="container">
                <p className="mb-0">© 2024 Sports Sponsorship Platform. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

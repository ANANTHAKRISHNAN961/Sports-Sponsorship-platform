import React, { useState } from 'react';
import axios from 'axios';
import './Register.css'; // Make sure to create this CSS file

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState(''); // Added bio state
    const [userType, setUserType] = useState('athlete'); // athlete or sponsor
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        try {
            const endpoint = userType === 'athlete'
                ? 'http://localhost:5000/api/athletes/register'
                : 'http://localhost:5000/api/sponsors/register';

            const response = await axios.post(endpoint, {
                name,
                email,
                password,
                bio, // Send bio in the request
            });

            if (response.status === 201) { // Check for successful registration
                setSuccess('Registration successful! You can now log in.');
                console.log('Registration successful', response.data);
            }
        } catch (error) {
            console.error('Registration error:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data.message : 'Registration failed. Please check your details and try again.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h2 className="text-center">Register</h2>
                {error && <div className="alert alert-danger">{error}</div>}
                {success && <div className="alert alert-success">{success}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Bio</label>
                        <textarea 
                            className="form-control" 
                            value={bio} 
                            onChange={(e) => setBio(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">User Type</label>
                        <select 
                            className="form-control" 
                            value={userType} 
                            onChange={(e) => setUserType(e.target.value)}
                        >
                            <option value="athlete">Athlete</option>
                            <option value="sponsor">Sponsor</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;

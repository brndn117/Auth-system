import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you have react-router-dom installed
import Navbar from '../components/Navbar';
import './SignUpPage.css'; // Make sure this CSS file exists and styles your form

const SignUpPage = () => {
    // State variables for form inputs and messages
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); // NEW state for phone number
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(''); // For success or error messages

    const navigate = useNavigate(); // Hook for navigation

    // Function to handle form submission
    const handleSignUp = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        setMessage(''); // Clear any previous messages

        // Basic client-side validation
        if (password !== confirmPassword) {
            setMessage('Passwords do not match.');
            return;
        }

        if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
            setMessage('All fields are required.');
            return;
        }

        // You might also want to add validation for terms and conditions checkbox
        // e.g., if (!e.target.elements.termsCheckbox.checked) { setMessage('You must agree to terms.'); return; }


        try {
            // Send data to your Node.js backend signup endpoint
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send all required fields, including phoneNumber
                body: JSON.stringify({ fullName, email, phoneNumber, password }),
            });

            const data = await response.json(); // Parse the JSON response from the backend

            if (response.ok) { // Check if the response status is 2xx (e.g., 200, 201)
                setMessage(data.message || 'Signup successful!');
                // Clear the form fields upon successful signup
                setFullName('');
                setEmail('');
                setPhoneNumber('');
                setPassword('');
                setConfirmPassword('');
                // Optionally redirect the user after a short delay
                setTimeout(() => navigate('/login'), 1500); // Redirect to login page
            } else {
                // Handle errors from the backend (e.g., email already registered)
                setMessage(data.message || 'Signup failed. Please try again.');
            }
        } catch (error) {
            // Handle network errors (e.g., server not running, no internet)
            console.error('Network error during signup:', error);
            setMessage('Could not connect to the server. Please try again later.');
        }
    };

    return (
        <div className="signup-page">
            <Navbar /> 

            <div className="signup-container">
            <h2 className="signup-title">SIGN UP TO AN ACCOUNT</h2>
                <form onSubmit={handleSignUp}>
                    {/* Display messages to the user */}
                    {message && <p className={`message ${message.includes('successful') ? 'success' : 'error'}`}>{message}</p>}

                    <label htmlFor="fullName" className="signup-label">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        placeholder="Enter full name"
                        className="signup-input"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required // HTML5 validation for required fields
                    />

                    <label htmlFor="email" className="signup-label">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        className="signup-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    {/* NEW: Phone Number Input Field */}
                    <label htmlFor="phoneNumber" className="signup-label">Phone Number</label>
                    <input
                        type="tel" // Use type="tel" for phone numbers, enables numeric keyboard on mobile
                        id="phoneNumber"
                        placeholder="Enter phone number"
                        className="signup-input"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                    />

                    <label htmlFor="password" className="signup-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        className="signup-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label htmlFor="confirmPassword" className="signup-label">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder="Confirm password"
                        className="signup-input"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <div className="terms-checkbox">
                        <label>
                            <input type="checkbox" required /> {/* Add required for terms */}
                            I agree to the Terms and Conditions
                        </label>
                    </div>

                    <button type="submit" className="signup-btn">Sign up</button> {/* Change button type to submit */}
                </form>

                <div className="bottom-links">
                    <p>Already have an account? <a href="/login">Log in</a></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
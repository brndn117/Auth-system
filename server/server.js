// server.js (Adjusted for 'name', 'email', 'phoneNumber', 'password' columns)
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt'); // For password hashing

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// --- MySQL Database Connection ---
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Severin.10',
    database: 'project'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database: project');
});

// Register/Sign Up Route for Buyers
app.post('/api/signup', async (req, res) => {
    // *** NEW: Include phoneNumber in destructuring ***
    const { fullName, email, phoneNumber, password } = req.body;

    // Log the received data for debugging
    console.log('Received signup request. Body:', req.body);

    // *** UPDATED: Check for all required fields ***
    if (!fullName || !email || !phoneNumber || !password) {
        console.log('Validation Error: All fields (fullName, email, phoneNumber, password) are required.');
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check if buyer already exists by email (assuming email is unique)
        console.log(`Checking if email ${email} already registered.`);
        const [existingBuyers] = await db.promise().query('SELECT * FROM buyer WHERE email = ?', [email]);
        if (existingBuyers.length > 0) {
            console.log('Email already registered:', email);
            return res.status(409).json({ message: 'Email already registered.' });
        }

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log('Password hashed successfully.');

        // *** UPDATED: Include phoneNumber in the INSERT query ***
        const query = 'INSERT INTO buyer (name, email, phoneNumber, password) VALUES (?, ?, ?, ?)';
        console.log('Executing INSERT query with values:', [fullName, email, phoneNumber, '[HASHED_PASSWORD]']);
        await db.promise().query(query, [fullName, email, phoneNumber, hashedPassword]);

        console.log('Buyer registered successfully for email:', email);
        res.status(201).json({ message: 'Buyer registered successfully!' });
    } catch (error) {
        // Log more detailed error messages
        console.error('Error during buyer signup:', error.message);
        if (error.sqlMessage) {
            console.error('SQL Error:', error.sqlMessage);
        }
        res.status(500).json({ message: 'Server error during signup.' });
    }
});

// Login Route remains the same if you only log in with email and password
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        const [buyers] = await db.promise().query('SELECT * FROM buyer WHERE email = ?', [email]);

        if (buyers.length === 0) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        const buyer = buyers[0];

        const isMatch = await bcrypt.compare(password, buyer.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Include phoneNumber in the returned user object if desired
        res.status(200).json({ message: 'Login successful!', user: { id: buyer.buyer_id, fullName: buyer.name, email: buyer.email, phoneNumber: buyer.phoneNumber } });
    } catch (error) {
        console.error('Error during buyer login:', error);
        res.status(500).json({ message: 'Server error during login.' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});